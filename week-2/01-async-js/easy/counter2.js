//creating a counter without using setInterval 

function counter(n) {
    let count = 0
    for (let i = 0;i<=n ;i++) {
        setTimeout(() => {
            console.log(count);
            count++;
        },1000*i)
    }
}

counter(10)