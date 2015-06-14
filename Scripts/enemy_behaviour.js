
var distance;
var target : Transform;
var sight_distance = 25.0;
var attack_range = 15.0;
var move_speed = 5.0;
var damping = 6.0;

function Start () {

}

function Update () {

	distance = Vector3.Distance(target.position, transform.position);
		// check if player is seen by the enemy, change the colour of the enemy and make him look at the player
		if(distance < sight_distance){
			GetComponent.<Renderer>().material.color = Color.yellow;
			lookAt();
		}
		
		// if the player is far away from the enemy (ignore the player)
		if(distance > sight_distance){
			GetComponent.<Renderer>().material.color = Color.green;
		}
		
		// player attacked by the enemy 
		if(distance < attack_range){
			enemyAttack();
			GetComponent.<Renderer>().material.color = Color.red;
		
		}
}

// rotate the enemy towards the player (damping signifies the speed of rotation)
function lookAt(){
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}

// attack function for the enemy
function enemyAttack(){
	// move the enemy towards the player
	if(distance > 2){
	transform.Translate(Vector3.forward * move_speed * Time.deltaTime);
	}
}