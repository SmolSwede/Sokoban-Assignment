const playArea = document.getElementById("playArea");
const winText = document.getElementById("winText");
document.body.addEventListener('keydown', KeyPress);

var Player = {x: -1, y: -1};
var tileType;
var goalPos = " ";
var goalList = [];
var pointsList = [0,0,0,0,0,0];
var points = 0;

var arrow_keys_handler = function(e) {
  switch(e.code){
      case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
         e.preventDefault(); break;
      default: break;
  }
};

window.addEventListener("keydown", arrow_keys_handler, false);

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal",
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal",
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/

var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: [
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["B"],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      ["B"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      ["B"],
      [" "],
      ["B"],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      ["W"],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
    ],
    [
      ["W"],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      ["G"],
      ["G"],
      ["W"],
    ],
    [
      ["W"],
      [" "],
      ["B"],
      [" "],
      [" "],
      ["B"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      ["G"],
      ["G"],
      ["W"],
    ],
    [
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      ["W"],
      ["P"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      ["G"],
      ["G"],
      ["W"],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      ["W"],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
    [
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
      [" "],
    ],
  ],
};

function RenderMap() 
{
	for(let col=0; col < tileMap01.height; col++)
	{
		for(let row=0; row < tileMap01.width; row++)
		{
			var element = document.createElement("div");
			element.classList.add("block");
			if(tileMap01.mapGrid[col][row][0] !== " ")
			{
				tileType = tileMap01.mapGrid[col][row][0];
				if(tileType === "P")
				{
					Player.x = col;
					Player.y = row;
				}
        if(tileType === "G")
        {
          goalList.push("x" + row +"y" + col)
        }
				element.classList.add(tileType);
			}
			element.id = "x" + row + "y" + col;
			playArea.appendChild(element);
		}
	}
}

function KeyPress(e)
{
  console.log(points)
  console.log(goalPos)
  console.log(goalList)
  switch(e.key)
  {
    case 'ArrowUp':
      MovePlayer(0, -1)
    break;

    case 'ArrowDown':
      MovePlayer(0, 1)
    break;

    case 'ArrowLeft':
      MovePlayer(-1, 0)
    break;

    case 'ArrowRight':
      MovePlayer(1, 0)
    break;

    default:
    break;
  }
}

function MovePlayer(x, y)
{
  WinCondition();
  var newPlayerX = Player.x + x;
  var newPlayerY = Player.y + y;
  var newBoxX = Player.x + (x*2);
  var newBoxY = Player.y + (y*2);
  var playerElement = document.getElementById("x" + Player.x + "y" + Player.y);
  var destination = document.getElementById("x" + newPlayerX + "y" + newPlayerY);
  var boxDestination = document.getElementById("x" + newBoxX + "y" + newBoxY);

  if(!destination.classList.contains("W") && !destination.classList.contains("B"))
  {

    playerElement.classList.remove("P");
    destination.classList.add("P");
    Player.x = newPlayerX;
    Player.y = newPlayerY;
  }
  else if(destination.classList.contains("B"))
  {
    if(!boxDestination.classList.contains("W") && !boxDestination.classList.contains("B"))
    {
        playerElement.classList.remove("P");
        destination.classList.add("P");
        destination.classList.remove("B");
        Player.x = newPlayerX;
        Player.y = newPlayerY;
        boxDestination.classList.add("B");
    }
  }
}

function WinCondition()
{
  for(let i = 0; i < goalList.length; i++)
  {
    goalPos = document.getElementById(goalList[i]);
    if(goalPos.classList.contains("B"))
    {
      pointsList[i] = 1;
    }
    else
    {
      pointsList[i] = 0;
    }
  }
  points = pointsList.reduce((a, b) => a + b, 0);
  if(points >= 6)
  {
    playArea.classList.add("Win")
    winText.classList.remove("hideText")
  }
}

RenderMap();
