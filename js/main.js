
////////////
////////////
///////
Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance ==Synth;
var instrument=0;

$('#KEY_C3').on('click',function(){

	Synth.play(0,'C#',3,2);



});

$('#KEY_C10').on('click',function(){

	Synth.play(0,'C#',5,2);



});
$('#KEY_D21').on('click',function(){

	Synth.play(0,'D#',5,2);



});
$('#KEY_D20').on('click',function(){

	Synth.play(0,'D#',4,2);



});
$('#KEY_D17').on('click',function(){

	Synth.play(0,'D#',3,2);



});
$('#KEY_C13').on('click',function(){

	Synth.play(0,'C',3,2);



});


$('#KEY_D3').on('click',function(){

	Synth.play(0,'D',3,2);



});



$('#KEY_E1').on('click',function(){

	Synth.play(0,'E',3,2);



});

$('#KEY_F-1').on('click',function(){

	Synth.play(0,'F',3,2);



});

$('#KEY_F2').on('click',function(){

	Synth.play(0,'F#',3,2);

	console.log(Synth.play(0,'F#',3,2));

});

$('#KEY_G-1').on('click',function(){

	Synth.play(0,'G',3,2);

	console.log(Synth.play(0,'G',3,2));

});
$('#KEY_G1').on('click',function(){

	Synth.play(0,'G#',3,2);

	console.log(Synth.play(0,'G',3,2));

});

$('#KEY_F1').on('click',function(){

	Synth.play(0,'F#',3,2);

	console.log(Synth.play(0,'F#',3,2));

});

$('#KEY_A-1').on('click',function(){

	Synth.play(0,'A',3,2);

	console.log(Synth.play(0,'A',3,2));

});

$('#KEY_A1').on('click',function(){

	Synth.play(0,'A#',3,2);

	console.log(Synth.play(0,'A#',3,2));

});

$('#KEY_B-1').on('click',function(){

	Synth.play(0,'B',3,2);

	console.log(Synth.play(0,'B',3,2));

});

$('#KEY_C-1').on('click',function(){

	Synth.play(0,'C',4,2);

	console.log(Synth.play(0,'C',4,2));

});

$('#KEY_C0').on('click',function(){

	Synth.play(0,'C#',4,2);

	console.log(Synth.play(0,'C#',4,2));

});

$('#KEY_D0').on('click',function(){

	Synth.play(0,'D',4,2);

	console.log(Synth.play(0,'D',4,2));

});

$('#KEY_D1').on('click',function(){

	Synth.play(0,'D#',4,2);

	console.log(Synth.play(0,'D#',4,2));

});

$('#KEY_E0').on('click',function(){

	Synth.play(0,'E',4,2);

	console.log(Synth.play(0,'E',4,2));

});

$('#KEY_F0').on('click',function(){

	Synth.play(0,'F',4,2);

	console.log(Synth.play(0,'F',4,2));

});

$('#KEY_D10').on('click',function(){

	Synth.play(0,'D#',4,2);

	console.log(Synth.play(0,'D#',4,2));

});

$('#KEY_G0').on('click',function(){

	Synth.play(0,'G',4,2);

	console.log(Synth.play(0,'G',4,2));

});



$('#KEY_G10').on('click',function(){

	Synth.play(0,'G#',4,2);

	console.log(Synth.play(0,'G#',4,2));

});

$('#KEY_A0').on('click',function(){

	Synth.play(0,'A',4,2);

	console.log(Synth.play(0,'A',4,2));

});

$('#KEY_A10').on('click',function(){

	Synth.play(0,'A#',4,2);

	console.log(Synth.play(0,'A#',4,2));

});

$('#KEY_B0').on('click',function(){

	Synth.play(0,'B',4,2);

	console.log(Synth.play(0,'B',4,2));

});

$('#KEY_C15').on('click',function(){

	Synth.play(0,'C',5,2);

	console.log(Synth.play(0,'C',5,2));

});

$('#KEY_C01').on('click',function(){

	Synth.play(0,'C#',5,2);

	console.log(Synth.play(0,'C#',5,2));

});

$('#KEY_D1').on('click',function(){

	Synth.play(0,'D',5,2);

	console.log(Synth.play(0,'D',5,2));

});
$('#KEY_D01').on('click',function(){

	Synth.play(0,'D#',5,2);

	console.log(Synth.play(0,'D#',5,2));

});

$('#KEY_E15').on('click',function(){

	Synth.play(0,'E',5,2);

	console.log(Synth.play(0,'E',5,2));

});

$('#KEY_F1').on('click',function(){

	Synth.play(0,'F',5,2);

	console.log(Synth.play(0,'F',5,2));

});

$('#KEY_F21').on('click',function(){

	Synth.play(0,'F#',5,2);

	console.log(Synth.play(0,'F#',5,2));

});

$('#KEY_G15').on('click',function(){

	Synth.play(0,'G',5,2);

	console.log(Synth.play(0,'G',5,2));

});

$('#KEY_G21').on('click',function(){

	Synth.play(0,'G#',5,2);

	console.log(Synth.play(0,'G#',5,2));

});

$('#KEY_A15').on('click',function(){

	Synth.play(0,'A',5,2);

	console.log(Synth.play(0,'A',5,2));

});

$('#KEY_A21').on('click',function(){

	Synth.play(0,'A#',5,2);

	console.log(Synth.play(0,'A#',5,2));

});

$('#KEY_B1').on('click',function(){

	Synth.play(0,'B',5,2);

	console.log(Synth.play(0,'B',5,2));

});

// function randomKey(){
console.log(keytype);
if(keytype<10){
	var eles = document.querySelectorAll('*[id]');
	var nokey = [9,10,16,17,18,19,20,27,91,92,93,112,113,114,115,116,117,118,119,120,121,122,123];
	document.addEventListener("keydown", function(event) {
		console.log(334, event.keyCode);
		if(nokey.indexOf(event.keyCode) > -1) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		}
		const rndInt = Math.floor(Math.random() * eles.length) + 1
		// console.log(rndInt)
		$("#"+eles[rndInt].id).addClass("active");
		$("#"+eles[rndInt].id).trigger("click");
		setTimeout(function(){
			$("#"+eles[rndInt].id).removeClass("active");
		}, 100);
	});
}
else if(keytype>=11){
	$('body').on('keypress', function(event) {
		if (event.key=='q'){
			ara("KEY_C13");
			Synth.play(instrument, 'C', 3, 2);
		}

		else if (event.key=='2'){
			ara("KEY_C3");
			Synth.play(instrument, 'C#', 3, 2);
		}

		else if (event.key=='w'){
			ara("KEY_D3");
	  		Synth.play(instrument, 'D', 3, 2)
		}

		else if (event.key=='3'){
			ara("KEY_D17");
	  		Synth.play(instrument, 'D#', 3, 2)
		}
		
		else if (event.key=='e'){
			ara("KEY_E1");
	  		Synth.play(instrument, 'E', 3, 2)
		}
		
		else if (event.key=='r'){
			ara("KEY_F-1");
	  		Synth.play(instrument, 'F', 3, 2)
		}
		
		else if (event.key=='5'){
			ara("KEY_F2");
	  		Synth.play(instrument, 'F#', 3, 2)
		}

		else if (event.key=='t'){
			ara("KEY_G-1");
	  		Synth.play(instrument, 'G', 3, 2)
		}

		else if (event.key=='6'){
			ara("KEY_G1");
		  	Synth.play(instrument, 'G#', 3, 2)
		}
		else if (event.key=='y'){
			ara("KEY_A-1");
	  		Synth.play(instrument, 'A', 3, 2)
		}
		
		else if (event.key=='7'){
			ara("KEY_A1");
	  		Synth.play(instrument, 'A#', 3, 2)
		}

		else if (event.key=='u'){
			ara("KEY_B-1");
	  		Synth.play(instrument,'B', 3, 2)
		}

		else if (event.key=='i'){
			ara("KEY_C-1");
	  		Synth.play(instrument, 'C', 4, 2)
		}

		else if (event.key=='9'){
			ara("KEY_C0");
			Synth.play(instrument, 'C#', 4, 2)
		}

		else if (event.key=='o'){
			ara("KEY_D0");
	  		Synth.play(instrument,'D', 4, 2)
		}

		else if (event.key=='0'){
			ara("KEY_D10");
	  		Synth.play(instrument, 'D#', 4, 2)
		}

		else if (event.key=='p'){
			ara("KEY_E0");
		  	Synth.play(instrument,'E', 4, 2)
		}

		else if (event.key=='['){
			ara("KEY_F0");
	  		Synth.play(instrument, 'F', 4, 2)
		}

		else if (event.key=='='){
			ara("KEY_D20");
	  		Synth.play(instrument, 'F#', 4, 2)
		}

		else if (event.key==']'){
			ara("KEY_G0");
		  	Synth.play(instrument, 'G', 4, 2)
		}

		else if (event.key=='a'){
			ara("KEY_G10");
	  		Synth.play(instrument, 'G#', 4, 2)
		}
		else if (event.key=='z'){
			ara("KEY_A0");
	  		Synth.play(instrument, 'A', 4, 2)
		}

		else if (event.key=='s'){
			ara("KEY_A10");
	  		Synth.play(instrument, 'A#', 4, 2)
		}

		else if (event.key=='x'){
			ara("KEY_B0");
	  		Synth.play(instrument, 'B', 4, 2)
		}

		else if (event.key=='c'){
			ara("KEY_C15");
		  	Synth.play(instrument, 'C', 5, 2)
		}

		else if (event.key=='f'){
			ara("KEY_C10");
	 		Synth.play(instrument, 'C#', 5, 2)
		}

		else if (event.key=='v'){
			ara("KEY_D1");
		 	Synth.play(instrument, 'D', 5, 2)
		}

		else if (event.key=='g'){
			ara("KEY_D21");
		 	Synth.play(instrument, 'D#', 5, 2)
		}

		else if (event.key=='b'){
			ara("KEY_E15");
		  	Synth.play(instrument, 'E', 5, 2)
		}

		else if (event.key=='n'){
			ara("KEY_F1");
	  		Synth.play(instrument, 'F', 5, 2)
		}

		else if (event.key=='j'){
			ara("KEY_F21");
			Synth.play(instrument, 'F#', 5, 2)
		}

		else if (event.key=='m'){
			ara("KEY_G15");
	  		Synth.play(instrument, 'G', 5, 2)
		}

		else if (event.key=='k'){
			ara("KEY_G21");
	 		Synth.play(instrument,  'G#', 5, 2)
		}

		else if (event.key==','){
			ara("KEY_A15");
	  		Synth.play(instrument, 'A', 5, 2)
		}

		else if (event.key=='l'){
			ara("KEY_A21");
	  		Synth.play(instrument,'A#', 5, 2)
		}

		else if (event.key=='.'){
			ara("KEY_B1");
	  		Synth.play(instrument, 'B', 5, 2)
		}
	});	
}

function ara(id){
	$(".active").removeClass("active");
	$("#"+id).addClass("active");
	setTimeout(function(){
		$("#"+id).removeClass("active");
	}, 100);
}