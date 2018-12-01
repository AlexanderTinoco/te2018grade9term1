const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "flashlight",
  item: "flashlight",
};

console.log();

console.log("*** WELCOME TO DEAD BY DAYLIGHT ***");
player.name = READLINE.question("What is your name?: ");
console.log(player.name + " gets on game");
console.log(player.name + " friends invite you to a game");
let enterHouse = READLINE.question("Will you accept invite? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and enters game...`);
  // continue the story
  console.log("You walk around and hear the killer getting closer");
  let decisionAfter  = READLINE.question("Will you run away from the killer (1) or hide from the killer (2)?");
  if (decisionAfter == 1) {
     console.log("You realize that the killer saw you running and is chasing you");
     decisionAfter  = READLINE.question("Will you go into open area (1) or lose him in the corn maze (2)?");
     if (decisionAfter == 1) {
       console.log("The killer corners you and you try to escape,but slashes your back and fall. He picks you up and hooks you up on a meathook");
       console.log();
       decisionAfter  = READLINE.question("You wait for a teammate to take you of a meathook (1) or wait until it finishes ringing (2)?");
       // more story
     } if (decisionAfter == 2) {
       console.log("You hear footsteps in another area of the house.");
       console.log();
       decisionAfter  = READLINE.question("Will you run out of the house (1) or try to find out whose footsteps they are (2)?");
       /// more story
     }
  } if (decisionAfter == 2) {
     console.log("You stumble across a big mirror but you see everything else but you're reflection in it.");
     console.log();
     decisionAfter  = READLINE.question("Will you touch the mirror (1) or break the mirror (2)?");
     if (decisionAfter == 1) {
       console.log("You hear a TV turn on somewhere in the house");
       // more story
     } if (decisionAfter == 2) {
       console.log("You break the mirror with your" + player.weapon + ". When the glass breaks it reveals a hallway.");
       // more story
     }
  }
} else if (enterHouse == "no" || enterHouse == "n") {
  player.intellect++;
  console.log(player.name + " decideds not to open the door. However...");
  // continue the story
  console.log("You hear your dog yelling for help in the backyard.");
  decisionAfter  = READLINE.question("Will you go to the backyard (1) or go get your bike to ride home and find help (2)?");
  if (decisionAfter == 1 ) {
    console.log("There is nothing in the backyard but you found an axe");
    player.weapon2 = "axe";
    decisionAfter  = READLINE.question("Will you go into the house through the backdoor (1) or throw a rock at the window (2)?");
    if (decisonAfter == 1) {
      console.log("The floor cavs in when you walk through the backdoor and now you're in the basement");
      // more story
    } else if (decisionAfter == 2) {
      console.log("A werewolf emerges from the bushes and starts to chase you");
      // more story
    }
  } else if (decisionAfter == 2) {
    console.log("Your bike is broken");
    decisionAfter = READLINE.question("Will you get an Uber (1) or try to fix your bike (2).");
    if (decisionAfter == 1) {
      console.log("There are no Ubers in your area.");
      // more story
    } else if (decisionAfter == 2) {
      console.log("Now you hear your dog inside the house");
      // more story
    }
  }
}
console.log("Thanks for playing!");
