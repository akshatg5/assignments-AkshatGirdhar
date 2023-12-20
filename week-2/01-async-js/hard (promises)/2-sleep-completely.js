/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {// using simple new promise initialization like done before
    const p = new Promise((resolve) => { 
        setTimeout(() => { //will halt the thread for the given milliseconds, setTimeout is an async function
            resolve() // the function will return resolve just as mentioned in the quesiton
        },milliseconds)
    });
    return p; // returning the promise as mentioned
}

module.exports = sleep;
