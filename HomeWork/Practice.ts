// №1
type User = {
    name: string
    age: number
    occupation: string
};

const users: Array<User> = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.age}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

//№2

interface User2 {
    name: string;
    age: number;
    occupation: string;
}

interface Admin2 {
    name: string;
    age: number;
    role: string;
}

export type Person2 = User2 | Admin2;

export const persons: Array<Person2>/* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson2(user: Person2) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson2);
