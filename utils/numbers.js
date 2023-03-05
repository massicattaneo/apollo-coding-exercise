export const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
export const generateRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
}
