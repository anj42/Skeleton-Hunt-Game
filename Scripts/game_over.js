﻿#pragma strict

function Start () {

}

function Update () {
	
	if(Input.GetKeyDown(KeyCode.Space)){
		Application.LoadLevel("level1");
	}
	
}