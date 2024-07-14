const quotes= [
    'in the land of the blind, the man with one eye is king',
    'what is a man to a king, a king to a god, a god to an unbeliever?',
    'in the pursuit of success, be sure you are happy with the road traveled',
    'power is an illusion, it resides where men believe it does'
]

let index = 0
function generateQuote(){
    console.log(quotes[index])
    if (index == quotes.length-1) {
        index = 0
        return
    }
    index++
}

function generateRandomQuote(){
    let i = Math.floor(Math.random() * (quotes.length))
    console.log(i)
    console.log(quotes[i])
}

generateRandomQuote()
generateRandomQuote()
generateRandomQuote()
generateRandomQuote()
generateRandomQuote()
generateRandomQuote()