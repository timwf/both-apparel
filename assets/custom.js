const getCountry = () => {

  // get counrty via ip address
  fetch('https://ipinfo.io/json')
  .then(response => response.json())
  .then(data => sortCards(data));

  const sortCards = (data) =>{
    //  data.country = "US"
    setTimeout(function(){ 
      const exclusiveUsCards = document.querySelectorAll('[data-exclusive-to-us]');
      const nonExclusiveUsCards = document.querySelectorAll('[data-not-exclusive-to-us]');  
  
      if (data.country == "US") {  
        nonExclusiveUsCards.forEach(function (card, index) {
          card.remove()
        }); 
  
      }else{
        exclusiveUsCards.forEach(function (card, index) {
          card.remove()
        }); 
      }
    }, 500);
  }
}

getCountry()


