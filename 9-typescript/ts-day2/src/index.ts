// const arr: (string | number)[] = ["hello", "min ga lar par", 11];

// console.log(arr);

// const arr = ["hello", 12];
// console.log(arr);

// type Person = {
//   name: string;
//   age: number;
//   gender?: "male" | "female";
// };

// const data: Person[] = [
//   { name: "Christ", age: 20, gender: "male" },
//   { name: "zhh", age: 21, gender: "male" },
// ];
// console.log(data[1].gender);

// const arr: [string, number, boolean, Person, number] = [
//   "hello",
//   7,
//   false,
//   {
//     name: "christ",
//     age: 21,
//     },
//   1
// ];

// arr[3].name = "zhh";

// console.log(arr);

// let age: any = [{ name: "christ" }];

// age = 1;
// age = true;
// age.push("zhh");
// age.push("christ");

// console.log(age.name);

// enum Gender {
//   male,
//   female,
//   other,
// }

// type person = {
//   name: string;
//   gender: Gender;
// };

// const christ: person = {
//     name: "zhh",
//     gender:Gender.male
// }

// if (christ.gender === Gender.male) {
//     console.log("ok");
// }

interface Person {
  name?: string;
  age?: number;
  gender?: string;
}

// const christ: Required<Person> = {
//   name: "ZHH",
//   gender: "male",
// };

// console.log(christ);

const Person: Record<string | number, string | number> = {
  name: "zin htet",
  age: 21,
};

// console.log(Person);

const christ: Omit<Person, "age"> = {
    name: "zin htet",
    gender: "male"
};
console.log(christ);
