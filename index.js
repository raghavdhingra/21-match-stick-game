const humanNum = document.getElementById("input-number");
const matchSticks = document.getElementById("match-sticks");
const computerHistory = document.getElementById("computer-history");
const humanHistory = document.getElementById("human-history");

let computerArray = [];
let humanArray = [];
const selectMatchStick = () => {
  let val = humanNum.value;
  humanNum.value = "";
  if (val < 1 || val > 4)
    return alert("Please select match sticks between 1 to 4");
  if (val % 1 !== 0) return alert("Please input a non decimal number");
  let totalMatchSticks = parseInt(matchSticks.innerText);
  if (val > totalMatchSticks)
    return alert("Match sticks are more than present");
  humanArray.push(val);
  totalMatchSticks -= val;
  matchSticks.innerText = totalMatchSticks;
  updateHistory();
  if (totalMatchSticks === 0) return alert("You lose");
  computerSelection();
};
const computerSelection = () => {
  let totalMatchSticks = parseInt(matchSticks.innerText);
  let selectedNum = 1;
  selectedNum = 5 - humanArray[humanArray.length - 1];
  totalMatchSticks -= selectedNum;
  matchSticks.innerText = totalMatchSticks;
  computerArray.push(selectedNum);
  updateHistory();
};

const updateHistory = () => {
  let compDiv = computerArray.map(
    (num, index) => `<div>${index + 1}. Computer has selected ${num}</div>`
  );
  let humanDiv = humanArray.map(
    (num, index) => `<div>${index + 1}. You have selected ${num}</div>`
  );
  computerHistory.innerHTML = compDiv.join("");
  humanHistory.innerHTML = humanDiv.join("");
};

const restartGame = () => {
  matchSticks.innerText = 21;
  computerArray = [];
  humanArray = [];
  updateHistory();
};
window.onload = () => {
  matchSticks.innerText = 21;
};
