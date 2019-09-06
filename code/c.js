let userscore = 0
let computerscore = 0
let userscore_span = document.getElementById('user-score')
let computerscore_span = document.getElementById('computer-score')
let scoreboard_div = document.querySelector('.score-board')
let result_p = document.querySelector('.result>p')
let rock_div = document.getElementById('r')
let paper_div = document.getElementById('p')
let scissor_div = document.getElementById('s')

function getcomputerchoice() {
  const choices = ['r', 'p', 's']
  randomnumber = (Math.floor(Math.random() * 3))
  return choices[randomnumber]
}
function converttoword(letter){
if(letter==='r') return 'ROCK'
if(letter==='p') return 'PAPER'
return 'SCISSOR'
}
function win(userchoice, computerchoice) {
  userscore++
  userscore_span.innerHTML = userscore
  const smalluserword='user'.fontsize(3).sub();
    const smallcompword='comp'.fontsize(3).sub();
  result_p.innerHTML = `${converttoword(userchoice)}${smalluserword} beats ${converttoword(computerchoice)}${smallcompword} You Win!`
document.getElementById(userchoice).classList.add('green-glow')
}

function lose(userchoice, computerchoice) {
  computerscore++
  computerscore_span.innerHTML = computerscore
  const smalluserword='user'.fontsize(3).sub();
    const smallcompword='comp'.fontsize(3).sub();
  result_p.innerHTML = `${converttoword(userchoice)}${smalluserword} loses to ${converttoword(computerchoice)}${smallcompword} You LOST!`

}

function draw(userchoice, computerchoice) {
  const smalluserword='user'.fontsize(3).sub();
    const smallcompword='comp'.fontsize(3).sub();
  result_p.innerHTML = `${converttoword(userchoice)}${smalluserword} equals ${converttoword(computerchoice)}${smallcompword} ITS A DRAW`
}

function game(userchoice) {
  computerchoice = getcomputerchoice()
  switch (userchoice + computerchoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userchoice, computerchoice)
      break
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userchoice, computerchoice)
      break
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userchoice, computerchoice)
      break;
  }
}

function main() {
  rock_div.addEventListener('click',() => {
    game('r')
  })
  paper_div.addEventListener('click',() => {
    game('p')
  })
  scissor_div.addEventListener('click',() => {
    game('s')
  })
}
main()
