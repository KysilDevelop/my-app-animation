import { Component, AfterViewInit, Input} from '@angular/core';
import { TimelineMax,  Linear } from 'gsap';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: [ './buttons.component.scss' ]
})

export class ButtonsComponent implements AfterViewInit {
    constructor() { }

    loadBtn() {
        const t4 = new TimelineMax();
        const quickCv = document.getElementById('quickCV');
        const vacancies = document.getElementById('vacancies');
        t4.from(quickCv, 2, {transformOrigin: 'right', scaleX: 0})
            .to(quickCv, 2, {transformOrigin: 'left', scaleX: 1}, 'reveal');
            /*.from(quickCv, 1, {scaleX: 0, transformOrigin: 'left'})
            .to(quickCv, 1, {scaleX: 1, transformOrigin: 'right', display: 'inline-block'}, 'reveal')
            .from(vacancies, 1, {scaleX: 0, transformOrigin: 'left'})
            .to(vacancies, 1, {scaleX: 0, transformOrigin: 'right', display: 'inline-block'}, 'reveal');*/
    }

    ngAfterViewInit() {}
}
