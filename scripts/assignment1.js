//declare 
let name = prompt("enter a name:");
const noun = prompt("Enter a person, place, or thing:");
const adj1 = prompt("enter a feeling:");
verb1 = prompt("enter an action word:");
let adj2 = prompt("another feeling:");
animal = prompt("animal:");
verb2 = prompt("verb:");
color = prompt("another feeling:");
verb3= prompt("verb ending in ING:");
adverb= prompt("adverb:");
num = prompt("a number:");
time = prompt("measure of time:"); 
color2 = prompt("color:");
animal2 = prompt("animal:");
num2 = prompt("number:");
let silly = prompt("silly word:");
let noun2 = prompt("plural noun:");


//story
    const story = `This weekend I am going camping with ${name}. I packed my lantern, sleeping bag, and 
${noun}. I am so ${adj1} to ${verb1} in a tent. I am ${adj2} we 
might see a ${animal}, they are kind of dangerous. We are going to hike, fish, and ${verb2}. 
I have heard that the ${color} lake is great for ${verb3}. Then we will 
${adverb} hike through the forest for ${num} ${time}. If I see a 
${color2} ${animal2} while hiking, I am going to bring it home as a pet! At night we will tell 
${num2} ${silly} stories and roast ${noun2} around the campfire!! `;

console.log (story);
