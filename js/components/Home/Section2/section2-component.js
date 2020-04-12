// SECTION2 COMPONENT
function section2Component() {
    // Remove the previous content from the DOM
    document.getElementById("content").innerHTML = "";
  
    // Retrieve the object from local storage
    var section2 = JSON.parse(localStorage.getItem('section2'));
  
    document.getElementById("content").innerHTML = `
    <div class="container">
      <h2 class="description">Our Sections</h2>
      <div class="content-menu" id="secondary-routes">
          <span id="section1" onclick="section1Component(); changeURL(event);"  class="item">Section 1</span>
          <span id="section1" onclick="section2Component(); changeURL(event);"  class="item activeSection">Section 2</span>
      </div>
  
      <div class="content-title">${section2.title == null? '' : section2.title}</div>
      <div class="content-body">
          <div class="flex-row" id="ourServices">
              <div class="col-half">
                  <div class="graphText">${section2.graphText}</div>
                  <div class="stats" id="statsCont"></div>
              </div>
              <div class="col-half">
                  <div class="formText">${section2.formText}</div>
                  <div class="formText-sub">We work with ecosystem leaders, corporations and startups worldwide.<br> How can we help you?</div>
                  <form class="formInfo" name="customForm">          
                      <input id="phone" name="phone" type="text" placeholder="${section2.formLabels[0]}" class="formInfo-input" required/>
                      <small id="alert-phone"></small>
      
                      <input id="email" name="email" type="text" placeholder="${section2.formLabels[1]}" class="formInfo-input" required/>
                      <small id="alert-email"></small>
                      
                      <input id="password" name="password" type="password" placeholder="${section2.formLabels[2]}" class="formInfo-input" required/>
                      <small id="alert-password"></small>
  
                      <button type="submit" id="submit" class="btn">${section2.buttonText}</button>
                  </form>
              </div>
          </div>
      </div>
      </div>
    </div>
    `
    // Fill up Progress Bars (stats)
    for (var i = 0; i < section2.stats.length; i++) {
      document.getElementById("statsCont").innerHTML +=
      `
      <div class="progress-bar">
        <span class="perc"></span>
        <div class="progress-title">${section2.stats[i].title}</div>
        <div class="bar" data-size="${section2.stats[i].amount/10}"></div>
      </div>
      `
    }
    // Call the loading effect for progress bars
    setTimeout(loading, 100);
  
    // Call Validation method for the Form
    formValidation();
}