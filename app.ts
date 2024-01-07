// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maxym',
//   age: 99,
//   hobbies: ['Sports', 'Cookies'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN,
  ONLY_READ_USER,
  AUTHOR,
}

const person = {
  name: 'Maxym',
  age: 99,
  hobbies: ['Sports', 'Cookies'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = '10';

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Work'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
