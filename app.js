const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  game.difficulty = 'Legendary';                         // Exercise 3

  game.party.unshift(pokemon[3])                         // Exercise 4
  game.party.unshift(pokemon[0], pokemon[1], pokemon[2]) // Exercise 5
  
  for (let comp of game.gyms){                           // Exercise 6
    if (comp.difficulty < 3) {
        comp.completed = true}
  }
  
  pokemon.splice(0, 1, {number: 1, name: "Ivysaur", type: "grass", hp: 45, starter: true, level: 1})      // Exercise 7
  pokemon.splice(3, 1, {number: 4, name: "Charmeleon", type: "fire", hp: 39, starter: true, level: 1})
  pokemon.splice(6, 1, {number: 7, name: "Wartortle", type: "water", hp: 44, starter: true, level: 1})
  pokemon.splice(24, 1, {number: 25, name: "Raichu", type: "electric", hp: 35, starter: true, level: 1})

  for (let i = 0; i < pokemon.length; i++) {            // Exercise 8
    //console.log([i+1]+'.'+ pokemon[i].name)
  }

  for (let i = 0; i < pokemon.length; i++) {            // Exercise 9
    if (pokemon[i].starter === true) {
    //console.log([i+1]+'.'+ pokemon[i].name)
    }
  }

//==================================================================//

  game.catchPokemon = function(catchPokemon) {         // Exercise 10
    game.party.push(catchPokemon)
  }
  game.catchPokemon(pokemon[3])

//==================================================================//

  game.catchPokemon = function(catchPokemon) {        // Exercise 11
    game.party.push(catchPokemon);
    game.items[1].quantity--;
  }
  game.catchPokemon(pokemon[3])

//==================================================================//

  for (let comp of game.gyms){                       // Exercise 12
    if (comp.difficulty < 6) {
        comp.completed = true}}

//==================================================================//

  const gymTally = [{Completed: 0} ,                // Exercise 13
                    {Incomplete: 0}]

  game.gymStatus = function(gymStatus) 
    {for (let j = 0; j < game.gyms.length; j++){
      if (gyms[j].completed === true) {
        gymTally.Completed++;
      }
      else {(gyms[j].completed === false) 
        gymTally.Incomplete++;
      }
    }}

  console.log(gymTally)

//==================================================================//

game.partycount = function(){
  return this.party.length;
};
const numofpokemon = game.partycount();
console.log('Exercise 14 result:' + numofpokemon);

//==================================================================//

for (let comp of game.gyms){                   // Exercise 15
  if (comp.difficulty < 8) {
      comp.completed = true}}

//==================================================================//

//console.log(game)                             // Exercise 16