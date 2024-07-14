function calculate(num1, action, num2){
    if (action == 'add') {
        return num1+num2
    } else if (action == 'subtract') {
        return num1-num2
    } else if (action == 'multiply') {
        return num1*num2
    }else {
        return num1/num2
    }    
}
function calculate2(num1, action, num2){
    switch(action) {
        case 'add':
            return num1+num2
        case 'subtract':
            return num1-num2
        case 'multiply':
            return num1*num2
        default:
            return num1/num2
      }  
}
console.log(calculate2(28, 'multiply' ,2))