
const finalPosition = function (moves) {
  const position = [0,0]
  for (let move of moves) {
    if (move === 'north') {
      position[1] += 1 
    } else if (move === 'south') {
      position[1] -= 1
    } else if (move === 'east') {
      position[0] += 1
    } else if (move === 'west') {
      position[0] -= 1
    }
  }return position
}; 

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);