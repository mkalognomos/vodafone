// MAIN MENU SERVICE
function mainMenuService() {
    var request = new XMLHttpRequest();
    request.open('GET', api + 'menu', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var menuData = JSON.parse(request.responseText);
  
            // Save data to local storage
            localStorage.setItem('menuData', JSON.stringify(menuData));
  
            document.getElementById("main-routes").innerHTML =`
            <span id="home" onclick="section1Component(); changeURL(event);" class="item active">${menuData[0].title}</span>
            <span id="page2" onclick="page2Component(); changeURL(event);" class="item">${menuData[1].title}</span>
            `
            mainMenuDots();
        } else {
            console.log('Reached target server, but it returned an error!');
        }
    };
    request.onerror = function() {
        console.log('There was a connection error!');
    };
    request.send();
}