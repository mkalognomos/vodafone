// PAGE2 SERVICE
function page2Service() {
    var request = new XMLHttpRequest();
    request.open('GET', api + 'page', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var page2Data = JSON.parse(request.responseText);
            
            // Save data to local storage
            localStorage.setItem('page2Data', JSON.stringify(page2Data));

        } else {
            console.log('Reached target server, but it returned an error!');
        }
    };
    request.onerror = function() {
        console.log('There was a connection error!');
    };
    request.send();
}