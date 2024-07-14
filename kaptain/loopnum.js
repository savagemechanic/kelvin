function loop(x) {
    let sum = 0;
    while (x > 0) {
        sum += x%10
        x = Math.floor(x/10)
        console.log(sum,x)
    }
    return sum
}
console.log(loop(135))