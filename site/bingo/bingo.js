/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */

const bingo = () => {
  do {
    user();
    Window.alert(rules);
    console.log(rules);
    answ = false;
    currentRanking();
    cardboard();
    rotatingDrum();
    keepPlaying();

    if (keepGoing === "no") {
      Window.alert("See you next time!");
    }
  } while (keepGoing === "yes");
};

let userName;
const user = () => {
  do {
    userName = Window.prompt(
      "What's your name? This will affect the name in our rankings."
    );
  } while (typeof userName !== "string");

  console.log(`Welcome, ${userName}`);
  Window.alert(`Welcome, ${userName}.`);
};

const rules = `This game has it's own rankings, based on players punctuations recorded.\n\nThe rules are simple, the more turns it gets for you to complete the cardboard, the less points you'll earn.\n\nThere's a maximum total of 300 points, achieved by completing a cardboard in 15 turns, this would mean to get a correct number for every ball released (1:1).\n\nThe minimum total of points is 0, achieved by completing the cardboard in 90 turns, by getting a correct number for every six balls released (1:6).`;

const rankingList = [
  { player: "Gerard Way", finishingRound: 78, points: 48 },
  { player: "Billy Joe", finishingRound: 72, points: 72 },
  { player: "Amy Lee", finishingRound: 85, points: 20 },
  { player: "Kurt Cobain", finishingRound: 66, points: 96 },
  { player: "Serj Tankian", finishingRound: 89, points: 4 },
  { player: "Dolores O'Riordan", finishingRound: 80, points: 40 },
];

let rankingMessage;

const currentRanking = () => {
  rankingList.sort((a, b) => b.points - a.points);

  rankingMessage = [`The current ranking is:`];
  for (let i = 0; i < rankingList.length; i++) {
    rankingMessage.push(
      `${i + 1}: ${rankingList[i].points} pts. - ${
        rankingList[i].player
      } did bingo in round ${rankingList[i].finishingRound}.`
    );
  }

  Window.alert(rankingMessage.join("\n"));
  console.log(rankingMessage.join("\n"));

  answ = false;
};

let numsInSingleArray;
let nums;
let question;

const cardboard = () => {
  question = "yes";

  do {
    cardboardGenerator();
    tableMsg();
    cardboardQuestion();

    if (question === "no") {
      Window.alert("The bingo will begin, take a seat.");
    }
  } while (question === "yes");
};

const randomNumberGenerator = () => Math.floor(Math.random() * 90) + 1;

const cardboardGenerator = () => {
  numsInSingleArray = [];
  nums = [[], [], []];

  for (let i = 0; i < 15; i++) {
    const numToAdd = randomNumberGenerator();
    const check = numsInSingleArray.includes(numToAdd);

    if (check === false) {
      numsInSingleArray.push(numToAdd);
    } else {
      i -= 1;
    }
  }
  numsInSingleArray.sort((a, b) => a - b);

  for (let i = 0; i < numsInSingleArray.length; i++) {
    switch (i) {
      case 0:
      case 3:
      case 6:
      case 9:
      case 12:
        nums[0].push(numsInSingleArray[i]);
        break;

      case 1:
      case 4:
      case 7:
      case 10:
      case 13:
        nums[1].push(numsInSingleArray[i]);
        break;

      case 2:
      case 5:
      case 8:
      case 11:
      case 14:
        nums[2].push(numsInSingleArray[i]);
        break;

      default:
        break;
    }
  }
};

const tableMsg = () => {
  console.log("Your Bingo Cardboard looks like this:");
  console.table(nums);
};

const cardboardQuestion = () => {
  do {
    question = Window.prompt(
      "Would you prefer another cardboard?\nType 'yes/no' to continue."
    );
    if (question !== "yes" && question !== "no") {
      Window.alert("Please answer 'yes' or 'no'.");
    }
  } while (question !== "yes" && question !== "no");
};

let ballsReleased = [];
let lineFilled;
let bingoFilled;
let count;
let answ;

function rotatingDrum() {
  answ = true;
  lineFilled = false;
  bingoFilled = false;
  count = 0;
  ballsReleased = [];

  do {
    const ball = randomNumberGenerator();
    let check = ballsReleased.includes(ball);

    if (check === false) {
      ballsReleased.push(ball);
    }
    count += 1;
    console.log(
      `Round: ${count}\nThe number released from the rotating drum is ${ball}`
    );

    for (let i = 0; i < nums.length; i++) {
      check = nums[i].includes(ball);

      if (check === true) {
        const indexBall = nums[i].indexOf(ball);
        nums[i][indexBall] = "X";
        break;
      }
    }

    tableMsg();

    if (lineFilled === false) {
      for (let i = 0; i < nums.length; i++) {
        checkLine(i);
      }
    }

    if (lineFilled === true && bingoFilled === false) {
      checkBingo();
    }

    bingoFilled === false ? ask() : updatedRanking();
  } while (answ === true);

  console.log("Exiting...");
}

let marked;

const checkLine = (val) => {
  marked = 0;
  for (let i = 0; i < nums[val].length; i++) {
    if (nums[val][i] === "X") {
      marked += 1;
    }
    if (marked === 5) {
      console.log(`Congrats ${userName}, you filled a LINE!!!`);
      Window.alert(`Congrats ${userName}, you filled a LINE!!!`);
      lineFilled = true;
    }
  }
};

let bingoRound;
const checkBingo = () => {
  marked = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === "X") {
        marked += 1;
      }

      if (marked === 15) {
        console.log(`Congrats ${userName}, you did BINGO!!!`);
        Window.alert(`Congrats ${userName}, you did BINGO!!!`);
        bingoRound = count;
        bingoFilled = true;
      }
    }
  }
};

const ask = () => {
  Window.confirm("Do you want to keep going?") ? (answ = true) : (answ = false);
};

const updatedRanking = () => {
  rankingList.push({
    player: userName,
    finishingRound: bingoRound,
    points: (90 - bingoRound) * 4,
  });
  rankingList.sort((a, b) => b.points - a.points);

  rankingMessage = [`The updated ranking is:`];
  for (let i = 0; i < rankingList.length; i++) {
    rankingMessage.push(
      `${i + 1}: With ${rankingList[i].points} pts. ${
        rankingList[i].player
      } did bingo in round ${rankingList[i].finishingRound}.`
    );
  }

  console.log(
    `You filled your entire cardboard in round n.${bingoRound}, achieving a total of ${
      (90 - bingoRound) * 4
    }pts.`
  );
  Window.alert(
    `You filled your entire cardboard in round n.${bingoRound}, achieving a total of ${
      (90 - bingoRound) * 4
    }pts.`
  );
  console.log(rankingMessage.join("\n"));
  Window.alert(rankingMessage.join("\n"));

  answ = false;
};

let keepGoing;
const keepPlaying = () => {
  do {
    keepGoing = Window.prompt(
      "Do you want to play again?\nType 'yes/no' to continue."
    );
    if (keepGoing !== "yes" && keepGoing !== "no") {
      Window.alert("Please answer 'yes' or 'no'.");
    }
  } while (keepGoing !== "yes" && keepGoing !== "no");
};

bingo();
