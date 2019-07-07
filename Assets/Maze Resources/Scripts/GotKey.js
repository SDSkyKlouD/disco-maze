#pragma strict

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "Ball") Destroy(gameObject);
}