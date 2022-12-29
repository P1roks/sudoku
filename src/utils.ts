export const getRandomInt = (max: number): number => (Math.floor(Math.random() * max))
export const clamp = (val: number,min: number,max:number): number => (val > max ? max : val < min ? min : val) 
export const shuffle = (arr: number[]) => (arr.sort((_a,_b) => 0.5 - Math.random()))
