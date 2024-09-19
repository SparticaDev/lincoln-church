// Nav

function openNav() {
    document.getElementById("mySidenav").style.width = "265px";
    const content = document.querySelector(".sidenav-content");
    content.style.visibility = "visible";
    content.style.opacity = "1";
}

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    const content = document.querySelector(".sidenav-content");
  content.style.visibility = "hidden";
  content.style.opacity = "0";
}

// Turns html Buttons into Links

document.getElementById("facebookButton").addEventListener("click", function() {

    window.open("https://www.facebook.com/people/Lincoln-Church-of-Christ/100093939099919/", "_blank");

  });

  document.getElementById("visitUs").addEventListener("click", function() {
    window.location.href = "visitUs.html";
});

document.getElementById("events").addEventListener("click", function() {
  window.location.href = "events.html";
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  
  if (dropdown.style.display === "block") {
    dropdown.style.maxHeight = "0";
    setTimeout(function() {
      dropdown.style.display = "none";
    }, 300); // Match the transition duration
  } else {
    dropdown.style.display = "block";
    setTimeout(function() {
      dropdown.style.maxHeight = "500px"; // Adjust this value to fit your content
    }, 10); // Small delay to allow the display to take effect before maxHeight
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.maxHeight = "0";
        setTimeout(function(dropdown) {
          dropdown.style.display = "none";
        }.bind(null, openDropdown), 300); // Match the transition duration
      }
    }
  }
}




// Back to Top Button

// Get the button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}