var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname ) {

  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  // Loop through all tab contents and hide them
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  // Add the "active-link" class to the clicked tab
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// side menu


var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
    }




        // Function to open a specific tab
        function opentab(tabName) {
          // Hide all tabs
          const allTabs = document.querySelectorAll('.tab-contents');
          allTabs.forEach(tab => tab.style.display = 'none');

          // Remove the 'active-link' class from all tab links
          const allLinks = document.querySelectorAll('.tab-links');
          allLinks.forEach(link => link.classList.remove('active-link'));

          // Show the clicked tab
          const selectedTab = document.getElementById(tabName);
          if (selectedTab) {
              selectedTab.style.display = 'block';
          }

          // Add 'active-link' class to the clicked tab link
          const activeLink = document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`);
          if (activeLink) {
              activeLink.classList.add('active-link');
          }
      }

      // Optionally, you can open a tab by default when the page loads
      window.onload = function() {
          opentab('skills'); // Automatically open the 'skills' tab (you can change this to any tab)
      };


  // JavaScript to toggle the visibility of the list when the button is clicked
document.getElementById('readMoreBtn').addEventListener('click', function() {
  var content = document.getElementById('readMoreContent');
  var button = document.getElementById('readMoreBtn');

  if (content.style.display === 'none') {
      content.style.display = 'block';  // Show the list
      button.textContent = 'Read Less';  // Change button text to 'Read Less'
  } else {
      content.style.display = 'none';  // Hide the list
      button.textContent = 'Read More';  // Change button text back to 'Read More'
  }
});
// JavaScript for the second "Show More" Button (with new unique ID)
document.getElementById('toggleBtn2').addEventListener('click', function() {
  var content = document.getElementById('contentSection2');
  var button = document.getElementById('toggleBtn2');

  // Toggle content visibility and button text
  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';  // Show content
      button.textContent = 'Show Less';  // Change button text to 'Show Less'
  } else {
      content.style.display = 'none';  // Hide content
      button.textContent = 'Show More';  // Change button text back to 'Show More'
  }
});
  // JavaScript to toggle visibility of the list when "Read More" button is clicked
  document.getElementById("readMoreBtn1").addEventListener("click", function() {
    var content = document.getElementById("readMoreContent1");
    if (content.style.display === "none") {
        content.style.display = "block";
        this.innerHTML = "Read Less"; // Change button text
    } else {
        content.style.display = "none";
        this.innerHTML = "Read More"; // Reset button text
    }
});