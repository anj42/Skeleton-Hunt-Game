#pragma strict

var bullet_texture : GameObject[];


function Start () {

}

function Update () {

	var forward = transform.TransformDirection(Vector3.forward);
	var hit : RaycastHit; 
	Debug.DrawRay(transform.position, forward * 10, Color.red);
	
		if(Input.GetButtonDown ("Fire1") && Physics.Raycast(transform.position, forward, hit, 10)){
		
			Instantiate(bullet_texture[Random.Range(0,1)], hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
		
		}



}