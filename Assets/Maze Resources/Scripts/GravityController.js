#pragma strict

function Update () {
	Physics.gravity = Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 40.0, Vector3.forward)
		* Quaternion.AngleAxis(Input.GetAxis("Vertical") * -40.0, Vector3.right) * (Vector3.up * -20.0);
}