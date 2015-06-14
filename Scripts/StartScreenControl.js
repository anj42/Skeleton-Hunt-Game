#pragma strict

function Start (){
	
	Cursor.lockState = CursorLockMode.None;
	Cursor.visible = true;

}


function StartGame () {

	Application.LoadLevel("level1");

}

function QuitGame(){
	
	Application.Quit();

}

function OpenInformationWindow() {

	Application.LoadLevel("information_screen");

}