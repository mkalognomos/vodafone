// CAROUSEL SERVICE
function carouselService() {
    var request = new XMLHttpRequest();
    request.open('GET', api + 'slider', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var carouselData = JSON.parse(request.responseText);
            document.getElementById("header-carousel").innerHTML =`
            <div class="slides">
              <div class="slide" data-state="active" style="background-image: url('${carouselData[0].image}');"><h3>${carouselData[0].title}</h3> <h4>${carouselData[0].subtitle}</h4></div>
              <div class="slide" style="background-image: url('${carouselData[1].image}');"><h3>${carouselData[1].title}</h3> <h4>${carouselData[1].subtitle}</h4></div>
              <div class="slide" style="background-image: url('${carouselData[2].image}');"><h3>${carouselData[2].title}</h3> <h4>${carouselData[2].subtitle}</h4></div>
            </div>
            <div class="indicators">
                <input class="indicator" name="indicator" data-slide="1" data-state="active" checked type="radio" />
                <input class="indicator" name="indicator" data-slide="2" type="radio" />
                <input class="indicator" name="indicator" data-slide="3" type="radio" />
            </div>`
  
          // Call carousel from custom-carousel.js
          carousel();
  
        } else {
            console.log('Reached target server, but it returned an error!');
        }
    };
    request.onerror = function() {
        console.log('There was a connection error!');
    };
    request.send();
}