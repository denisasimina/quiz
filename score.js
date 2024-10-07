

const finalScore = document.getElementById('finalScore');
const highScoresList = document.getElementById('highScoresList');


const mostRecentScore = localStorage.getItem('mostrecentscore');


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


highScoresList.innerHTML = highScores
    .sort((a, b) => b.score - a.score) 
    .slice(0, 5) 
    .map((score, index) => `<li>${index + 1}. ${score.name} - ${score.score}</li>`) 
    .join('');
