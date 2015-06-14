
var distance;
var target : Transform;

// movement variables
var controller : CharacterController;
var gravity : float = 20;
private var move_direction : Vector3 = Vector3.zero;
var move_speed = 5.0;
var damping = 6.0;
var chase_range = 16; 
var sight_distance = 25.0;
var wander_speed = 3;
var move_timer : int = 0;



//attack variables
var attack_speed = 2; 
private var attack_time : float;
var attack_damage : int = 20;
var attack_range = 3;



//health management
var health_bar : Transform;
var health_points : int = 100;
var death_animation : AnimationClip;
var dead_check : boolean = false;


function Start () {
	attack_time = Time.time;
	transform.eulerAngles = Vector3(0, Random.Range(0,360), 0);
	
	target = GameObject.FindGameObjectWithTag("Player").transform;
}

function Update () {
	
	distance = Vector3.Distance(target.position, transform.position);
	
	// stop updating if enemy is dead
	if(health_points > 0 && dead_check == false){
		if(distance > sight_distance){
		Roam();
		} else {
		AggroControl();
		}
	} else {
		dead_check = true;
		target.SendMessage("AddGold", 1, SendMessageOptions.DontRequireReceiver);
		Debug.Log("GoldAdded");
		Dead();
	}
}

function AggroControl(){

	distance = Vector3.Distance(target.position, transform.position);
		
		// if the player is far away from the enemy (ignore the player)
		if(distance > chase_range && distance < sight_distance){
			GetComponent.<Animation>().Play("waitingforbattle");	
		} else if(distance > sight_distance){			
			GetComponent.<Animation>().Play("idle");
			
		}

			// check if player is seen by the enemy, change the colour of the enemy and make him look at the player
			if(distance < sight_distance){
				should_wander = false;
				lookAt();
			}
			
			// if the enemy is close enough it will attack, otherwise chase the player/target
			if(distance < attack_range){
				should_wander = false;
				attack();		
			}		
			 else if(distance < chase_range){
			 	should_wander = false;
				enemyChase();
			} 

}

function Roam(){
	
	// change the direction after a while
	if(move_timer > 500){
	 	transform.eulerAngles = Vector3(0, Random.Range(0,120), 0);
		move_timer = 0;
	}
	// animate the skeleton moving around in a random direction specified by transform.EulerAngles
	GetComponent.<Animation>().Play("run");
	var forward = transform.TransformDirection(Vector3.forward);
	controller.SimpleMove(forward * wander_speed);
	
	//add to the timer for timekeeping
	move_timer++;
	
}


// rotate the enemy towards the player (damping signifies the speed of rotation)
function lookAt(){
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
	//GetComponent.<Renderer>().material.color = Color.yellow;
}

// chase function for the enemy
function enemyChase(){		
			
		// move the enemy towards the player			
		move_direction = transform.forward;								// move direction
		move_direction *= move_speed;									// move speed 
		
		GetComponent.<Animation>().Play("run");							// running animation
		
		move_direction.y -= gravity * Time.deltaTime;					// gravity affecxting the controller
		controller.Move(move_direction * Time.deltaTime);				// actual movement
	
	
}

// attack function (using intervals for timing)
function attack(){

	if(Time.time > attack_time){
		GetComponent.<Animation>().Play("attack");						// attack animation
		//Debug.Log("enemy attacked");
		// exactly the same logic as with meele weapons behaviour
		// if enemy is facing the player (Raycast check) it will send out a message to reduce player's health
		var hit : RaycastHit;
			 if (Physics.Raycast(this.transform.position, this.transform.TransformDirection(Vector3.forward), hit)){
			 	distance = hit.distance;
			 		// distance checking
			 		if(distance <= attack_range){
			 		hit.transform.SendMessage("ApplyDamage", attack_damage, SendMessageOptions.DontRequireReceiver);
			 		}
			 }
			
		
		attack_time = Time.time + attack_speed;							// interval counting
	}
}

// increase aggresiveness as the enemy gets damaged
function ApplyDamageToEnemy (damage : int){	
	if(health_points > 0){
		
		//health_bar.localScale -= new Vector3(0,0, 0.005);					// reduce the health bar width
		
		chase_range += 20;													//
		move_speed += 2;													//	
		sight_distance += 30;												// make the enemy angry
		
		health_points -= damage;											// reduce hp
	}
}


function Dead(){
	
	GetComponent.<Animation>().Play(death_animation.name);
	Destroy(gameObject,death_animation.length);	
	target.SendMessage("AddGold", 25, SendMessageOptions.DontRequireReceiver);
}












