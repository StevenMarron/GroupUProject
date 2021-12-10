// JAVASCRIPT

// HIDDEN GAME JAVASCRIPT
// AUTHOR - STEVEN MARRON

/*THIS GUESSING GAME TO REVEAL HIDDEN CONTENT 
IS TRIGGERED UPON CLICK OF treasureButton BUTTON
GUESS NUMBER BETWEEN 1-10, RANDOM NUMBER GENERATED DOES NOT CHANGE. 
AFTER 5 INCORRECT TRIES THE GAME WILL REVEAL HIDDEN CONTENT ANYWAY
UTILISING JQUERY HIDE AND SHOW FUNCTIONS TO HIDE ORIGINAL BUTTON
AND REVEAL HIDDEN IMAGE AND BUTTON TO HIDE TREASURE AGAIN, ONCE REVEALED.

THE USER CAN THEN HIDE TREASURE AGAIN, AT WHICH POINT THE GLOBAL
TRY COUNT REVERTS BACK TO 0 SHOULD THE PLAYER WISH TO TRY AGAIN.*/

count=0;
maxTries=5;
randNum=(Math.floor(Math.random()*10)+1);
function HiddenTreasure(){
	
	// SET RANDNUM TO FIXED VALUE FOR TESTING PURPOSES
	// var randNum=3;
	console.log(randNum);
	
	// WIN VARIABLE USED TO BREAK WHILE LOOP UPON WIN OR MAXTRIES REACHED
	var win=false;
	while(win==false && count<maxTries){
		var userGuess=prompt("Guess a number between 1-10!");
		if(userGuess>=1 && userGuess<=10){
			if(userGuess==randNum){
				alert("Wow! great guess! Hope you enjoy the hidden treasure!");
				$(document).ready(function(){
					$("#treasureButton").hide();
				});
				$(document).ready(function(){
					$("#treasure").show();
				});
				
				win=true;
			}

			else{
				count=count+1;
				console.log("count: "+count);
				countAlerts();
			}
			
		// INPUT VALIDATION IN CASE OF NULL VALUE, VALUE OUTSIDE OF 1-10 OR STRING VALUE INPUT
		
		}
		else if(userGuess==null){
			win=true;
		}
		else if(userGuess==""){
			alert("... You could've at least given it a go..");
			count=count+1;
		}
		else{
			alert("Please enter a number between 1-10!!")
		}
	}
}

// TRY COUNTER ALTERS RESPONSE DEPENDING ON AMOUNT OF ATTEMPTS, MAXTRIES VARIABLE SET GLOBALLY

function countAlerts(){

		if(count==1){
			alert("See, told you, nothing to see here...")
		}			
		else if(count>1 && count<3){
			alert("Wow, "+count+" tries, you're really determined");
		}
		else if(count>=3 && count<maxTries){
			alert("Ah come on, "+count+" tries!? I'm starting to feel bad now..");
		}
		else if(count==maxTries){
			alert("Ok, ok this is just taking all the fun out of it! here's your treasure .. cute though right?");
			$(document).ready(function(){
				$("#treasureButton").hide();
			});
			$(document).ready(function(){
				$("#treasure").show();
			});
		}
}

// OPTION TO HIDE TREASURE CONTENT AGAIN AFTER COMPLETION OF GAME, REVERSE JQUERY COMMANDS TO "hIDDENTREASURE()"

function hideHiddenTreasure(){
		$(document).ready(function(){
			$("#treasureButton").show();
		});
		$(document).ready(function(){
			$("#treasure").hide();
		});
		count=0;
}