// CODE START

var api = 'https://voda-react-assessment.herokuapp.com/'

function appInit() {
  document.getElementById("main").innerHTML = `
  <div id="mainloader"><div class="custom-loader"></div></div>
    <div id="header">
      <div id="main-menu">
          <div class="main-menu-items flex-row" id="main-routes"></div>
          <form class="search-bar">
              <input type="text" id="searchInput" class=" " onclick="showResults()" onkeyup="search()">
              <ul id="resultsUL">
                  <li><a id="home" onclick="section1Component();changeURL(event);">Homepage</a></li>
                  <li><a id="page2" onclick="page2Component();changeURL(event);">Page 2</a></li> 
                  <li><a id="section1" onclick="section1Component();changeURL(event);">Section 1</a></li>
                  <li><a id="section2" onclick="section2Component();changeURL(event);">Section 2</a></li>
                  </ul>
          </form>
      </div>
      <div id="header-carousel" class="carousel"></div>
    </div>
  <div id="content"></div>
  `
  // CALL SERVICES
  mainMenuService();
  carouselService();
  homePageService();
  page2Service();
}

appInit();

// HELPER FUNCTIONS

// MAIN MENU DOTS
function mainMenuDots() {
  var routes = document.getElementById("main-routes");
  var links = routes.getElementsByClassName("item");
  for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
      });
  }
}

// SECTIONS MENU DOTS
function sectionMenuDots() {
  var secondaryRoutes = document.getElementById("secondary-routes");
  var secondaryLinks = secondaryRoutes.getElementsByClassName("item");
  for (var i = 0; i < secondaryLinks.length; i++) {
      secondaryLinks[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("activeSection");
          current[0].className = current[0].className.replace(" activeSection", "");
          this.className += " activeSection";
      });
  }
}

// PROGRESS BARS ANIMATION
function loading() {
    document.querySelectorAll(".bar").forEach(function(current) {
      var startWidth = 0;
      const endWidth = current.dataset.size;
      const interval = setInterval(frame, 20);
  
      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
            startWidth++;
            current.style.width = `${endWidth}%`;
            var parentNode = current.parentNode;
            parentNode.firstElementChild.innerText = `${startWidth}%`;
          }
       }
    });
  };

// SEARCH BAR FUNCTIONALITY
var ul = document.getElementById("resultsUL"),
input = document.getElementById("searchInput");

function search() {
  var filter, li, a, i, txtValue;
  filter = input.value.toUpperCase();
  ul = document.getElementById("resultsUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
  // Rerender menu dots
  mainMenuDots();
  sectionMenuDots();
}

// Open Search Results
function showResults() {
  ul.style.visibility = 'visible';
  input.style.backgroundColor = '#212424';
  input.classList.add("searching");
}

// Close Search Results
document.addEventListener('click', function(event) {
  var isClickInside = input.contains(event.target);

  if (!isClickInside) {
    ul.style.visibility = 'hidden';
    input.style.backgroundColor = 'transparent';
    input.classList.remove("searching");
    input.value = '';
  }
});

// FORM VALIDATIONS
function formValidation() {

  function validateEmail(data) {  
    var testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(testData.test(data)) {
      return true;
    }
    return (false)  
  }  
  
  function disableButton() {
    document.getElementById('submit').disabled = true;
  }
  
  function enableButton() {
    document.getElementById('submit').disabled = false;
  }
  
  // Validate Phone Number
  document.getElementById('phone').onblur = function() {
    var status = document.getElementById('phone').value;
    var statusStripped = status.replace(/\D/g,'');;
    // RegEx
    var phoneReg = /^[0-9()-.\s]+$/
    // Checks type and length
    if (phoneReg.test(status) && statusStripped.length >= 10) {
      document.getElementById('alert-phone').innerHTML = '';
      enableButton();
      } 
      else {
        document.getElementById('alert-phone').innerHTML = 'Invalid Phone field!';
        disableButton();
      }
  }
  
  // Validate Email address
  document.getElementById('email').onblur = function() {
    var status = document.getElementById('email').value;
    if (status.length < 0) {
      document.getElementById('alert-email').innerHTML = 'Email field is empty';
      disableButton();
    } else if (!validateEmail(status)) {
      document.getElementById('alert-email').innerHTML = 'Invalid email address!';
      disableButton();
    } else {
      document.getElementById('alert-email').innerHTML = '';
      enableButton();
    }
  };
  
  // Validate Password
  document.getElementById('password').onblur = function() {
    var status = document.getElementById('password').value;
    if (status.length < 6) {
      document.getElementById('alert-password').innerHTML = 'Password field is empty or less than 6 characters';
      disableButton();
    } else {
      document.getElementById('alert-password').innerHTML = '';
      enableButton();
    }
  };  
};

// URL
function changeURL(event) {
  // Get the id of menu item
  let id = event.target.id;
  // Change the Page title
  document.title = id;
  // Change hash without change the State
  document.location.hash = id;
}

// CODE ENDS

