let chat = []

function sendMessage(input){
    chat.push(input)
}
function viewChat(){
    for (let text of chat) {
        if (text.type == 'sent') {
            console.log('\x1b[32m' + text.msg + '\x1b[0m')
        } else {
            console.log('\x1b[33m' + text.msg + '\x1b[0m')
        }
    }
}

sendMessage({
    msg: 'hi kelvin',
    type: 'sent'
})
sendMessage({
    msg: 'hi seigha',
    type: 'recvd'
})
sendMessage({
    msg: 'how are you?',
    type: 'recvd'
})
sendMessage({
    msg: 'i\'m good, you?',
    type: 'sent'
})
sendMessage({
    msg: 'hows your mum',
    type: 'sent'
})
sendMessage({
    msg: 'she\'s fine it\'s her birthday ',
    type: 'recvd'
})
viewChat()