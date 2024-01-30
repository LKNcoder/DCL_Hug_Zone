# SDK7 Template scene

shout out to DOGMAN and his Auto Dance Area for SDK7
he wrote the original code and I clumsily adapted it

## How to add A HUG ZONE to your project:

1. edit your scene.json file to include 

	"requiredPermissions": [
		"ALLOW_TO_TRIGGER_AVATAR_EMOTE",
		"ALLOW_TO_MOVE_PLAYER_INSIDE_SCENE" ]

2. copy the emotes folder which contains the HugEmote

3. copy the models folder which contains hugbox.glb

4. copy the autoHug.ts file into your /src folder

5. edit your index.ts to include the stuff mine has, like
	
	import { createHugArea } from "./autoHug";


	export function main() {

 		 createHugArea(Vector3.create(7, 1, 7),Vector3.create(9, 0, 9)) }


//here the coordinates (7, 1, 7) set the location of the middle of the hug zone.
//the other coordinates (9, 0, 9) set the size which you should not change unless you also resize the glb to match. 
// also change the coordinates of Transform.create(hugZone, {position: Vector3.create(7, 0, 7),}) to the same location

6. make sure you are also importing { GltfContainer, Transform, engine } from "@dcl/sdk/ecs"; 


7. run npm i decentraland-ecs@latest to update everything

8. cross your fingers and try npm run start to see if it works!  



## 

<3

