import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');
