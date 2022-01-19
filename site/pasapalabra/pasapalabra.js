const allQuestions = [
    [
        {"letter": "A", "question": "A foreigner, or someone who comes from another planet.", "answer": "alien"},
        {"letter": "A", "question": "Someone who performs in a play or in a film.", "answer": "actor"},
        {"letter": "A", "question": "A place where a plane comes in to land.", "answer": "airport"}
    ],
    [
        {"letter": "B", "question": "A place where you can deposit money.", "answer": "bank"},
        {"letter": "B", "question": "The colour of the sky at night.", "answer": "black"},
        {"letter": "B", "question": "This appears if you cut yourself.", "answer": "blood"}
    ],
    [
        {"letter": "C", "question": "A family pet who might chase birds and mice.", "answer": "cat"},
        {"letter": "C", "question": "When two cars bang into each other it causes this.", "answer": "crash"},
        {"letter": "C", "question": "A vegetable that is orange in colour.", "answer": "carrot"}
    ],
    [
        {"letter": "D", "question": "A large animal that lives in a cave and breathes fire", "answer": "dragon"},
        {"letter": "D", "question": "Something that you call eating after six o'clock.", "answer": "dinner"},
        {"letter": "D", "question": "A white bird that is a symbol of peace.", "answer": "dove"}
    ],
    [
        {"letter": "E", "question": "A large animal that has a very big nose.", "answer": "elephant"},
        {"letter": "E", "question": "The most spoken language in the world.", "answer": "english"},
        {"letter": "E", "question": "London is the capital city of this country.", "answer": "england"}
    ],
    [
        {"letter": "F", "question": "The last day of the working week.", "answer": "friday"},
        {"letter": "F", "question": "Opposite of slow.", "answer": "fast"},
        {"letter": "F", "question": "A person that you can talk to, spend time with, and share things with.", "answer": "friend"}
    ],
    [
        {"letter": "G", "question": "The opposite of 'rough'.", "answer": "gentle"},
        {"letter": "G", "question": "Someone who eats too much is this.", "answer": "greedy"},
        {"letter": "G", "question": "The opposite of 'stop'.", "answer": "go"}
    ],
    [
        {"letter": "H", "question": "You need this to pump blood around your body.", "answer": "heart"},
        {"letter": "H", "question": "Something that sits on top of your shoulders.", "answer": "head"},
        {"letter": "H", "question": "You wear this on your head!", "answer": "hat"}
    ],
    [
        {"letter": "I", "question": "A European county. Its capital cty is Rome.", "answer": "italy"},
        {"letter": "I", "question": "A piece of land surrounded by the sea.", "answer": "island"},
        {"letter": "I", "question": "A country near to the UK. Its capital city is Dublin.", "answer": "ireland"}
    ],
    [
        {"letter": "J", "question": "Trousers; usually made of denim.", "answer": "jeans"},
        {"letter": "J", "question": "The first month of the year.", "answer": "january"},
        {"letter": "J", "question": "The most used programming language in the world.", "answer": "javascript"}
    ],
    [
        {"letter": "K", "question": "You use this to boil water in the kitchen to make a cup of tea.", "answer": "kettle"},
        {"letter": "K", "question": "A unit of weight in the metric system.", "answer": "kilo"},
        {"letter": "K", "question": "The husband of a queen.", "answer": "king"}
    ],
    [
        {"letter": "L", "question": "This is what you get when you borrow money from the bank.", "answer": "loan"},
        {"letter": "L", "question": "A machine to carry people up and down floors in a bulding.", "answer": "lift"},
        {"letter": "L", "question": "A large vehicle used for transporting goods.", "answer": "lorry"}
    ],
    [
        {"letter": "M", "question": "Pork, beef, chicken and ham are all types of this.", "answer": "meat"},
        {"letter": "M", "question": "If you can remember a lot of things you have a good...", "answer": "memory"},
        {"letter": "M", "question": "You spend this at the shops.", "answer": "money"}
    ],
    [
        {"letter": "N", "question": "Preposition. The opposite of far.", "answer": "near"},
        {"letter": "N", "question": "Opposite of day.", "answer": "night"},
        {"letter": "N", "question": "The opposite of 'always'.", "answer": "never"}
    ],
    [
        {"letter": "O", "question": "The frst number.", "answer": "one"},
        {"letter": "O", "question": "A bird that likes to place it's head in the sand.", "answer": "ostrich"},
        {"letter": "O", "question": "A fruit and a colour.", "answer": "orange"}
    ],
    [
        {"letter": "P", "question": "Something that you open on your birthday.", "answer": "present"},
        {"letter": "P", "question": "The leader of a republican county.", "answer": "president"},
        {"letter": "P", "question": "Something that you can hang on your wall at home.", "answer": "pictures"}
    ],
    [
        {"letter": "Q", "question": "You stand in this when you wait in line at a supermarket.", "answer": "queue"},
        {"letter": "Q", "question": "The wife of a king.", "answer": "queen"},
        {"letter": "Q", "question": "What I'm asking you now!", "answer": "question"}
    ],
    [
        {"letter": "R", "question": "A colour that symbolises the Communist party.", "answer": "red"},
        {"letter": "R", "question": "A white coloured food commonly eaten in Asia.", "answer": "rice"},
        {"letter": "R", "question": "A flower that has sharp thorns.", "answer": "rose"}
    ],
    [
        {"letter": "S", "question": "The name of woolly animals who love to eat grass.", "answer": "sheep"},
        {"letter": "S", "question": "Men do this to their face.", "answer": "shave"},
        {"letter": "S", "question": "A place in the garden where you can keep tools and a lawnmower.", "answer": "storage"}
    ],
    [
        {"letter": "T", "question": "Me, Mrs, Ms, Dr, and Rev are all examples of this.", "answer": "title"},
        {"letter": "T", "question": "Someone who repairs clothes.", "answer": "tailor"},
        {"letter": "T", "question": "A type of shoe that is worn for running or playing sports.", "answer": "trainers"}
    ],
    [
        {"letter": "U", "question": "Opposite of happy.", "answer": "unhappy"},
        {"letter": "U", "question": "The British form of Subway.", "answer": "underground"},
        {"letter": "U", "question": "the brother of someone’s mother or father.", "answer": "uncle"}
    ],
    [
        {"letter": "V", "question": "A city in Italy that is famous for its canals.", "answer": "venice"},
        {"letter": "V", "question": "A sour tasting flavouring.", "answer": "vinegar"},
        {"letter": "V", "question": "The holding of a conference among people at remote locations by means of transmitted audio and video signals.", "answer": "videoconference"}
    ],
    [
        {"letter": "W", "question": "A season. In England it is cold and frosty.", "answer": "winter"},
        {"letter": "W", "question": "Opposite of dry.", "answer": "wet"},
        {"letter": "W", "question": "A drink that is made from grapes. Can be red or white.", "answer": "wine"}
    ],
    [
        {"letter": "X", "question": "You are called this if you have special mutant abilities.", "answer": "x-man"},
        {"letter": "X", "question": "Another name for a photocopy.", "answer": "xerox"},
        {"letter": "X", "question": "A musical instrument made up of metal or wooden bars.", "answer": "xylophone"}
    ],
    [
        {"letter": "Y", "question": "Something you say to agree with people.", "answer": "yes"},
        {"letter": "Y", "question": "The colour ofthe sun.", "answer": "yellow"},
        {"letter": "Y", "question": "Found in the middle of an egg.", "answer": "yolk"}
    ],
    [
        {"letter": "Z", "question": "A black and white animal.", "answer": "zebra"},
        {"letter": "Z", "question": "A place where exotic animals are kept in a city.", "answer": "zoo"},
        {"letter": "Z", "question": "Something you find on a pair of trousers.", "answer": "zip"}
    ],
        
];

const pasapalabra = () => {
    userName();
    decidingQuestions();
    playGame();
    rankings();
}

let user;
const userName = () => {
    do {
        user = prompt("What's your name? This will affect the name in our rankings.");
    } while (typeof user != 'string');

    alert(`Welcome, ${user}. Get ready to play the Alphabet Quiz Game.`)
}

let circle;

const decidingQuestions = () => {
    circle = [];
    for (let i in allQuestions) {
        let chosenQuestion = Math.floor(Math.random()*3);
        circle.push({
            "letter": allQuestions[i][chosenQuestion]["letter"], 
            "question": allQuestions[i][chosenQuestion]["question"], 
            "answer": allQuestions[i][chosenQuestion]["answer"], 
            "answered": false, 
            "guessedRight": undefined
        });
    }
}

let answ;

const playGame = () => {
    do {

        for (let i in circle) {

            if (circle[i]["answered"] === false) {
                
                do {
                    answ = prompt(`Begginning with ${circle[i]["letter"]} - ${circle[i]["question"]}`);
                    if (answ === null) {
                        alert("Type 'END' to exit.")
                        continue;
                    } else {
                        answ = answ.toLowerCase();
                        break;
                    }
                } while (answ === null);
        
                if (answ === "pasapalabra") {
                    alert("You passed this letter. Next round will be available to answer again.")
                    continue;
                    
                } else if (answ === "end") {
                    alert("Exiting...")
                    break;
                    
                } else if (answ === circle[i]["answer"]) {
                    alert("Correct!");
                    circle[i]["answered"] = true;
                    circle[i]["guessedRight"] = true;
                    
                } else {
                    alert(`Wrong, you answered ${answ.toUpperCase()}.\nThe correct answer is ${circle[i]["answer"].toUpperCase()}.`);
                    circle[i]["answered"] = true;
                    circle[i]["guessedRight"] = false;
    
                }
            } else {
                continue;
            }

            answersAndCorrect();
            if (countAnswered === 26) {
                answ = "end";
            }
        }
    } while (answ !== "end")
}

let rankingList = [
    {"player": "Gerard Way", "guessedRight": 23},
    {"player": "Billy Joe", "guessedRight": 6},
    {"player": "Amy Lee", "guessedRight": 13},
    {"player": "Kurt Cobain", "guessedRight": 15},
    {"player": "Serj Tankian", "guessedRight": 17},
    {"player": "Dolores O'Riordan", "guessedRight": 20},
];

let rankingMessage;

const rankings = () => {

    if (countAnswered === 26) {
        updateList();
    } else {
        rankingShow();
        alert(`You guessed ${countCorrect} words right out of ${countAnswered} questions answered.\nTho not finishing the game won't let you take place in the rankings.`);
    }

    alert(rankingMessage.join('\n'));
    
}

let countAnswered;
let countCorrect;

const answersAndCorrect = () => {
    countAnswered = 0;
    countCorrect = 0;

    for (let i in circle) {
        circle[i]["answered"] === true ? countAnswered += 1 : countAnswered += 0;
        circle[i]["guessedRight"] === true ? countCorrect += 1 : countCorrect += 0;
    }
}

const updateList = () => {
    rankingList.push( {"player": user, "guessedRight": countCorrect});
    rankingShow();

    rankingMessage[0] = "The updated ranking is:";

}

const rankingShow = () => {
    rankingList.sort((a,b) => b.guessedRight - a.guessedRight);

    rankingMessage = ["The current ranking is:"];
    for (let i = 0 ; i < rankingList.length ; i++) {
        rankingMessage.push(`${i+1}: ${rankingList[i]["player"]} guessed ${rankingList[i]["guessedRight"]} questions right.`);
    }
}

pasapalabra();
