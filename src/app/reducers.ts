export const SECOND = 'second';
export const HOUR = 'hour';
export const ADVANCE = 'advance';
export const RESET = 'reset';

export const clock = (state = new Date(), { type, payload }= { type: '', payload: null}) => {

  const date = new Date(state);

  switch (type) {
    case SECOND:
      date.setSeconds(date.getSeconds() + payload);
      return date;
    case HOUR:
      date.setHours(date.getHours() + payload);
      return date;
    default:
      return state;
  }
};

const defaultPeople = [
  { name: 'zhangsan', time: clock() },
  { name: 'lisi', time: clock()  },
  { name: 'wangsu', time: clock()  },
  { name: 'shishao', time: clock()  },
  { name: 'zhaoliu', time: clock()  },
];

export const people = (state = defaultPeople, { type, payload }) => {
  switch (type) {
    case ADVANCE:
      return state.map(person => {
         if (payload.name === person.name) {
           return {
             name: person.name,
             time: clock(person.time, {
               type: HOUR,
               payload: 5
             })
           };
         } else {
          return person;
         }

      });
      case RESET:
        return state.map(item => {
          return {...item, time: payload};
        });
    default:
      return state;
  }


};
