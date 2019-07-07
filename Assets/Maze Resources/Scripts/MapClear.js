#pragma strict

private var doorOpened : boolean = false;
private var mapList : String[] = [ "Map2", "Map3", "Map4", "Map5", "Map6", "MapEnd" ];

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "Ball") {
		if(GameObject.FindGameObjectsWithTag("Door").Length == 0) doorOpened = true;
	
		if(doorOpened == true) {
			Application.LoadLevel(mapList[Variables.mapIndex]);
			Variables.mapIndex++;
		}
	}
}