// Type definition for wand using tuple
type Wand = [core: string, length: number, material: string]
 
// Enum for house names
enum House {
  Gryffindor = 'Gryffindor',
  Slytherin = 'Slytherin'
}

// Type for character
interface Character {
  name: string
  age: number
  isWizard: boolean
  house: House
  spells: string[]
  wand: Wand
}

// Array to store all characters
const characters: Character[] = []

// Function to add a new character
function addCharacter (character: Character) {
  characters.push(character)
}

// Function to display all characters
function displayCharacters () {
  for (const character of characters) {
    const wizard = character.isWizard ? 'wizard' : 'muggle'

    const wand = character.wand[1] === 0
      ? 'who has no wand'
      : `whose wand has a ${character.wand[0]} core, a length of ${character.wand[1]}, and a material of ${character.wand[2]}`
    
    const spells = character.spells.length === 0
      ? 'who has no spells'
      : `who has the spells:
    ${character.spells.join('\n    ')}`

    const message = `${character.name} is a ${character.age} year old ${wizard} from house ${character.house}, ${wand}, and ${spells}`

    console.log(message)
  }
}

// Function to filter characters by house

// Function to count wizards vs muggles


// Sample data
addCharacter({
  name: "Harry Potter",
  age: 17,
  isWizard: true,
  house: House.Gryffindor,
  spells: ["Expelliarmus", "Expecto Patronum"],
  wand: ["Phoenix Feather", 11, "Holly"]
});

addCharacter({
  name: "Hermione Granger",
  age: 17,
  isWizard: true,
  house: House.Gryffindor,
  spells: ["Alohomora", "Petrificus Totalus"],
  wand: ["Dragon Heartstring", 10.75, "Vine"]
});

addCharacter({
  name: "Dudley Dursley",
  age: 18,
  isWizard: false,
  house: House.Slytherin,
  spells: [],
  wand: ["None", 0, "None"]
});

// Displaying characters
displayCharacters()

// Filter by house
// console.log("\n Characters from Gryffindor:");
// console.log(filterByHouse(House.Gryffindor));

// Magical status summary
// const summary = countByMagicalStatus();
// console.log(`\n Wizards: ${summary.wizards}, Muggles: ${summary.muggles}`);
