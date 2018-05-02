import { Component, HostListener, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { TimelineMax, TweenLite, TimelineLite } from 'gsap';

@Component({
    selector: 'app-masks',
    templateUrl: './masks.component.html',
    styleUrls: [ './masks.component.scss' ]
})

export class MasksComponent implements AfterViewInit {
    constructor() {  }
    @HostListener('document:mousemove', ['$event'])
    startAnimation() {
        const t4 = new TimelineLite();
        const container = document.getElementById('content');
        const video = document.getElementById('video');
        const v1 = document.getElementById('video1');
        const v2 = document.getElementById('video2');
        const v3 = document.getElementById('video3');
        // this.startAnimation(t4, container, v1, v2, v3);
        // t4.staggerFrom([v3, v2, v1], 3, {right: -1300}, 0.3, 'stagger').repeatDelay(15).repeat(-1);
        t4.staggerFrom([v3, v2, v1], 3, {right: -1300}, 0.3, 'stagger')
            .to(video, 0, {
                top: 0,
                bottom: 0,
                right: 0,
                display: 'block',
                width: '100%',
                height: '100%'
            });
    }
    loadMask() {
        /*const t4 = new TimelineMax();
        const container = document.getElementById('content');
        const v1 = document.getElementById('video1');
        const v2 = document.getElementById('video2');
        const v3 = document.getElementById('video3');
        this.startAnimation(t4, container, v1, v2, v3);
        t4.staggerFrom([v3, v2, v1], 3, {right: -1300}, 0.3, 'stagger').repeatDelay(15).repeat(-1);*/
    }
    ngAfterViewInit() {
       /* const t4 = new TimelineMax();
        const video = document.getElementById('video');
        t4.to(video, 1, {
            top: 0,
            bottom: 0,
            right: 0,
            display: 'block',
            width: '100%',
            height: '100%'
        });*/
        this.startAnimation();
    }
    moveCircle(e) {
        const v1 = document.getElementById('video1');
        const v2 = document.getElementById('video2');
        const v3 = document.getElementById('video3');
        TweenLite.to(v1, 4, {
            css: {
                left: e.pageX,
                float: 'none',
                right: 'auto'
            }
        });
        TweenLite.to(v2, 8, {
            css: {
                left: e.pageX,
                float: 'none',
                right: 'auto'
            }
        });
        TweenLite.to(v3, 16, {
            css: {
                left: e.pageX,
                float: 'none',
                right: 'auto'
            }
        });
    }
    onMouseMove(e) {
        this.moveCircle(e);
    }
}
