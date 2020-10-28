  /*modal*/
  var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// click the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// click on (x) close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// click anywhere outside of the modal close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}