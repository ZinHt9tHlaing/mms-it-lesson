// student
// name
// gender
// age
// profit ?

// oop concept
// access modifier => private, protected, public

class Student{

  f = "fff";

  constructor(name,gender,age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.namePrefix = this.name === "male" ? "Mr" : "Ms";
    this.fullName = this.namePrefix + " " + this.name;
    this.birthYear = 2023 - this.age;
  }

  introduction() {
    return `My name is ${this.name} and I was born in ${this.birthYear}`;
  }

  learn() {
    return `${this.name} can learn`;
  }

  // static property & method
  static a = "aaa";

  static who() {
    return "I am a student";

  }
  // access modifier
  // private property & method
  #x = "xxx";

  #y() {
    return "This is private method y";
  }

  run() {
    return "It will show the private property x, " + this.#y();
  }
}

const st1 = new Student("Mg Mg", "male", 17);
// console.log(st1.name);
// console.log(st1.x);
// console.log(st1.run());
// console.log(st1.#y);
// console.log(st1.f);

// console.log(st1);
// overwrite property
// st1.name = "Kyaw Kyaw";

// add property
// st1.pocketMoney = 500;

// property & method access
// console.log(st1.name);
// console.log(st1.age);
// console.log(st1.learn());

// console.log(st1);
// console.log(Student.who());
// console.log(Student.a);
// console.log(st1.address);

const st2 = new Student("Su Su", "female", 16);
// console.log(st2);

// oop concept inheritance

// class One{
//   a = "aa";
//   b = "bb";
//   c = "cc"
// }

// const one = new One;
// console.log(one);

// class Two extends One{
//   d = "dd";
//   e = "ee";
// }

// const two = new Two;
// console.log(two);

// oop concept encapsulation

class One{
  #x = "xxx";

  // getter & setter
  getX() {
    // extra step တွေ ထပ်ထည့်လို့ရ
    return this.#x;
  }

  setX(newValue) {
    // extra step တွေ ထပ်ထည့်လို့ရ
    this.#x = newValue; 
  }
}

const one = new One;
// overwrite (setter)
one.setX("aaa");

// access (getter)
console.log(one.getX());
