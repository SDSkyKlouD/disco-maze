#pragma strict

public var countTime : int = 120;
public var guiStyle : GUIStyle;
public var guiBoldStyle : GUIStyle;

function Start () {
	StartCoroutine("CoStart");
}

function CoStart () : IEnumerator {
	while(true) yield CountDown();
}

function CountDown () : IEnumerator {
	if(--countTime == 0) {
		yield WaitForSeconds(3.0f);
		Destroy(GameObject.Find("CAMMain"));
		Destroy(GameObject.Find("CAMDeepView"));
		Application.LoadLevel("MapInitial");
		CancelInvoke("CountDown");
	}
	
	yield WaitForSeconds(1.0f);
}

function OnGUI () {
		GUILayout.Label("Reaming Time : " + countTime.ToString(), guiStyle);
		GUILayout.Label("Death Count : " + Variables.deathCount.ToString(), guiStyle);
		if(countTime == 0) {
			GUILayout.Label(" ");
			GUI.Label(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 100, 100), "Time up! reset game...", guiBoldStyle);
		}
}