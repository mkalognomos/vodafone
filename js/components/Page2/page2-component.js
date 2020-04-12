// PAGE2 COMPONENT
function page2Component() {
    // Remove the previous content from the DOM
    document.getElementById("content").innerHTML = "";

    // Retrieve the object from local storage
    var page2Data = JSON.parse(localStorage.getItem('page2Data'));

    document.getElementById("content").innerHTML = `
    <div class="container">
    <h2 class="description">We match your unique business needs</h2>
    <div class="flex-row" id="boxes"></div>
    </div>
    `
    for (var i = 0; i < page2Data[0].tiles.length; i++) {
        document.getElementById("boxes").innerHTML +=
        `<div class="col-oneThird box">
        <div class="img" alt="${page2Data[0].tiles[i].icon}"></div>
        <h3 class="title">${page2Data[0].tiles[i].title}</h3>
        <p class="description">${page2Data[0].tiles[i].description}</p>
        <a href="#" class="link">Learn more</a>
        </div>
        `
    }
}