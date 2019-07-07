#pragma strict

var keyTag : String = "Key";
var doorTag : String = "Door";

function Update() {
	if(GameObject.FindGameObjectsWithTag(keyTag).Length == 0)
		SendMessage("destroyDoor");
}

function destroyDoor() {
	var door : GameObject = GameObject.FindGameObjectWithTag(doorTag);
	Destroy(door);
}