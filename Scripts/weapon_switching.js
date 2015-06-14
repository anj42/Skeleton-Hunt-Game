#pragma strict

// array of weapons (can easily be expanded)
var weapons : GameObject[];
private var i : int;
private var texture_counter : int;

// textures for icons to be displayed
var textures : Texture [];

function Update () {
		
		//switching weapons by choosing the number assigned 
		// ResetWeapons() to ensure no two weapons are equipped at the same time
		if(Input.GetKeyDown(KeyCode.Alpha1)){
			ResetWeapons();			
			texture_counter= 0;
			weapons[0].SetActive (true);
		} else if (Input.GetKeyDown(KeyCode.Alpha2)){
			ResetWeapons();
			texture_counter= 1;
			weapons[1].SetActive (true);
		} else if (Input.GetKeyDown(KeyCode.Alpha3)){
			ResetWeapons();
			texture_counter= 2;
			weapons[2].SetActive (true);
		} else if (Input.GetKeyDown(KeyCode.Alpha4)){
			ResetWeapons();
			texture_counter= 3;
			weapons[3].SetActive (true);
		}
		
}

function ResetWeapons(){
	for (i = 0; i < weapons.Length; i++){
		weapons[i].SetActive(false);
	}
}

// OnGUI will display an icon of currently used item
function OnGUI(){

	GUI.DrawTexture(Rect(20, 55, 50, 50), textures[texture_counter], ScaleMode.ScaleToFit, true, 0);

}


