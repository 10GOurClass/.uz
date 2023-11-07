const nameOfClass = document.getElementById("G");
const cardsStyle = document.getElementsByClassName("cards")
        function hideCards() {
            for (var i = 0; i < cardsStyle.length; i++) {
                cardsStyle[i].style.width = "160px"
                cardsStyle[i].style.boxShadow = "10px 10px 10px rgb(195, 23, 23)"
            }
            setTimeout(function(){
                for (var i = 0; i < cardsStyle.length; i++) {
                    cardsStyle[i].style.width = "150px"
                    cardsStyle[i].style.height = "150px"
                    cardsStyle[i].style.boxShadow = "0px 0px 0px rgb(180, 139, 139)"
                }
            } , 400)
        } 
        
nameOfClass.addEventListener("click", hideCards);

var openCardId = null;

function checkOpenCard() {
    if (openCardId !== null) {
         
    } else {
        var cards = document.getElementsByClassName("cards");
        for (var i = 0; i < cards.length; i++) {
            
             cards[i].style.opacity = "1";
             cards[i].style.filter = "none"
        }
    }
  }
  
  setInterval(checkOpenCard, 100);
  

function toggleCard(cardId) {
    var card = document.getElementById("card" + cardId);
    var description = document.getElementById("description" + cardId);
    var name = document.getElementsByClassName("name")[cardId-1];
    
    if (openCardId !== null && openCardId !== cardId) {
      var openCard = document.getElementById("card" + openCardId);
      var openDescription = document.getElementById("description" + openCardId);
      var openName = document.getElementsByClassName("name")[openCardId-1];
      
      openCard.style.width = "150px";
      openCard.style.height = "150px";
      openDescription.style.display = "none";
      openName.style.display = "block"; 

  }
  if (card.style.width === "200px" && card.style.height === "200px") {
      card.style.width = "150px";
      card.style.height = "150px";
      description.style.display = "none";
      name.style.margin = "-38px"
      openCardId = null;
  } else {
      card.style.width = "200px";
      card.style.height = "200px";
      description.style.display = "block";
      name.style.margin = "-2px"
      openCardId = cardId;
      card.style.opacity = "1";
      card.style.filter = "none"

      var closedCards = document.querySelectorAll('.cards:not(#card' + cardId + ')');
      for (var i = 0; i < closedCards.length; i++) {
          closedCards[i].style.opacity = "0.5";
          closedCards[i].style.filter = "blur(5px)";
      }
      
  }
}
for (var i = 1; i < 21; i++) {
    description = document.getElementById("description" + i);
    description.style.display = "none";
}


const Cheker = document.getElementById("Phone");
if (window.screen.width > 500){
    Cheker.className = "Blocker"
}
