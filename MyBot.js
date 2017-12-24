console.log('bot_name');
var fs = require('fs');
var readline = require('readline');
var playerId=0;
var turn = 0;
var ogText = "";
var players;
var splitposition = 0;
var playerArray=[];
var arrayPos = 0;
var TEST = "";
var planets = [];
var room_width;
var room_height;
var res = [];
var playerArray = []

function chunk_jibbers(chunk){
	var input = chunk;
	res = input.split(" ");
	if(turn == 0)
	{

	}
	else if(turn == 1)
	{

	}
	else 
	{
		
	}

	turn++;
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function print(newText) {
	ogText += (newText + "\n");
  fs.writeFile("./botOutPut.txt", ogText, function(err) {});
}

rl.on('line', function(chunk){
	chunk_jibbers(chunk);
});

/* --------- to do list --------

*/

/* --------- help file --------

The initialization message consists of 3 ints on 2 lines, like so:

1
312 208
These are your player ID (between 0 and 3) and the world width and height.

This is followed by the initial state of the world on a single line (split up below for illustration). No text is included, those are illustrative comments.

2           -- Player count

0 3         -- Player 0 has 3 ships; here they are:

0  99.1403  98.0343 255 0.0000 0.0000 0 0 0 0
1 100.5614  86.3555 255 0.0000 0.0000 0 0 0 0
2  99.6768 100.5296 255 0.0000 0.0000 0 0 0 0

1 3         -- Player 1 has 3 ships; here they are:

3 188.0907 107.6403 255 0.0000 0.0000 1 7 5 0
4 185.1240 106.4292 255 0.0000 0.0000 0 0 0 0
5 189.9773 109.3196 255 0.0000 0.0000 1 7 4 0

9          -- 9 planets

0  142.2093  98.2093 1713 6.7190 3 0  967 0 0 0
1  121.7907  98.2093 1713 6.7190 3 0  967 0 0 0
2  121.7907  77.7907 1713 6.7190 3 0  967 0 0 0
3  142.2093  77.7907 1713 6.7190 3 0  967 0 0 0
4   31.9692 101.9547 1373 5.3870 2 0  775 0 0 0
5   79.4373  61.4432 1373 5.3870 2 0  775 0 0 0
6  232.0308  74.0453 1373 5.3870 2 0  775 0 0 0
7  184.5627 114.5568 1373 5.3870 2 0  775 1 1 2 5 3   -- Has docked ships
8  171.7497  18.2646 1986 7.7885 3 0 1121 0 0 0
This is the end of the line. Each turn (including turn 0) the engine sends the world in this format (but does NOT send the three-int initialization message). Note that, on turn 0, the world will be identical to the world sent in the initial message (since nothing has happened yet).

Each ship has the following information. There are 3 deprecated fields which you should ignore. They are left in the protocol for compatibility with older bots.

--Ship ID (unique throughout the whole game).
X
Y
Health
[deprecated float]
[deprecated float]
DockedStatus            -- 0: undocked, 1: docking, 2: docked, 3: undocking
DockedPlanet            -- Planet ID. If not docked, this will be 0.
DockingProgress
[deprecated int]


--Each planet has the following information.

Planet ID
X
Y
Health
Radius
DockingSpots
CurrentProduction
[deprecated int]
Owned                   -- Boolean, but represented as 0 or 1
Owner                   -- Player ID. If not owned, this will be 0.
DockedShips             -- Count of how many ship ID ints will follow.
[zero or more ints representing docked ship IDs]
Note that 0 is sent as a default value for Ship.DockedPlanet and Planet.Owner, even though there is a planet 0 and a player 0. Thus, you must also check the Ship.DockedStatus or Planet.Owned fields. When appropriate, I recommend interally setting these "wrong" values to -1 as soon as you see them.



*/
