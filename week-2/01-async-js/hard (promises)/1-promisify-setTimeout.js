/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    //we have to initialise a promise first
    const p = new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // using a setTimeout function to pause the function for n seconds 
        },n*1000)
    }) //it is similar to new Date, i.e creating an object of a class and then we pass the resolve in here
    return p
}

module.exports = wait;
