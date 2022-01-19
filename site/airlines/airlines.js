const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const defName = "Introduce your name here";
let userName = Window.prompt("How should we call you?", defName);
if (userName === null) {
  userName = "stranger";
}
console.log(`Greetings ${userName}!`);

function flightsDescription(list) {
  const message = [];
  let escala;

  for (let i = 0; i < list.length; i++) {
    if (list[i].scale === true) {
      escala = "does scale";
    } else {
      escala = "does not scale";
    }

    message.push(
      `The flight from: ${list[i].from}, to: ${list[i].to} costs ${list[i].cost}€ and ${escala}.`
    );
  }

  console.log(message.join(`\n`));
}

function averageCost(list) {
  let totalAverageCost = 0;

  for (let i = 0; i < list.length; i++) {
    totalAverageCost += list[i].cost;
  }

  totalAverageCost /= list.length;

  console.log(`The flight average cost is ${totalAverageCost.toFixed(2)}€.`);
}

function scalingFligths(list) {
  let escala = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].scale === true) {
      escala += 1;
    }
  }

  console.log(`There's a total of ${escala} flights that do scale.`);
}

function lastFiveFlights(list) {
  const dest = [];

  for (let i = list.length - 5; i < list.length; i++) {
    dest.push(list[i].to);
  }

  const lastDest = dest.splice(-1);

  console.log(
    `Last five flight's destination are ${dest.join(
      ", "
    )} and ${lastDest} respectively.`
  );
}

flightsDescription(flights);
averageCost(flights);
scalingFligths(flights);
lastFiveFlights(flights);
