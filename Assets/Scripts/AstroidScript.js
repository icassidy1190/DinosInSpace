#pragma strict

var Astroid : Transform;

function OnCollisionEnter2D(colInfo : Collision2D){
	if (colInfo.collider.tag == "Laser"){
		GameManager.Score(Astroid.name);
		Destroy(gameObject);
	}
}