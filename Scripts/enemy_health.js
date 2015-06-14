#pragma strict

var health_points : int = 100;
var death_animation : AnimationClip;
var dead_check : boolean = false;

function Start () {

}

function Update () {
	if(health_points <= 0 && dead_check == false){
		dead_check = true;
		Dead();
	}
}

function ApplyDamage (damage : int) {
		health_points -= damage;
}

function Dead(){
	GetComponent.<Animation>().Play(death_animation.name);
	Destroy(gameObject,death_animation.length);
}