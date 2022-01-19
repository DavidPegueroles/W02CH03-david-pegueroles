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
if (userName === null || userName === "Introduce your name here") {
  userName = "stranger";
}
console.log(`Greetings ${userName}!`);

let message = [];

function flightsDescription(list) {
  message = [];
  let escala;

  for (let i = 0; i < list.length; i++) {
    if (list[i].scale === true) {
      escala = "does scale";
    } else {
      escala = "does not scale";
    }

    message.push(
      `The flight with ID: ${list[i].id} from: ${list[i].from}, to: ${list[i].to} costs ${list[i].cost}€ and ${escala}.`
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

// Skylab Airlines PRO ↓↓

const userIdentity = Window.prompt(
  "Please, identify yourself as USER or ADMIN."
).toUpperCase();

function deleteFlight(user) {
  if (user === "ADMIN") {
    const useFunction = Window.confirm("Do you want to delete a flight?");

    if (useFunction === true) {
      let answ;

      do {
        flightsDescription(flights);
        Window.alert(`You now have this flights:\n${message.join(`\n`)}`);

        const deleteFlightId = Window.prompt(
          "What is the ID of the flight you want to delete?"
        );
        const deletedOne = flights.splice(deleteFlightId, 1);

        for (let i = 0; i < flights.length; i++) {
          flights[i].id = i;
        }

        let msgScaling;

        if (deletedOne[0].scale === true) {
          msgScaling = "does scale";
        } else {
          msgScaling = "does not scale";
        }

        const showDeleted = `The flight with ID: ${deletedOne[0].id} from: ${deletedOne[0].from}, to: ${deletedOne[0].to} that costs ${deletedOne[0].cost}€ and ${msgScaling}.`;

        flightsDescription(flights);
        Window.alert(
          `You've deleted this flight:\n${showDeleted}\n\nYou now have this flights:\n${message.join(
            `\n`
          )}`
        );

        const keep = Window.confirm("Do you want to delete another flight?");
        if (keep !== true) {
          answ = "exit";
        }
      } while (answ !== "exit");
    } else {
      Window.alert("Exiting...");
    }
  } else {
    console.log("You don't have enough permissions to remove flights.");
  }
}

function createFlights(user) {
  if (user === "ADMIN") {
    const useFunction = Window.confirm("Do you want to create a flight?");

    if (useFunction === true) {
      let answ;

      do {
        const newFlight = {};

        if (flights.length <= 15) {
          newFlight.id = flights.length;
          newFlight.to = Window.prompt("What is the flight destination?");
          newFlight.from = Window.prompt("What is the flight origin?");

          do {
            newFlight.cost = Number.parseInt(
              Window.prompt("How much does the flight cost?"),
              10
            );
            if (!Number.isNaN(newFlight.cost)) {
              answ = "exit";
            } else {
              Window.alert("You must introduce a number.");
            }
          } while (answ !== "exit");

          newFlight.scale = Window.confirm("Does the flight scale?");

          flights.push(newFlight);

          flightsDescription(flights);
          Window.alert(`Current flights:\n${message.join(`\n`)}`);

          const keep = Window.confirm("Do you want to add another flight?");
          if (keep !== false) {
            answ = "exit";
          }
        } else {
          Window.alert(
            "You've reached the maximum number of flights. Delete one to create another."
          );
          const askForDeleteAFile = Window.confirm(
            "Do you want to delete one now to add another?"
          );
          if (askForDeleteAFile) {
            deleteFlight(user);
          } else {
            answ = "exit";
          }
        }
      } while (answ !== "exit");
      Window.alert("Exiting...");
    }
  } else {
    console.log("You don't have enough permissions to remove flights.");
  }
}

function buyATicket() {
  let answ;

  do {
    const flightToBuy = Number.parseInt(
      Window.prompt(
        "What is the ID of the flight you want to buy a ticket for?"
      ),
      10
    );

    if (!Number.isNaN(flightToBuy) && flights.length > flightToBuy) {
      Window.alert("Thanks for your purchase, come again soon!");
      answ = "exit";
    } else if (!Number.isNaN(flightToBuy) && flights.length <= flightToBuy) {
      Window.alert("The ID you're trying to introduce does not exist.");
    } else {
      Window.alert("You must introduce a number.");
    }
  } while (answ !== "exit");
}

function priceSort(user) {
  if (user === "USER") {
    let answ;

    do {
      let sortedList = [];
      let sortmsg;

      const sort = Window.prompt(
        "Do you want to sort the prices from high to low '>', from low to high '<' or check for a speciffic price '='?"
      );

      if (sort === "=") {
        do {
          const numPrice = Number.parseInt(
            Window.prompt("Introduce the specific price you're looking for."),
            10
          );

          if (!Number.isNaN(numPrice)) {
            sortmsg = `at a price of ${numPrice}€`;

            for (let i = 0; i < flights.length; i++) {
              if (flights[i].cost === numPrice) {
                sortedList.push(flights[i]);
              }
            }

            answ = "exit";
          } else {
            Window.alert("You must introduce a NUMBER");
          }
        } while (answ !== "exit");

        answ = "";
      } else if (sort === "<" || sort === ">") {
        let prices = [];

        for (let i = 0; i < flights.length; i++) {
          prices.push(flights[i].cost);
        }

        if (sort === "<") {
          prices = prices.sort((a, b) => a - b);
          sortmsg = `from low to high`;
        } else if (sort === ">") {
          prices = prices.sort((a, b) => b - a);
          sortmsg = `from high to low`;
        }

        for (let i = 0; i < prices.length; i++) {
          for (let j = 0; j < flights.length; j++) {
            if (prices[i] === flights[j].cost) {
              sortedList.push(flights[j]);
            }
          }
        }

        const noRepes = new Set(sortedList);
        sortedList = [...noRepes];
      } else {
        Window.alert(
          "You must introduce one of this characters '<', '>' or '='"
        );
      }

      flightsDescription(sortedList);
      Window.alert(`Flights sorted ${sortmsg}:\n${message.join(`\n`)}`);

      buyATicket();
      answ = "exit";
    } while (answ !== "exit");
  } else {
    console.log("You need to be a USER to sort flights by prices.");
  }
}

createFlights(userIdentity);
deleteFlight(userIdentity);
priceSort(userIdentity);
