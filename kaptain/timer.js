function timer(x) {
    while ( x >= 0){
        console.log(x)
        x = x-1
    }
}

let x = 10
const intervalId = setInterval(() => {
    console.log(x);
    x--;
    if (x < 0) {
        clearInterval(intervalId);
    }
}, 3000);