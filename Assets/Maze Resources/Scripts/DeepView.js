#pragma strict

function Update() {
	var mainCamera : GameObject = GameObject.Find("CAMMain");
	var deepViewCamera : GameObject = GameObject.Find("CAMDeepView");
	
	if(Input.GetButton("Jump")) {
		mainCamera.camera.enabled = false;
		deepViewCamera.camera.enabled = true;
	} else {
		deepViewCamera.camera.enabled = false;
		mainCamera.camera.enabled = true;
	}
}