import { Component, AfterViewInit, Input} from '@angular/core';
import { TimelineMax,  Linear } from 'gsap';

@Component({
    selector: 'app-chosen',
    templateUrl: './chosen.component.html',
    styleUrls: [ './chosen.component.scss' ]
})

export class ChosenComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const t5 = new TimelineMax();
        const chosenBtn = document.getElementById('chosenBtn');
        const cover = document.getElementById('coverChose');
        t5.from(chosenBtn, 1, {transformOrigin: 'right', scaleX: 0, opacity: 1})
            .to(chosenBtn, 1, {transformOrigin: 'left', scaleX: 1}, 'reveal')
            // .from(cover, 1, {scaleX: 1, transformOrigin: 'right'})
            .to(cover, 1, {scaleX: 0, transformOrigin: 'left'}, 'reveal')
            .from(chosenBtn, 1, {transformOrigin: 'left', display: 'block'})
            .to(chosenBtn, 1, {transformOrigin: 'left'}, 'reveal');
    }
}
