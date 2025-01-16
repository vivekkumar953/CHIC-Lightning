$(document).ready(function () {
// Handle form submission and display a thank you message
$("#feedback form").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const message = $("#message").val();
    alert(`Thank you, ${name}! Your message has been received.`);
    $("#name").val("");
    $("#message").val("");
});
// Display the visitor count when the page loads
displayVisitorCount();
});

// Function to update date and time
function updateDateTime() {
    const currentDate = new Date();
    $("#datetime").text(currentDate.toLocaleString());
}

// Function to get geolocation and update location
function updateLocation() {
    const locationElement = $("#location");

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationElement.text(`Latitude: ${latitude}, Longitude: ${longitude}`);
        });
    } else {
        locationElement.text("Geolocation is not supported in your browser.");
    }
}

// Update date, time, and location when the page loads
$(document).ready(function () {
    updateDateTime();
    updateLocation();

    // Update date and time every second
    setInterval(updateDateTime, 1000);
});

// Function to update and display the visitor count
function updateVisitorCount() {
    // Check if "visitorCount" is stored in localStorage
    if (localStorage.getItem("visitorCount")) {
        // Get the current count from localStorage
        let count = parseInt(localStorage.getItem("visitorCount"));

        // Increment the count
        count++;

        // Update the count in localStorage
        localStorage.setItem("visitorCount", count);

        // Display the updated count
        $("#count").text(count);
    } else {
        // If "visitorCount" doesn't exist, create it and set count to 1
        localStorage.setItem("visitorCount", 1);
        $("#count").text("1");
    }
}

// Update visitor count when the page loads
$(document).ready(function () {
    updateVisitorCount();
});



// FAQ section answer
$(document).ready(function () {
    // Initially set the arrow to point downward
    $(".question").addClass("answer-visible");
    
    // Toggle FAQ answer visibility when clicking on the question
    $(".question").click(function () {
        const answer = $(this).next(".answer");
        answer.slideToggle("fast");
        $(this).toggleClass("answer-visible");
    });
});

// product hidden carts
// ceiling product
$(document).ready(function() {
    $(".see-ceiling").click(function() {
        $(".hidden-products-A").toggle();
    });
});
// wall items
$(document).ready(function() {
    $(".see-wall").click(function() {
        $(".hidden-products-B").toggle();
    });
});
// lamps items
$(document).ready(function() {
    $(".see-lamp").click(function() {
        $(".hidden-products-C").toggle();
    });
});


$(document).ready(function() {
// Function to change the navbar background color
function changeNavbarColor(color) {
    $("#navbar").css("background-color", color);
}
// Click event handling for the list items
$("#navbarSupportedContent ul li a").click(function() {
// Get the text of the clicked link
var linkText = $(this).text();
// Check which link was clicked and change the background color accordingly

if (linkText === "Gallery") {
    changeNavbarColor("#ffcc00"); 
    // Change to the desired background color
}
else if (linkText === "Contact Us") {
    changeNavbarColor("#66ccff"); 
// Change to the desired background color
}
else {
// Reset the background color for other links
changeNavbarColor("#343a40");
// Change to the default background color
}
});
});


$(document).ready(function() {
// Function to change the navbar background color
function changeNavbarColor(color) {
    $("#navbar").css("background-color", color);
}
// Event handler for list item click
$(".nav-item").click(function() {
    var bgColor = $(this).data("color");
    changeNavbarColor(bgColor);
    });
});

$(document).ready(function () {
    // Handle product search form submission
$("#product-search-form").submit(function(event) {
    event.preventDefault();
    const searchTerm = $("#product-search").val().toLowerCase();
    searchProducts(searchTerm);
});
// Function to handle product search
function searchProducts(searchTerm) {
        $(".product").each(function() {
            const productName = $(this).find(".product-name").text().toLowerCase();
            if (productName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
$(document).ready(function () {
    $('.toggle').click(function () {
        // Toggle the 'flip' class on the opener image
        $('.opener').toggleClass('flip');
    });
});
// add to cart button alert
function product() {
  Swal.fire({
  title: 'Product Added',
  text: 'Check Mail for Further Process',
  icon: 'success',
  confirmButtonText: 'OK',
});
}