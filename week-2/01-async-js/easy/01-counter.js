// counter that goes up every 1s

function counter() {
    let count = 0;
    setInterval( () => {
        console.log(count);
        count++;
    },1000)
}

counter()