#pragma strict

private var the_collider : String; 
private var healing_in_progress : boolean;

function OnTriggerStay(other : Collider){
	
	the_collider = other.tag;
	healing_in_progress = true;
	// check if the object that collided with the area is a player
	if(the_collider == "Player"){
		other.SendMessage("HealOneHp", 0, SendMessageOptions.DontRequireReceiver);
	}
}

function OnGUI (){
	if(healing_in_progress)
	 GUI.Label(Rect(525,25,150,50), "Health fully restored.");

}


//stop healing when area left
function OnTriggerExit(other : Collider){
	the_collider = other.tag;
	
	healing_in_progress= false;
}
