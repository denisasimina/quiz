const username=document.getElementById("username");
const score=document.getElementById("saveHighScore");
const finalScore=document.getElementById('score')

const mostRecentScore=localStorage.getItem("mostrecentscore");
finalScore.innerText=mostRecentScore;

username.addEventListener("keyup", () =>
{
    score.disable=!username.value;
    console.log(username.value)
});
saveHighScoree =>{
console.log("click on button")
e.preventDefault()

}