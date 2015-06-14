#pragma strict

var torch : GameObject;

function Update () {

	if(Input.GetKeyDown(KeyCode.T)){
		
		if(torch.activeSelf == false){
			torch.SetActive(true);
		} else if (torch.activeSelf == true){
			torch.SetActive(false);
		}
	
	}
}