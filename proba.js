// var hammer = new Hammer(docum)

/*
 window.onload = function() {
 // alert("welcome");

 var hammer = new Hammer(document.getElementById('proba'));

 hammer.ontap = function(ev) { document.getElementById('proba').style.background = 'red';};

 }
 */

$(document).ready(function() {

	// alert("kaixo");
	var hammer1 = new Hammer(document.getElementById('bat'));
	var hammer2 = new Hammer(document.getElementById('bi'));
	var hammer3 = new Hammer(document.getElementById('hiru'));

	// var proba = document.getElementsByClassName('proba');

	hammer1.ontap = function(ev) {
		document.getElementById('bat').style.background = 'red';
		document.getElementById('bi').style.background = 'yellow';
		document.getElementById('hiru').style.background = 'yellow';

		// send the change
		send('bat');
	};

	hammer2.ontap = function(ev) {
		document.getElementById('bi').style.background = 'red';
		document.getElementById('bat').style.background = 'yellow';
		document.getElementById('hiru').style.background = 'yellow';

		// send the change
		send('bi');
	};

	hammer3.ontap = function(ev) {
		document.getElementById('hiru').style.background = 'red';
		document.getElementById('bat').style.background = 'yellow';
		document.getElementById('bi').style.background = 'yellow';

		// send the change
		send('hiru');

	};
	
	hammer1.onswipe = function(ev) {
		document.getElementById('bat').style.background = 'green';
		document.getElementById('bi').style.background = 'yellow';
		document.getElementById('hiru').style.background = 'yellow';
	};

});




// hammer.ondragstart = function(ev) { document.getElementById('proba').style.background = 'red';};
// hammer.ondrag = function(ev) { document.getElementById('proba').style.background = 'red';};
// hammer.ondragend = function(ev) { document.getElementById('proba').style.background = 'red';};
// hammer.onswipe = function(ev) {document.getElementById('proba').style.background = 'red';};

// hammer.ontap = function(ev) { document.getElementById('proba').style.background = 'red';};
// hammer.ondoubletap = function(ev) { document.getElementById('proba').style.background = 'red';};
// hammer.onhold = function(ev) { document.getElementById('proba').style.background = 'red';};

// hammer.ontransformstart = function(ev) { document.getElementById('proba').style.background = 'red';};
// hammer.ontransform = function(ev) {document.getElementById('proba').style.background = 'red'; };
// hammer.ontransformend = function(ev) {document.getElementById('proba').style.background = 'red'; };

// hammer.onrelease = function(ev) {document.getElementById('proba').style.background = 'red'; };