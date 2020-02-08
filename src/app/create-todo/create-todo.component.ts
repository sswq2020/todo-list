import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Category as Cat, Todo } from '../todo-list/interface';
import { PeopleService, People } from '../providers/people.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';

interface Category {
  id: number;
  name: string;
}


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})

export class CreateTodoComponent implements OnInit {
  form: FormGroup;

  people$: People[];
  message: string;

  categories: Category[] = [
    { id: 0, name: Cat[0] },
    { id: 1, name: Cat[1] },
    { id: 2, name: Cat[2] },
  ];

  @Output()
  create: EventEmitter<Partial<Todo>> = new EventEmitter();

  constructor(private fb: FormBuilder, private peopleServe: PeopleService) { }

  fetchPeople() {
    this.peopleServe.fetchPeople().subscribe(
      response => {
        this.people$ = response.body;
        console.log(response.headers.get('my-custom-header'))
      },
      (error: HttpErrorResponse) => {
        if (error instanceof Error) {
          this.message = `An error occured at frontend, ${error.error.message}`;
        } else {
          this.message = `Backend return error,status was ${error.status},body was ${error.message}`
        }
      }
    );
  }

  uploadFile(fileList) {
    const formData = new FormData();

    formData.append('avatar', fileList.files[0], 'avatar.jpg');

    this.peopleServe.uploadFile(formData).subscribe(res => {
      if (res.type === HttpEventType.UploadProgress) {
        const percent = Math.round(100 * res.loaded / res.total);
        this.message = `File is ${percent}% uploaded`;
      } else if (res instanceof HttpResponse) {
        this.message = `File is completely`;
      }
    })
  }


  ngOnInit() {
    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(15)]],
      category: ['', Validators.required],
      content: ''
    });
  }

  submit() {
    console.log(this.form.value);
    this.create.next({ ...this.form.value, category: Number(this.category.value) });
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get category(): AbstractControl {
    return this.form.get('category');
  }

  get content(): AbstractControl {
    return this.form.get('content');
  }
}
