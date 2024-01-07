const person = {
  name: 'Maxym',
  age: 99,
  hobbies: ['Sports', 'Cookies'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Work'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
