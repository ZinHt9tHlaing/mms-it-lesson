class School {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  schoolName = "No.3 High School";
  location = "Yangon";
  greeting(gg) {
    return gg;
  }

  #countOfStudent = 10;

  gettingStudentCount() {
    return this.#countOfStudent;
  }

  settingStudentCount(x) {
    return (this.#countOfStudent += x);
  }

  static test = "san kyi tar par";

  static testing() {
    console.log("this is testing");
  }
}

// console.log(School.test);
// console.log(School.testing());

// const christ = new School("Christ", 22, "male");

// const hla = new School("Hla Hla", 20, "female");

// console.log(christ, hla, christ.settingStudentCount(3));

class School2 extends School {
  constructor(name, age, gender, teacher) {
    super(name, age, gender), (this.teacher = teacher);
  }
  sanKyiTar = "Hello World";
}

const christ = new School2("Christ", 22, "male","Terry");
console.log(christ);
