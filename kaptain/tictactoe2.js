let board= [[null,null,null],[null,null,null],[null,null,null]]
let turn = 'X'
function setX(x, y){
    if (board[x][y] != null) {
        console.log('You fumbled')
        return
    }
    board[x][y] = 'X'
}
function setO(x, y){
    if (board[x][y] != null) {
        console.log('Bitch ass nigga!')
        return
    }
    board[x][y] = 'O'
}
function viewBoard(){
    for (let row of board) {
        console.log(row)
    }
}

setX(0,0)
setO(0,1)
setX(2,2)
setO(1,1)
setX(2,1)
setO(2,0)
setX(0,2)
setO(1,2)
setX(1,0)
viewBoard()