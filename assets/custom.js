const getCountry = () => {

  // get counrty via ip address
  fetch('https://ipinfo.io/json')
  .then(response => response.json())
  .then(data => sortCards(data));

  const sortCards = (data) =>{
    const exclusiveUsCards = document.querySelectorAll('[data-exclusive-to-us]');
    const nonExclusiveUsCards = document.querySelectorAll('[data-not-exclusive-to-us]');

    if (data.country == "US") {
      exclusiveUsCards.forEach(function (card, index) {
        card.style.display = 'block';
      }); 
      nonExclusiveUsCards.forEach(function (card, index) {
        card.style.display = 'none';
      }); 

    }else{
      exclusiveUsCards.forEach(function (card, index) {
        card.style.display = 'none';
      }); 
      nonExclusiveUsCards.forEach(function (card, index) {
        card.style.display = 'block';
      }); 
    }
  }
}

getCountry()


