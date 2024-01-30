import * as utils from '@dcl-sdk/utils'
import { engine, Transform, MeshRenderer, VisibilityComponent } from '@dcl/sdk/ecs';
import { Vector3 } from '@dcl/sdk/math';
import { triggerSceneEmote } from '~system/RestrictedActions'
// emotes array
const emotesToTrigger = [
    'emotes/HugEmote.glb'
        // ...more emotes
];



let currentEmoteIndex = 0; // Initialize the current emote index
let isDancing = false; // Flag to track if the player is dancing


export function createHugArea(position: Vector3, scale: Vector3) {




    const hugbox = engine.addEntity()
    Transform.create(hugbox, {
        position: position,
        scale: scale
    })

    




///REMEMBER TO MAKE THE TRIGGER POSITION AND SCALE = THE TRANSFORM POSITION AND SCALE!!
    utils.triggers.addTrigger(hugbox, 1, 1, [{ type: 'box', scale: scale, position: Vector3.create(0, 0, 0) }], function (otherEntity) {
        if (!isDancing) {
            isDancing = true;
            currentEmoteIndex = 0;
            triggerNextEmote()
            console.log('dancing');
            
        }
    }, function (otherEntity) {
        if (isDancing) {
            isDancing = false;
            console.log('noDance');
            

        }
    })
}

export async function triggerNextEmote() {
    if (isDancing) {
        const emote = emotesToTrigger[currentEmoteIndex];
        await triggerSceneEmote({ src: emote, loop: true });
  
        // Move to the next emote or loop back to the beginning
    currentEmoteIndex = (currentEmoteIndex + 1) % emotesToTrigger.length;

    // Trigger the next emote after a delay
    utils.timers.setTimeout(() => {
        triggerNextEmote();
    }, 2000); // delay of 2 second
}
}
