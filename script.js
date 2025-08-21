const showscontainer = document.querySelector(".showscontainer");
const questioncontainer = document.querySelector(".questioncontainer");
const rightslide = document.getElementById("rightslide");
const leftslide = document.getElementById("leftslide");

function getScrollAmount() {
    const showcard = document.querySelector('.showcard');
    if (!showcard) return 0;
    
    const cardStyle = getComputedStyle(showcard);
    const cardWidth = showcard.offsetWidth;
    const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
    
    return cardWidth + cardMarginRight;
}

rightslide.addEventListener('click', () => {
    showscontainer.scrollLeft += getScrollAmount() * 3; // Slide by 2 cards
});

leftslide.addEventListener('click', () => {
    showscontainer.scrollLeft -= getScrollAmount() * 3;
});

const plus = document.querySelectorAll(".plus");

plus.forEach(answerbox =>{
    answerbox.addEventListener("click", (e)=>{
        const clickedquestion = e.target.closest(".questioncontainer");
        const clickedanswer = clickedquestion.querySelector(".answer");
        
        const isalreadyopen = clickedanswer.style.display==="block";

        plus.forEach(box=>{
            const question = box.closest(".questioncontainer");
            const answer = question.querySelector(".answer");
            answer.style.display="none";
            box.src="images/plus.svg";
            
        })
        
        if(!isalreadyopen){
            clickedanswer.style.display="block";
            answerbox.src="images/close.svg";     
      }

    })
});

const learnmore = document.getElementById("learnmoredes");
learnmore.addEventListener("click",(e)=>{
    e.preventDefault();
    const description =document.querySelector(".desc");
    if(description.style.display ==="none"){
        description.style.display="block";
    }else{
        description.style.display="none";

    }
})