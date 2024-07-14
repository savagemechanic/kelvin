function gen(sentence) {
    let words = sentence.split(' ')
    let godList = []

    for (word of words) {
        godList.push({
            name: word,
            length: word.length
        })
    }

    let longest = {}
    let max = 0
    for (god of godList) {
        if (god.length > max) {
            max = god.length
            longest = god
        }
    }

    words.push('#'+longest.name)
    return words.join(' ')
}

function gen2(sentence){
    let words = sentence.split(' ')

    let longest = ''
    let max = 0
    for (word of words) {
        if (word.length > max) {
            max = word.length
            longest = word
        }
    }

    words.push('#'+longest)
    return words.join(' ')
}
console.log(gen2('I love programming'))