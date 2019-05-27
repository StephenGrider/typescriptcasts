import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('a change happened');
});

user.trigger('change');
