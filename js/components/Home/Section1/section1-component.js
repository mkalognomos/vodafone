// SECTION1 COMPONENT
function section1Component() {
    // Remove the previous content from the DOM
    document.getElementById("content").innerHTML = "";
  
    // Retrieve the object from local storage
    var section1 = JSON.parse(localStorage.getItem('section1'));
    
    document.getElementById("content").innerHTML = `
    <div class="container">
      <h2 class="description">Our Sections</h2>
      <div class="content-menu" id="secondary-routes">
          <span id="section1" onclick="section1Component(); changeURL(event);"  class="item activeSection">Section 1</span>
          <span id="section2" onclick="section2Component(); changeURL(event);"  class="item">Section 2</span>
      </div>
      <div class="content-title">${section1.title == null? '' : section1.title}</div>
      <div class="content-body">
          <ul class="grid" id="images-grid"></ul>
            `
            for (var i = 0; i < section1.images.length; i++) {
              document.getElementById("images-grid").innerHTML +=
              `<li class="image-container">
                <img src="${section1.images[i].img}" alt="${section1.images[i].title}">
                <div class="after">
                    <img class="eye" src="./images/icons/eye.png" alt="eye-icon">
                    <span>${section1.images[i].title}</span>
                </div>
              </li>
              `
            }
            `
      </div>
    </div>
    `
}