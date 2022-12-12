export const genCell = () => {
    let newCell = [1,2,3,4,5,6,7,8,9];
    newCell.sort((a,b) => 0.5 - Math.random())
    return newCell;
}
export const getRandomInt = max => (Math.floor(Math.random() * max))
export const clamp = (val,min,max) => (val > max ? max : val < min ? min : val) 