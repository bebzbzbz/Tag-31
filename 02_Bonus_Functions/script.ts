const resetBtn = document.querySelector("#reset-btn");

const pointsHomeBtns = document.querySelectorAll(".add-points-home");
const pointsAwayBtns = document.querySelectorAll(".add-points-away");

const scoreHome = document.querySelector("#score-home");
const scoreAway = document.querySelector("#score-away");

if(scoreHome && scoreAway && resetBtn) {
    pointsHomeBtns.forEach((pointsHome) => {
        pointsHome.addEventListener("click", addPoints => {
            const pointsValue = Number((addPoints.target as HTMLButtonElement).value);
            scoreHome.innerHTML = (Number(scoreHome.innerHTML) + pointsValue).toString();
        })
    });

    pointsAwayBtns.forEach((pointsAway) => {
        pointsAway.addEventListener("click", addPoints => {
            const pointsValue = Number((addPoints.target as HTMLButtonElement).value);
            scoreAway.innerHTML = (Number(scoreAway.innerHTML) + pointsValue).toString();
        })
    });
    
    resetBtn.addEventListener("click", resetScore => {
        scoreAway.innerHTML = "0";
        scoreHome.innerHTML = "0";
    });
}