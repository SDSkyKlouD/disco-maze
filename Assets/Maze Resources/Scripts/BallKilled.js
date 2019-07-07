#pragma strict

var spike : Transform;

function OnCollisionEnter (other : Collision) {
	if(other.gameObject.tag == "BallKiller") {
		GameObject.Instantiate(spike, transform.position, Quaternion.Euler(0, 0, 0));
	}
}