#pragma strict

var speed : float = 5;

function Update () {
	transform.Translate(Vector3(speed * Time.deltaTime,0,0));
	
	if (transform.position.x >= 29){
		Destroy(gameObject);
	}
}

function OnCollisionEnter2D(colInfo : Collision2D){
	if (colInfo.collider.tag == "Astroid"){
		Destroy(gameObject);
	}
}