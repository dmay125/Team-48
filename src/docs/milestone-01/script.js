// - **Expandable Sections**: Create sections within the document (e.g., Introduction, Features, Benefits) 
// that are initially collapsed. Users can click on a section header to expand and view its content.
//  This would involve dynamically altering the **`.innerHTML`** to include the expanded section content or inserting
//   new DOM elements to reveal hidden text.

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.innerHTML = "Open Collapsible";
    } else {
      content.style.display = "block";
      this.innerHTML = "Close Collapsible";
    }
  });
}

