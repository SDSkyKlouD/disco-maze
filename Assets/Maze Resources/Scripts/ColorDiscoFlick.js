#pragma strict

function Start() {
	StartCoroutine("CoStart");
}

function CoStart() : IEnumerator {
	while(true) yield CoUpdate();
}

function CoUpdate () : IEnumerator {
	var randomizeColor : Color;
	randomizeColor.r = Random.Range(0.0f, 1.0f);
	randomizeColor.g = Random.Range(0.0f, 1.0f);
	randomizeColor.b = Random.Range(0.0f, 1.0f);
	renderer.material.color = randomizeColor;
	yield WaitForSeconds(0.25f);
}