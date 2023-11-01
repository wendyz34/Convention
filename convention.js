//Events schedule
// Controls open and closing of schedule tab in events
function toggleAccordion(day) {
    var content = document.getElementById("content" + day);
    var arrow = document.getElementById("arrow" + day);
    if (content.style.display === "block" || content.style.display === "") {
        content.style.display = "none";
        arrow.innerText = "▶";
    } else {
        content.style.display = "block";
        arrow.innerText = "▼";
    }
}
 //Events register

// Function to show the success popup
function showSuccessPopup() {
    var successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'block';
 }
 
 // Function to close the popup and refresh the page
 function closePopup() {
    var successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'none';
    location.reload(); 
 }
 
 // Event listener for form submission
 document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showSuccessPopup();
 });
 
 // Event listener to close the popup and refresh the page
 document.getElementById('close-popup').addEventListener('click', closePopup);
 
