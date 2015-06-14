#pragma strict

var heal_amount : int = 50;
var target : GameObject;
var potions_number : int = 2;


function Start () {

}

function Update () {
	// check if any potions are left
	if(potions_number > 0){
		if (Input.GetButtonDown("Fire1")){
			target.SendMessage("HealAmount", heal_amount, SendMessageOptions.DontRequireReceiver);				// trigger the healing function for the player
			GetComponent.<Animation>().Play("drink_animation");	
			GetComponent.<AudioSource>().Play();												// animation
			potions_number--;																					// decrease the number of potions
		}
	}

}

// display the number of potions remaining
function OnGUI(){

	 GUI.Box(Rect(20, 110, 80, 30), "Potions: " + potions_number);
	 
	 
	 if(potions_number == 0){
	 	
	 	GUI.Label(Rect(20,145,150,50), "No more potions left!");
	 }
	
}

function Refill() {

	potions_number = 2;

}