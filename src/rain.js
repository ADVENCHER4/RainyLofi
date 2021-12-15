import {Drop} from "./drop.js";

export class Rain{
    constructor(){
        this.drops = [];
    }
    deleteDrop(dropIndex){
        this.drops.splice(dropIndex, 1);
    }
    createDrop(){
        var x = Math.ceil(Math.random() * window.innerWidth);
        var speed = Math.ceil(Math.random() * 5 + 5);
        var length = Math.ceil(Math.random()* 20 + 20);
        this.drops.push(new Drop(x, speed, length));
    }
}