#pragma strict

function Update() {
	if(transform.position.y < -3) {
		var respawnPoint : GameObject = GameObject.FindGameObjectWithTag("Respawn");
		transform.position = respawnPoint.transform.position;
	}
}

/* function OnCollisionEnter(collision : Collision) {
	var respawnPoint : GameObject = GameObject.FindGameObjectWithTag("Respawn");
	transform.position = respawnPoint.transform.position;
} */