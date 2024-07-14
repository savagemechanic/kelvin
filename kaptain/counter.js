function countToX(x) {
    let i = 1;
    while (i <= x) {
        console.log(i)
        i = i+1
    }
}

function countToX2(x) {
    for (let i = 0; i <= x; i++) {
        console.log(i)
    }
}

const countToX3 = (x) => {
    for (let i = 0; i <= x; i++) {
        console.log(i)
    }
}
countToX3(50)