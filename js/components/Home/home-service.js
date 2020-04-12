// HOMEPAGE SERVICE
function homePageService() {
    var request = new XMLHttpRequest();
    request.open('GET', api + 'home', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var homeData = JSON.parse(request.responseText);
            var section1 = homeData[0].sections[0];
            var section2 = homeData[0].sections[1];
  
            // Save data to local storage
            localStorage.setItem('section1', JSON.stringify(section1));
            localStorage.setItem('section2', JSON.stringify(section2));
  
            // Paint Section1 after data is loaded
            section1Component();
            sectionMenuDots();
  
            // Remove app loader from the Dom
            var elem = document.querySelector('#mainloader');
            elem.parentNode.removeChild(elem);
  
        } else {
            console.log('Reached target server, but it returned an error!');
        }
    };
    request.onerror = function() {
        console.log('There was a connection error!');
    };
    request.send();
}