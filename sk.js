const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Disp = document.querySelector('#p1Disp');
const p2Disp = document.querySelector('#p2Disp');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let p1Score = 0;
let isGameOver = false;
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Disp.classList.add('winner');
            p2Disp.classList.add('loser');
        }
        p1Disp.textContent = p1Score;
    }
})
let p2Score = 0;
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            p1Disp.classList.add('loser');
            p2Disp.classList.add('winner');
            isGameOver = true;
        }
        p2Disp.textContent = p2Score;
    }
})
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click', reset)
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;
    p1Disp.classList.remove('winner', 'loser');
    p2Disp.classList.remove('winner', 'loser');
}