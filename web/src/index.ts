import { UserList } from "./views/UserList";
import { User } from "./models/User";

const root = document.getElementById('root')
const users = User.buildUserCollection()

users.on('change', () => {
    if (root) { new UserList(root, users).render() }
})
users.fetch()
