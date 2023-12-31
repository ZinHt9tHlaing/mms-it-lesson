// const playBtn = document.querySelector("#playBtn");
// const pauseBtn = document.querySelector("#pauseBtn");

// const audio = new Audio("../../sounds/to-the-bone.mp3");
// playBtn.addEventListener("click", () => {
//     audio.play();
//     console.log(audio.volume);
//     audio.volume = 0.5;
//     console.log(audio.volume);
//   console.log(audio.duration);
// });

// pauseBtn.addEventListener("click", () => {
//   audio.pause();
//   console.log(audio.currentTime);
// });

// // audio.addEventListener("loadstart", () => {
// //   console.log("Audio is loading");
// // });

// audio.addEventListener("pause", () => {
//     console.log("Audio starts playing");
//   });

const keyboard = document.querySelector("#keyboard");

const createBtn = (text) => {
  const btn = document.createElement("button");
  btn.className = `btn key-${text} h-32 w-14 bg-blue-100 text-blue-600 duration-100 rounded-lg active:scale-90 active:bg-blue-200 select-none`;
  btn.innerText = text;
  return btn;
};

const playSound = (currentKey) => {
  const sound = new Audio(`./sounds/${currentKey}.mp3`);
  sound.play();
};

const buttons = [
  { sound: "C4", key: "a" },
  { sound: "D4", key: "s" },
  { sound: "E4", key: "d" },
  { sound: "F4", key: "f" },
  { sound: "G4", key: "j" },
  { sound: "A4", key: "k" },
  { sound: "B4", key: "l" },
  { sound: "C5", key: ";" },
];

buttons.forEach((button) => keyboard.append(createBtn(button.sound)));

keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    playSound(event.target.innerText);
  }
});

document.addEventListener("keyup", (event) => {
  const currentButton = buttons.find((button) => button.key === event.key);
  if (currentButton) {
    const currentKey = document.querySelector(`.key-${currentButton.sound}`);
    currentKey.classList.add("play");

    currentKey.addEventListener("transitionend", () => {
      currentKey.classList.remove("play");
    });

    playSound(currentButton.sound);
  }
});
