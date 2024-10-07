
const finalScore = document.getElementById('finalScore');
const saveScoreForm = document.getElementById('saveScoreForm');
const usernameInput = document.getElementById('username');

const mostRecentScore = localStorage.getItem('mostrecentscore');


finalScore.innerText = mostRecentScore || 0; 

saveScoreForm.addEventListener('submit', function(event) {
    event.preventDefault();  

    const username = usernameInput.value;

    if (username && mostRecentScore) {
       
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        
        const newScore = {
            score: parseInt(mostRecentScore, 10), 
            name: username
        };

        highScores.push(newScore);
        
        
        highScores.sort((a, b) => b.score - a.score);

        highScores.splice(5);

        localStorage.setItem('highScores', JSON.stringify(highScores));

        window.location.assign('/'); 
    } else {
        alert('Completează username-ul și asigură-te că există un scor valid.');
    }
});
