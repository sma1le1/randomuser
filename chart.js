var modal = document.getElementById('myModal');
var openmodal = document.getElementById("myBtn");
var closemodal = document.getElementsByClassName("close")[0];

openmodal.onclick = function(){
	modal.style.display = "block";
}
closemodal.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
 	modal.style.display = "none";
 }
}

