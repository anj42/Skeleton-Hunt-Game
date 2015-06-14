#pragma strict

var enemy : GameObject;
var spawn_time : float = 15f;


function Start () {
	InvokeRepeating ("Spawn", spawn_time, spawn_time);
}

function Spawn () {

	var new_enemy = Instantiate(enemy, transform.position, transform.rotation);

}