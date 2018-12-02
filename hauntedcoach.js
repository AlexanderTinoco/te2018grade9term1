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
player.name = READLINE.question("Will you accept invite? (yes or no) ");
if(joinGame == "y" || joinGame == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and enters game...);
  // continue the story
  console.log("You walk around and hear the killer getting closer");
  let decisionAfter  = READLINE.question("Will you run away from the killer (1) or hide from the killer (2)?");
  if (decisionAfter == 1) {
     console.log("You realize that the killer saw you running and is chasing you");
     decisionAfter  = READLINE.question("Will you go into open area (1) or lose him in the corn maze (2)?");
     if (decisionAfter == 1) {
       console.log("The killer corners you and you try to escape,but slashes your back and you fall. Then, he picks you up and hooks you up on a meathook");
       console.log();
       decisionAfter  = READLINE.question("You wait for a teammate to take you off the meathook (1) or try to get off the meathook yourself (2)?");
       // more story
     } if (decisionAfter == 2) {
       console.log("You get off the meathook, but are hurt badly.");
       console.log();
       decisionAfter  = READLINE.question("Will you look for a teammate to heal you (1) or try to heal yourself (2)?");
       /// more story
     }
     if (decisionAfter == 1) {
       console.log("While you look for a teammate you hear the killer in the corn maze.");
       console.log();
       decisionAfter  = READLINE.question("You try to sneak around him (1) or wait for him to leave the area (2)?");
  } if (decisionAfter == 2) {
     console.log("The killer leaves and you find a teammate and you both try escape,but the killer gets your teammate down.");
     console.log();
     decisionAfter  = READLINE.question("Will you try to save your teammate (1) or leave your teammate behind and escape (2)?");
     if (decisionAfter == 1) {
       console.log("You try to save your teammate, but get killed by the killer. ");
       // more story
     } if (decisionAfter == 2) {
       console.log("You leave your teammate to die and escape." + player.weapon + ". You level up and get a new character.");
       // more story
     }
  }
} else if (joinGame == "no" || joinGame == "n") {
  player.intellect++;
  console.log(player.name + " decideds not to join the game and creates his own game.");
  // continue the story
  console.log("You get to choose your killer.");
  decisionAfter  = READLINE.question("Will you pick Legion (1) or pick Michael Myers (2)?");
  if (decisionAfter == 1 ) {
    console.log("You load in and start sneaking around trying to find the survivors. You see someone pop a generator.");
    decisionAfter  = READLINE.question("Will you go rush towards the area(1) or try to think at were the survivor would go and cut them off. (2)?");
    if (decisonAfter == 1) {
      console.log("You see someone still working on the generator and kill them with your knife");
      // more story
    /} else if (decisionAfter == 2) {
      console.log("You find two people running away and slug them both. Then, put them on the meathook.");
      // more story
    }
  } else if (decisionAfter == 2) {
    /console.log("You look for someone in the dungeon and find someone trying to cleanse your hex.");
    /decisionAfter = READLINE.question("Will you chase them down (1) or try to sneak up on them. (2).");
    if (decisionAfter == 1) {
      console.log("He escapes.");
       //more story
    } else if (decisionAfter == 2) {
      console.log("You got him off guard and are able to kill him.");
      // more story
    }
  }
}
//console.log("Thanks for playing!");
