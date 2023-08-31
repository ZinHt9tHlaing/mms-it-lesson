let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operators = ["+", "-", "*", "/", "%"];

let filter = (x) => {
  let current = displayBox.innerText;
  let lastChar = current[current.length - 1];

  // 10လုံးထက်ကြော်မရိုက်စေချင်တာပါ
  if (current.length >= 10) {
    return false;
  }

  if (current == "0" && x != ".") {
    clearLast();
  }

  if (operators.includes(x) && operators.includes(lastChar)) {
    return false;
  }

  return true;
};

let showInDisplay = (x) => {
  if (filter(x)) {
    displayBox.innerText += x;
  }
};

let calc = (_) => {
  //နောက်ဆုံး char ဟာ operator ထည်းမက မဖြစ်မနေ တွက်မယ်လို့ စဥ်စားထားတာဖြစ်ပါတယ်
  if (
    !operators.includes(displayBox.innerText[displayBox.innerText.length - 1])
  ) {
    displayBox.innerText = eval(displayBox.innerText);
  }
};

let clearAll = (_) => (displayBox.innerText = "");

let clearLast = (_) =>
  (displayBox.innerText = displayBox.innerText.substring(
    0,
    displayBox.innerText.length - 1
  ));

// keypad သည် key များအားလုံးရဲ့ parent element ဖြစ်တဲ့အတွက် key တွေကိုနှိပ်တာဟာ keypad ကိုနှိပ်တာနဲ့ တူညီပါတယ်
keyPad.addEventListener("click", (_) => {
  if (displayBox.innerText.length > 10) {
    displayBox.style.fontSize = 30 + "px";
  } else if (displayBox.innerText.length > 5) {
    displayBox.style.fontSize = 60 + "px";
  }
});

// bugs to fixed
// 09 လို့ရိုက်ရင် 9 ပဲထွက်ရမယ်
// 0.5 လို့ ရိုက်လို့ရရမယ်
// 90++ လို့ ရိုက်ရင်နောက်ဆုံးက operator နှစ်ခါမလာသင့်ပါ

// Do yourself
// 9+ ဆိုပြီး calc ကိုခိုင်ရင် operator နဲ့ဆုံးနေတာဖြစ်တဲ့အတွက် မတွက်ပဲ console မှာ error တက်
// fontsize ကို ထိန်းရမယ်
