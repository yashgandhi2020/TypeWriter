const Line = document.querySelector(`#line`);
const arr = ["Student", "Front-End Developer", "Web Developer"];
let blink = () => {
  let flag = true;
  setInterval(() => {
    Line.classList.toggle("changeColor");
    flag = false;
  }, 530);
};

let wait = async (time) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

let removeLine = async () => {
  let s = "a";
  while (s != "") {
    s = Line.innerHTML.substring(0, Line.innerHTML.length - 1);
    line.innerHTML = s;
    await wait(100);
  }
};

let makeLine = async (line) => {
  let string = "";
  for (let i of line) {
    string += i;
    Line.innerHTML = string;
    await wait(200);
  }
  await wait(2000);
  await removeLine();
};

let start = async () => {
  let counter = 5;
  while (counter) {
    for (let line of arr) {
      await makeLine(line);
      await wait(200);
    }
    counter--;
  }
};

blink();
start();
