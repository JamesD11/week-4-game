//Global Variables
//-------------------------
var wins=0;
var loses= 0;
var specialNumber=0;
var currentScore=0;
var randomNumber=" ";
/*var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"*/


// Functions
//--------------------------
function start(){

	specialNumber=0;
	currentScore=0;
	document.querySelector("#score").innerHTML= "0";

	specialNumber=Math.ceil(Math.random()*112+18);
	console.log(specialNumber);

	document.querySelector("#number").innerHTML= specialNumber;

	
	
	}

	function first(){
		
		var blue=Math.ceil(Math.random()*12);
		console.log(blue);
		var red=Math.ceil(Math.random()*12);
		console.log(red);
		var green=Math.ceil(Math.random()*12);
		console.log(green);
		var yellow=Math.ceil(Math.random()*12);
		console.log(yellow);

		$("#blue").on("click",function(){
			currentScore= currentScore+ blue;
			console.log(currentScore);
			document.querySelector("#score").innerHTML= currentScore;
		if(currentScore == specialNumber){
			console.log("you win");
			wins++;
			console.log(wins);
		//document.querySelector("#counter").innerHTML= counter;
		var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();

		}
		if (currentScore > specialNumber){
			console.log("you lose");
			loses++;
			console.log(loses);
			//document.querySelector("#counter").innerHTML= counter;
			var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();

			}
		});
		
		$("#red").on("click",function(){
			currentScore= currentScore+ red;
			console.log(currentScore);
			document.querySelector("#score").innerHTML= currentScore;
		if(currentScore == specialNumber){
			console.log("you win");
			wins++;
			console.log(wins);
			//document.querySelector("#counter").innerHTML= counter;
			var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();
		}

		if (currentScore > specialNumber){
			console.log("you lose");
			loses++;
			console.log(loses);
			//document.querySelector("#counter").innerHTML= counter;
			var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();
			}
		});

		$("#green").on("click",function(){
			currentScore= currentScore+ green;
			console.log(currentScore);
			document.querySelector("#score").innerHTML= currentScore;
		if(currentScore == specialNumber){
			console.log("you win");
			wins++;
			console.log(wins);
			//document.querySelector("#counter").innerHTML= counter;
			var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();

		}
		if (currentScore > specialNumber){
			console.log("you lose");
			loses++;
			console.log(loses);
			//document.querySelector("#counter").innerHTML= counter;
			var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();

			}
		});

		$("#yellow").on("click",function(){
			currentScore= currentScore+ yellow;
			console.log(currentScore);
			document.querySelector("#score").innerHTML= currentScore;
		if(currentScore == specialNumber){
			console.log("you win");
			wins++;
			console.log(wins);
			//document.querySelector("#counter").innerHTML= counter;
			var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();
		}

		if (currentScore > specialNumber){
			console.log("you lose");
			loses++;
			console.log(loses);
			//document.querySelector("#counter").innerHTML= counter;
			var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;
			 start();

			}
		});

		/*var counter= "<p>Wins: " + wins + "</p>" +
			 "<br>" +
			 "<p>Loses: " + loses + "</p>"
			 document.querySelector("#counter").innerHTML= counter;*/


		
	}



			
//restart somehow

//Main processes
//--------------------------
start();
first();


