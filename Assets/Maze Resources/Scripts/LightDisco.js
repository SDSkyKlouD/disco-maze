#pragma strict

function Start() {
	StartCoroutine("CoStart");
}

function CoStart() : IEnumerator {
	while(true)
		yield CoUpdate();
}

function CoUpdate () : IEnumerator {
	var randomizeColor : Color;
	randomizeColor.r = Random.Range(0.0f, 1.0f);
	randomizeColor.g = Random.Range(0.0f, 1.0f);
	randomizeColor.b = Random.Range(0.0f, 1.0f);
	light.color = randomizeColor;
	
	var randomizeDegree : Vector3;
	randomizeDegree.x = Random.Range(50, 120);
	randomizeDegree.y = Random.Range(50, 120);
	light.transform.rotation = Quaternion.Euler(randomizeDegree);
	yield WaitForSeconds(0.25f);
}