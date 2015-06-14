#pragma strict

var damage : int = 50;
var distance : float; 
var max_hit_distance : float = 1.5;
var system : Transform;

function Update () { 

	if(Input.GetButtonDown("Fire1")){
		// attack
		GetComponent.<Animation>().Play("attack");
		GetComponent.<AudioSource>().Play();
	
	} else if (Input.GetButtonDown("Fire2")){
		//GetComponent.<Animation>().Play("attack_2");
	}
	
}


function Attack(){
	var hit : RaycastHit;
			 if (Physics.Raycast(system.transform.position, system.transform.TransformDirection(Vector3.forward), hit)){
			 	distance = hit.distance;
			 		// distance checking
			 		if(distance <= max_hit_distance){
			 		hit.transform.SendMessage("ApplyDamageToEnemy", damage, SendMessageOptions.DontRequireReceiver);
			 		}
			 }
}


