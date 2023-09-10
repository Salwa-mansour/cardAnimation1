
import './style.scss';

var deviceWidth=document.documentElement.clientWidth;
window.addEventListener("orientationchange",
 function () {
 deviceWidth = document.documentElement.clientWidth;

})

const cards = document.getElementsByClassName("card-container")

const cardsArr= Array.from(cards)


    absorvingCards(cardsArr)

// --------------------------------------------------------
function absorvingCards(targetArr){
    const observer = new IntersectionObserver(
        entries =>{
        entries.forEach(entry=>{
            entry.target.classList.toggle('scrolledTo',entry.isIntersecting)
           
        })
    }
        ,{
            //threshold:1,
             rootMargin:"-50%"
        }
       
    )
    targetArr.forEach(card=>{
        observer.observe(card)
    })
    
}
