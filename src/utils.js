export const getRandomInt = max => (Math.floor(Math.random() * max))
export const clamp = (val,min,max) => (val > max ? max : val < min ? min : val) 
export const shuffle = arr => (arr.sort((a,b) => 0.5 - Math.random()))