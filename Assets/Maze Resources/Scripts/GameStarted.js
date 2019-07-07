#pragma strict

public var guiTitleStyle : GUIStyle;
public var guiDescriptionStyle : GUIStyle;
public var guiButtonStyle : GUIStyle;

function Start () {
	StartCoroutine("CoStart");
}

function CoStart () : IEnumerator {
	while(true) yield CoUpdate();
}

function CoUpdate () : IEnumerator {
	guiTitleStyle.normal.textColor.r = Random.Range(0.0f, 1.0f);
	guiTitleStyle.normal.textColor.g = Random.Range(0.0f, 1.0f);
	guiTitleStyle.normal.textColor.b = Random.Range(0.0f, 1.0f);
	yield WaitForSeconds(0.25f);
}

function OnGUI () {
	GUI.Label(Rect(0, Screen.height / 3 - 100, Screen.width, 100), "Ball Maze with D/I/S/C/O Flick!", guiTitleStyle);
	GUI.Label(Rect(0, Screen.height / 3 + 100, Screen.width, 200), "This is a game from GIFTED Dev.1 - No.3 Team\n" +
		"Ellipsed Diamond is finish point, Circle is trap,\nNail-like Diamond is key for opening door.\n" +
		"And last, Metal-colored Wooden Plank is spinner.\n" +
		"Circle trap and wooden plank spinner are stronger than ball!\nWe're must avoid them!\n\n" +
		"Enjoy the game! and Clear the game!", guiDescriptionStyle);
	if(GUI.Button(Rect(0, Screen.height - 50, Screen.width, 50), "Start Game! >", guiButtonStyle)) {
		Application.LoadLevel("MapInitial");
	}
}