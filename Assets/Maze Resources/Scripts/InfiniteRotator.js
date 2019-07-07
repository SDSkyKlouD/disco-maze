#pragma strict

public var rotateZaxis : boolean = false;

function Update () {
	if(rotateZaxis == false)
		transform.Rotate(Vector3.up * Time.deltaTime * 50);
	else
		transform.Rotate(Vector3.forward * Time.deltaTime * 50);
}