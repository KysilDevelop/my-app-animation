import { Component, AfterViewInit } from '@angular/core';
import { TimelineMax,  Linear } from 'gsap';


@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: [ './title.component.scss' ]
})

export class TitleComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit() {
        const t2 = new TimelineMax();
        const text1 = document.getElementById('text1');
        const text2 = document.getElementById('text2');
        const text3 = document.getElementById('text3');
        t2.to([text1, text2], 0.5, {alpha: 1, clipPath: 'inset(0px 0px 0% 1px)', ease: Linear.easeNone, yoyo: false})
            .to(text3, 0.5, {alpha: 1, clipPath: 'inset(0px 0px 0% 1px)', ease: Linear.easeNone, yoyo: false});
    }
}
