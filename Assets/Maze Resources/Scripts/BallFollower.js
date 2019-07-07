#pragma strict

function Update () {
	var followTarget : GameObject = GameObject.Find("SPBall");
	var targetPos : Vector3 = followTarget.transform.position;
	targetPos.y += 2.5f;
	targetPos.z -= 1.8f;
	transform.position = targetPos;
	// if(withRotation == false)
	//	transform.rotation = Quaternion.Euler(0, 90, 0);
}