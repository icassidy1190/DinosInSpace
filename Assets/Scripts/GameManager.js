#pragma strict

static var playerScore : int = 0;
var Astroid : Transform;
var textLayout : GUISkin;


static function Score (astroidName : String){
	if (astroidName == "rockBig"){
		playerScore += 1;
	} else if (astroidName == "rockBig2"){
		playerScore += 1;
	} else if (astroidName == "rockMed"){
		playerScore += 2;
	} else if (astroidName == "rockSmall"){
		playerScore += 3;
	} else if (astroidName == "rockSmall2"){
		playerScore += 3;
	}
}

function OnGUI() {
	GUI.skin = textLayout;
	GUI.Label(new Rect(Screen.width / 2, 20, 100, 100), "Score: " + playerScore);
}