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
