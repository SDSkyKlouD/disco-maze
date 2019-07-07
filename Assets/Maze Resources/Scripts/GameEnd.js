#pragma strict

public var guiTitleStyle : GUIStyle;
public var guiButtonStyle : GUIStyle;
public var guiDescriptionStyle : GUIStyle;

function OnGUI () {
	GUI.Label(Rect(0, Screen.height / 3, Screen.width, 100), "GAME CLEAR!!!", guiTitleStyle);
	GUI.Label(Rect(0, Screen.height / 3 + Screen.height / 3, Screen.width, 100), "You'd clear this game!\nRestart or Exit?", guiDescriptionStyle);
	if(GUI.Button(Rect(0, Screen.height - 50, Screen.width / 2, 50), "Restart Game!", guiButtonStyle)) {
		Destroy(GameObject.Find("CAMMain"));
		Destroy(GameObject.Find("CAMDeepView"));
		Application.LoadLevel("MapStart");
	} else if(GUI.Button(Rect(Screen.width / 2, Screen.height - 50, Screen.width / 2, 50), "Exit Game!", guiButtonStyle)) {
		Application.Quit();
	}
}