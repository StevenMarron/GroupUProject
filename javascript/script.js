// JAVASCRIPT

// HIDDEN GAME JAVASCRIPT

count=0;
maxTries=5;
randNum=(Math.floor(Math.random()*10)+1);
function HiddenTreasure(){
	// var randNum=3;
	console.log(randNum);
	var win=false;
	while(win==false && count<maxTries){
		var userGuess=prompt("Guess a number between 1-10!");
		if(userGuess>=1 && userGuess<=10){
			if(userGuess==randNum){
				alert("Wow! great guess! Hope you enjoy the hidden treasure!")
				document.getElementById("treasureButton").style.display="none";
				document.getElementById("treasure").style.display="block";
				win=true;
			}

			else{
				count=count+1;
				console.log("count: "+count);
				countAlerts();
			}
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
			alert("Fine, here's your stupid treasure!.. cute though right?");
			document.getElementById("treasureButton").style.display="none";
			document.getElementById("treasure").style.display="block";
		}
}

function hideHiddenTreasure(){
		document.getElementById("treasure").style.display="none";
		document.getElementById("treasureButton").style.display="block";
		count=0;
		
}