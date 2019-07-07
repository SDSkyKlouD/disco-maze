#pragma strict

function OnCollisionEnter(other : Collision) {
	var spawnPoint : GameObject = GameObject.FindGameObjectWithTag("Respawn");
	if(other.gameObject.tag == "Ball") {
		Variables.deathCount++;
		other.transform.position = Vector3(spawnPoint.transform.position.x, spawnPoint.transform.position.y,
			spawnPoint.transform.position.z);
	}
}