import {Component, AfterViewInit, ViewEncapsulation} from '@angular/core';
import { TimelineMax,  Linear, TweenLite } from 'gsap';


@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: [ './square.component.scss' ],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'square'
    }
})

export class SquareComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const t2 = new TimelineMax();
        const greyBlock = document.getElementById('greyBlock');
        t2.to(greyBlock, 2, {
            top: 0,
            left: '20%',
            right: '20%',
            width: '60%',
            ease: Linear.easeNone
        });
    }
    moveCircle(e) {
        const square = document.getElementById('square');
        TweenLite.to(square, 12, {
            css: {
                left: e.pageX,
                float: 'none',
                right: 'auto'
            }
        });
    }
}
