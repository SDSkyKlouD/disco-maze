#pragma strict

var flameObject : Transform;

function OnTriggerEnter(other : Collider) {
	var spawnPoint : GameObject = GameObject.FindGameObjectWithTag("Respawn");
	var spawnPoint2 : GameObject = GameObject.FindGameObjectWithTag("Respawn2");
	
	if(other.gameObject.tag == "Ball") {
		Variables.deathCount++;
		if(spawnPoint2 != null && GameObject.FindGameObjectWithTag("Door3") == null)
			other.transform.position = Vector3(spawnPoint2.transform.position.x, spawnPoint2.transform.position.y,
				spawnPoint2.transform.position.z);
		else
			other.transform.position = Vector3(spawnPoint.transform.position.x, spawnPoint.transform.position.y,
				spawnPoint.transform.position.z);
				
		GameObject.Instantiate(flameObject, gameObject.transform.position, Quaternion.Euler(0, 0, 0));
	}
}