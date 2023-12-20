// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const clock = () => {
    const interval = setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        console.log(`${hours} : ${minutes} : ${seconds}`);
        //dividing the seconds by 12 to get the remainder and use it as hours time in the second format
        console.log(`${hours % 12}:${minutes}:${seconds} ${hours > 12 ? 'PM' : 'AM'}`)
    },1000)
}

clock()