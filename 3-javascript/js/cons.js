// let condition = false;

// if (condition) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// } else {
//     console.log("* * *");
//     console.log("* *");
//     console.log("*");
// }

// looping

// for (let i = 1; i <= 5; i++) {
//     console.log("*");
//     console.log("* *");
//     console.log("* * *");
// }

// console.log(true);
// console.log(5 == 1);

// let x = "false";

// console.log(x ? true : false);

// mark >= 80 => D
// mark >= 40 => P
// mark < 40 => F

// let mark = "hello";

// if (mark >=80) {
//     console.log("D");
// } else if (mark >= 40) {
//     console.log("P");
// } else if (mark < 40) {
//     console.log("F");
// } else {
//     console.log("Something wrong");
// }

// function run(mark) {
//     if (mark >= 40) {
//         return "U passed";
//     } else {
//         return "U fail";
//     }
// }

// console.log(run(35));
// console.log(run(75));
// console.log(run(65));

// function wakeUpCheck(wakeUpTime) {
//     if (wakeUpTime > 8) {
//         return "ကြိမ်လုံးလေးနဲ့ လာနှိုးမယ် 🤣";
//     }
//     return "အေးဆေးပဲ";
// }

// console.log(wakeUpCheck(4));
// console.log(wakeUpCheck(10));
// console.log(wakeUpCheck(7));
// console.log(wakeUpCheck(8));

// function attendance(arrivalTime, officeStartTIme = 9, rate = 1000) {
//   let lateTime = arrivalTime - officeStartTIme;
//   let lateAmount = rate * lateTime;
//   if (arrivalTime > officeStartTIme) {
//     return "U will late . U will pay for this " + lateAmount;
//   }
//   return "Thank U";
// }

// console.log(attendance(8));
// console.log(attendance(11));

// // 6နာရီ 500ဖြတ်

// console.log(attendance(8,6,500));

// function takeABus(pocketMoney, busFees = 300) {
//     if (pocketMoney > busFees * 2) {
//       if (pocketMoney > busFees) {
//         // let leftMoney = pocketMoney - busFees;
//         // return "U can take a bus and " +leftMoney+ " amount will left";
//         return `U can take a bus and ${pocketMoney - busFees} amount will left`;
//       }
//       return "U will walk";
//     }

//     return "စိတ်ကောက်မယ်";
// }

// console.log(takeABus(1000));
// console.log(takeABus(200));

// function waitTime(studentArrivalTime) {
//     if (studentArrivalTime > 10) {
//         return "U will punish";
//     }
//     return "U will learn without punishment";
// }

// console.log(waitTime(8));

// function examMark(marks) {
//     if (marks >= 80) {
//         return "Distinction!";
//     } else if (marks >= 40) {
//         return "Pass!";
//     } else if (marks < 40) {
//         return "Fail!";
//     }
//     return "You got something wrong!";
// }

// console.log(examMark("Hello"));

// console.log(!true);
// input ထဲဘာမှမပါရင် alert ထိုးပါ

// function yccEntrance(writing, viper, examPass = 60) {
//     if (writing >= examPass && viper >= examPass) {
//         return "U can  join YCC";
//     }
//     return "U can't";
// }

// console.log(yccEntrance(85,40));
// console.log(yccEntrance(60,80));

// function chooseBus(busNo) {
//     if (busNo === 20 || busNo === 65) {
//         return "U can get MMS IT";
//     }
//     return "U can't";
// }

// console.log(chooseBus(20));
// console.log(chooseBus(65));
// console.log(chooseBus(12));

// function chooseFood(hotpot, marLar, ice_cream = 20) {
//   if (hotpot > ice_cream || marLar > ice_cream) {
//     return "ဗိုက်ဝတယ် 😋";
//   }

//   return "ဗိုက် မဝဘူး😥😥";
// }

// console.log(chooseFood(11,21));
// console.log(chooseFood(21, 19));

// function search(input) {
//     // if (input) {
//     //     return "U are searching " + input + " keyword";
//     // }
//     // return "Please input something";

//     if (!input) {
//         return alert("Please input Something");
//     }
//     return "Please input something";
// }

// console.log(search());
// console.log(search("zhh"));
