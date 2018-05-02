import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class AnimationService {
    load = [
        {menu: false}
    ];
    constructor() { }

    loadAnimation(elem) {
        for ( let i = 0; i < this.load.length; i++) {
            if (this.load[i].hasOwnProperty(elem)) {
                this.load[i][elem] = true;
            }
        }
        console.log('==elem==', elem, '22', this.load);
        return this.load[elem];
    }
}
