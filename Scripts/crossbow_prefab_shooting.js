#pragma strict

var theBullet : Rigidbody;
var speed = 20;
var amunition : int = 12;



function Update () {
	if (Input.GetMouseButtonDown(0))
	{
		if (amunition > 0){
			GetComponent.<AudioSource>().Play();
			var clone = Instantiate(theBullet, transform.position, transform.rotation);
			clone.velocity = transform.TransformDirection(Vector3(0, 0, speed));
		
			Destroy (clone.gameObject, 3);
			
			amunition--;
		}
	}
}

function OnGUI(){

	 GUI.Box(Rect(20, 110, 60, 30), "Bolts: " + amunition);
	 
	 if(amunition == 0){	
	 	GUI.Label(Rect(20,145,150,50), "No more bolts left!");
	 }
	
}

function Refill() {

	amunition = 12;

}