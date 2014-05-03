#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var fireLazer : KeyCode;


var Lazer : Transform;
var Player : Transform;

var fireRate : float = .5;
var nextShot : float = 0.0;

var speed : float = 10;

function Update ()
{
	if (Input.GetKey(moveUp)){
		rigidbody2D.velocity.y = speed;
	}
	else if (Input.GetKey(moveDown)){
		rigidbody2D.velocity.y = speed * -1;
	}
	else if (Input.GetKey(moveLeft)){
		rigidbody2D.velocity.x = speed * -1;
	}
	else if (Input.GetKey(moveRight)){
		rigidbody2D.velocity.x = speed;
	} else {
		rigidbody2D.velocity.x = 0;
		rigidbody2D.velocity.y = 0;
	}
	
	if (Input.GetAxis("fireLazer")) {
		if (Time.time >= nextShot) {
			Instantiate(Lazer, Vector3(Player.position.x + 1, Player.position.y, 0), Quaternion.identity);	
			nextShot = Time.time + fireRate;
		}
	}
	
	var horizontal = Input.GetAxis("Horizontal") * speed * Time.deltaTime;
    var vertical = Input.GetAxis("Vertical") * speed * Time.deltaTime;
 
    var pos : Vector3 = Player.position;
    pos.x = Mathf.Clamp(pos.x + horizontal, -2, 24.7);
    pos.y = Mathf.Clamp(pos.y + vertical, -1.4, 1.4);
    Player.position = pos;
}