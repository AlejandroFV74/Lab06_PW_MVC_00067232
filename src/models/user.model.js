class User {
    constructor(name, lastname, email) {
        this.id = Date.now().toString();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }

}

const users = [];
const save = (user) => {
users.push(user);
return user;
}

const saveUser = [];
const load = (saveUser) => {
    users.push(saveUser);
    return saveUser;
}



module.exports = {
User,
save,
load,
saveUser
};

