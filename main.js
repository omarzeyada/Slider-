// [ONE]
// Get Slider Items | Array.from[ES6 Feature]
var sliderImage = Array.from(document.querySelectorAll('.slide-container img'));

// Get Number Of Slider 
var slidesCount = sliderImage.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// Previous And Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click On Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element
var paginationElement = document.createElement("ul");

// Set ID On Created IL Element
paginationElement.setAttribute("id", "pagination-ul");

// Create The List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {

// Create The LI
  var paginationItems = document.createElement("li");

// Set Custom Attribute
  paginationItems.setAttribute("data-index", i);

// Set Items Content
  paginationItems.appendChild(document.createTextNode(i));

// Append Items To The Main UL List
  paginationElement.appendChild(paginationItems);
}

// Add The Created UL Element To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Bullets | Array.from[ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains("disabled")) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains("disabled")) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}
// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount)

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImage[currentSlide - 1].classList.add("active");

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active")

  // Check if Current Slide is The First
  if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add("disabled");
  } else {

    // Remove Disabled Class from Previous Button
    prevButton.classList.remove("disabled");

  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add("disabled");
  } else {

    // Remove Disabled Class from Next Button
    nextButton.classList.remove("disabled");

  }

}

// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive() {
  
  // Loop Through Images
  sliderImage.forEach(function (img) {

    img.classList.remove("active")
  });
    // Loop Through Images
    paginationsBullets.forEach(function (bullet) {

      bullet.classList.remove("active")

    });
    

}