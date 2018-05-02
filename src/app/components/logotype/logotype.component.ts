import { Component, AfterViewInit, ViewChild, ViewEncapsulation, ElementRef, Input, HostListener } from '@angular/core';
import { AnimationService } from 'app/services/animation.service';
import { MenuComponent } from 'app/components/menu/menu.component';
import { ButtonsComponent } from 'app/components/buttons/buttons.component';
import { MasksComponent } from 'app/components/masks/masks.component';
import { SquareComponent } from 'app/components/square/square.component';
import { TimelineMax, Linear, Expo } from 'gsap';


@Component({
    selector: 'app-logotype',
    templateUrl: './logotype.component.html',
    styleUrls: [ './logotype.component.scss' ],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'logotype'
    }
})

export class LogotypeComponent implements AfterViewInit {
    @Input() loadMenu: MenuComponent;
    @Input() loadBtn: ButtonsComponent;
    @Input() loadMask: MasksComponent;
    @Input() loadBlock: SquareComponent;
    constructor(private serviceControl: AnimationService) { }
    ngAfterViewInit() {
        const t1 = new TimelineMax();
        const albertAnim = document.getElementById('albertAnim');
        const cliffAnim = document.getElementById('cliffAnim');
        const elemBottomOneAnim = document.getElementById('elemBottomOneAnim');
        const elemBottomTwoAnim = document.getElementById('elemBottomTwoAnim');
        const elemMiddleAnim = document.getElementById('elemMiddleAnim');
        const elemTopAnim = document.getElementById('elemTopAnim');
        const londonAnim = document.getElementById('londonAnim');
        const fillLineBot = elemBottomOneAnim.children[1];
        const fillLineTop = elemTopAnim.children[1];
        t1.set(albertAnim, {transformOrigin: '100% 100%', yPercent: 1500})
            .to(albertAnim, 0.5, {transformOrigin: '100% 0%', yPercent: 0, display: 'block'})
            .set([cliffAnim], {yPercent: 200, transformOrigin: '50% bottom'})
            .to(cliffAnim, 0.3, {yPercent: 0, transformOrigin: '0% 0%', display: 'block'})
            .set([elemBottomOneAnim], {xPercent: 100, transformOrigin: '0 0'})
            .to(elemBottomOneAnim, 0.3, {xPercent: 0, transformOrigin: '0% 0%', display: 'block'})
            .set([elemBottomTwoAnim], {xPercent: 50, transformOrigin: '0 0'})
            .to(elemBottomTwoAnim, 0.3, {xPercent: 0, transformOrigin: '0% 0%', display: 'block'})
            .set([elemMiddleAnim], {xPercent: -50, transformOrigin: '0 0'})
            .to(elemMiddleAnim, 0.3, {xPercent: 0, transformOrigin: '0% 0%', display: 'block'})
            .set([elemTopAnim], {xPercent: -50, transformOrigin: '0 0'})
            .to(elemTopAnim, 0.3, {xPercent: 0, transformOrigin: '0% 0%', display: 'block'})
            .set([londonAnim], {opacity: 0, transformOrigin: '0 0'})
            .to(londonAnim, 0.3, {opacity: 1, transformOrigin: '0% 0%', display: 'block'})
            .set([fillLineBot], {fill: '#C8102E', transformOrigin: '0 0'})
            .to(fillLineBot, 0.3, {fill: '#212721', transformOrigin: '0% 0%', display: 'block', yoyo: true})
            .to(fillLineTop, 0.3, {fill: '#212721', transformOrigin: '0% 0%', display: 'block', yoyo: true});
    }
}
