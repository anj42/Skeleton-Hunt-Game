#pragma strict

var damage : int = 50;

function OnCollisionEnter (info : Collision)
{	
		info.transform.SendMessage("ApplyDamageToEnemy", 25, SendMessageOptions.DontRequireReceiver);
		//Debug.Log("Damage applied");
}