import {Component, OnInit, SimpleChanges, Input, ViewEncapsulation} from '@angular/core';
import { AnimationService } from 'app/services/animation.service';
import { TimelineMax } from 'gsap';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})

export class MenuComponent implements OnInit {
    @Input() loadMenus: AnimationService;
    constructor(
        private serviceControl: AnimationService
    ) { }
    loadMenu() {
        const t3 = new TimelineMax();
        const menu = document.getElementById('menu');
        const cover = document.getElementById('cover');
        t3.from(menu, 1, {transformOrigin: 'right', scaleX: 0, opacity: 1})
            .to(menu, 1, {transformOrigin: 'left', scaleX: 1}, 'reveal')
            // .from(cover, 2, {scaleX: 1, transformOrigin: 'right'})
            .to(cover, 2, {scaleX: 0, transformOrigin: 'left'}, 'reveal')
            .from(menu, 1, {transformOrigin: 'left', display: 'block'})
            .to(menu, 1, {transformOrigin: 'left'}, 'reveal');
    }
    ngOnInit() {
        this.loadMenu();
        // this.loadMenu();
    }

}
