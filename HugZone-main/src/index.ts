import { Vector3 } from "@dcl/sdk/math";
import { GltfContainer, Transform, engine } from "@dcl/sdk/ecs";
import { createHugArea } from "./autoHug";


export function main() {

  createHugArea(Vector3.create(7, 1, 7),Vector3.create(9, 0, 9))
//change these 7s to other numbers to move this where you want it

  const hugZone = engine.addEntity()
  Transform.create(hugZone, {position: Vector3.create(7, 0, 7),})
  //same thing here, change these 7s to match the coordinates where you want it
  
  GltfContainer.create(hugZone, {src: 'models/hugZone.glb'

})
}


