const obj = {
  name: "zin htet hlaing",
  age: 22,
  gender: "male",
  school: {
    schoolName: "MMS",
    classRoom: "in class",
  },
};
const { name, age, gender,school:{schoolName,classRoom} } = obj;
console.log(name, age, gender,schoolName,classRoom);

// const arr = ["Christ", 22, "male"];
// const [name, age, gender] = arr;
// console.log(name, age, gender);
