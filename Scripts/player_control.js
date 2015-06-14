#pragma strict

var player_health : int;
var dmg_done_img : GameObject;
var keep_updating : boolean = true;
var gold : int = 0;

function Start () {
	player_health = 100;
	gold = 0;
	Cursor.lockState = CursorLockMode.Locked;
	Cursor.visible = false;
}

function Update () {
	
	
	
	if(Input.GetKeyDown(KeyCode.Escape)){
		Application.Quit();
	}
	
	if(keep_updating == true){
		if(player_health <= 0){
			keep_updating = false;
			PlayerDead();		
		}
	}
}

function ApplyDamage (damage : int) {
		dmg_done_img.SetActive(true);
		player_health -= damage;
		yield WaitForSeconds(1);
		dmg_done_img.SetActive(false);
}


function PlayerDead(){
	yield WaitForSeconds (1);
	Application.LoadLevel("game_over_scene");		
}

function OnGUI (){
	if(player_health > 0){
		GUI.color = Color.green;		
		GUI.Box(Rect(20, 20, player_health * 5, 30), "HP: " + player_health);
	}
	GUI.Label(Rect(80, 55, 100, 50), "Gold: " + gold/100);
}

function HealOneHp () {
	if(player_health < 100){			
		player_health += 1;
	}	
}

function HealAmount (heal_value : int){
	if(player_health < 100){
		player_health += heal_value;
		if(player_health > 100) player_health = 100;
	}
}


function AddGold (amount : int){

	gold += amount;

}





