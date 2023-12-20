/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


//simply creating functions that return a promise and they resolve after t seconds as specified in the setTimeout function
function wait1(t) {
    return new Promise((resolve) => setTimeout(resolve,t*1000))
}

function wait2(t) {
    return new Promise((resolve) => setTimeout(resolve,t*1000))
}

function wait3(t) {
    return new Promise((resolve) => setTimeout(resolve,t*1000))
}

//then we have to create an async function in which we pass 3 arguments as 3 times - t1,t2,t3
async function calculateTime(t1, t2, t3) { //an async function 
    let start = new Date().getTime(); // initializing a start time
    let end; // initializing an end time
    await Promise.all ([wait1(t1),wait2(t2),wait3(t3)]).then(() => { //using await statement to 
        end = new Date().getTime();
    });

    return end - start;
}

module.exports = calculateTime;
