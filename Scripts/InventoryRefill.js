#pragma strict

private var the_collider : String; 
private var refill_in_progress : boolean;

var refill_potion : GameObject;
var refill_bolt : GameObject;



function OnTriggerStay(other : Collider){
	
	the_collider = other.tag;
	refill_in_progress = true;
	
	// check if the object that collided with the area is a player
	if(the_collider == "Player"){
		
		other.BroadcastMessage("Refill",0, SendMessageOptions.DontRequireReceiver);
		Debug.Log("REFILL");
	}
}


function OnGUI (){
	if(refill_in_progress)
	 GUI.Label(Rect(80,70,150,50), "Equip crossbow or potions to refill them.");

}

function OnTriggerExit(other : Collider){
	the_collider = other.tag;
	
	refill_in_progress= false;
}