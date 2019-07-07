#pragma strict

public var audioClip1 : AudioClip;
public var audioClip2 : AudioClip;
public var audioClip3 : AudioClip;
public var audioClip4 : AudioClip;
public var audioClip5 : AudioClip;
public var audioClip6 : AudioClip;
public var audioClip7 : AudioClip;
public var audioClip8 : AudioClip;
public var audioClip9 : AudioClip;
public var audioClip10 : AudioClip;
private var soundSource : AudioSource;
private var previousMusicNum : int;

function Awake() {
	DontDestroyOnLoad(gameObject);
	DontDestroyOnLoad(GameObject.Find("CAMDeepView"));
	soundSource = gameObject.AddComponent(AudioSource);
}

function Start () {
	var musicNum : int = Random.Range(0, 10);
	previousMusicNum = musicNum;
	if(musicNum == 0) soundSource.clip = audioClip1;
	else if(musicNum == 1) soundSource.clip = audioClip2;
	else if(musicNum == 2) soundSource.clip = audioClip3;
	else if(musicNum == 3) soundSource.clip = audioClip4;
	else if(musicNum == 4) soundSource.clip = audioClip5;
	else if(musicNum == 5) soundSource.clip = audioClip6;
	else if(musicNum == 6) soundSource.clip = audioClip7;
	else if(musicNum == 7) soundSource.clip = audioClip8;
	else if(musicNum == 8) soundSource.clip = audioClip9;
	else if(musicNum == 9) soundSource.clip = audioClip10;
	
	soundSource.Play();
	Invoke("PlayNextTrack", soundSource.clip.length + 2);
}

function PlayNextTrack () {
	soundSource.Stop();
	
	var musicNum : int = Random.Range(0, 10);
	
	if(musicNum != previousMusicNum) {
		if(musicNum == 0) soundSource.clip = audioClip1;
		else if(musicNum == 1) soundSource.clip = audioClip2;
		else if(musicNum == 2) soundSource.clip = audioClip3;
		else if(musicNum == 3) soundSource.clip = audioClip4;
		else if(musicNum == 4) soundSource.clip = audioClip5;
		else if(musicNum == 5) soundSource.clip = audioClip6;
		else if(musicNum == 6) soundSource.clip = audioClip7;
		else if(musicNum == 7) soundSource.clip = audioClip8;
		else if(musicNum == 8) soundSource.clip = audioClip9;
		else if(musicNum == 9) soundSource.clip = audioClip10;
		previousMusicNum = musicNum;
	} else {
		Invoke("PlayNextTrack", 2);
	}
	
	soundSource.Play();
	Invoke("PlayNextTrack", soundSource.clip.length + 2);
}