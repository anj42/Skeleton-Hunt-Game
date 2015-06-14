#pragma strict

private var the_collider : String; 

// turn on music when player enters the area
function OnTriggerEnter(other : Collider){
	
	the_collider = other.tag;
	
	// check if the object that collided with the area is a player
	if(the_collider == "Player"){
		GetComponent.<AudioSource>().Play();
		GetComponent.<AudioSource>().loop = true;
	}
}

//stop the music when area left
function OnTriggerExit(other : Collider){
	the_collider = other.tag;
	
	// check if the object that collided with the area is a player
	if(the_collider == "Player"){
		GetComponent.<AudioSource>().Stop();
		GetComponent.<AudioSource>().loop = false;
	}
}