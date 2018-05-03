import { Component, HostListener, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { trigger, style, transition, animate, group } from '@angular/animations';
import { TimelineMax, TweenLite, TimelineLite } from 'gsap';

@Component({
    selector: 'app-masks',
    templateUrl: './masks.component.html',
    styleUrls: [ './masks.component.scss' ]
})

export class MasksComponent implements AfterViewInit, OnInit {
    constructor() {  }
    height: number;
    width: number;

    maskOneX: number;
    maskTwoX: number;
    maskThreeX: number;

    maskOneY: number;
    maskTwoY: number;
    maskThreeY: number;

    firstMask: number;
    secondMask: number;
    thirdMask: number;
    @HostListener('document:mousemove', ['$event'])

    ngAfterViewInit() {
       /* const v1 = document.getElementById('video1');
        const v2 = document.getElementById('video2');
        const v3 = document.getElementById('video3');
        const myClip = document.getElementById('masks');
        this.maskOneX = this.width;
        this.maskTwoX = this.width;
        this.maskThreeX = this.width;
        const a1 = new TimelineMax();
        a1.staggerTo(v1, 2, {x:'100'}, 2);*/
        console.log('onInit View');
    }
    ngOnInit() {
        this.showVideo();

    }
    moveCircle(e) {
        const v1 = document.getElementById('video1');
        const v2 = document.getElementById('video2');
        const v3 = document.getElementById('video3');
        this.maskOneX = e.pageX - (this.firstMask / 2);
        this.maskTwoX = e.pageX - (this.secondMask / 2);
        this.maskThreeX = e.pageX - (this.thirdMask /2);

        if (this.maskOneX > 0) {

        } else {
            this.maskOneX = 0;
            this.maskTwoX = 0;
            this.maskThreeX = 0;
        }

        setTimeout(() => {
            TweenLite.to(v1, 2, {
                css: {
                    x: this.maskOneX,
                    // float: 'none',
                    // right: '0'
                }
            });
            TweenLite.to(v2, 3, {
                css: {
                    x: this.maskTwoX,
                    // float: 'none',
                    // right: '0'
                }
            });
            TweenLite.to(v3, 4, {
                css: {
                    x: this.maskThreeX,
                    float: 'none',
                    right: '0'
                }});
        }, 4000);
    }
    /*myHandler() {
        this.nextVideo();
    }*/
    showVideo() {
        this.height = window.innerHeight / 3;
        this.width = window.innerWidth;

        this.maskOneY = 0;
        this.maskTwoY = this.height + 10;
        this.maskThreeY = (this.height * 2) + 30;

        this.firstMask = this.width / 4;
        this.secondMask = this.width / 2;
        this.thirdMask = this.firstMask + this.secondMask;

        const v1 = document.getElementById('video1');
        const v2 = document.getElementById('video2');
        const v3 = document.getElementById('video3');

        TweenLite.from(v1, 1, {x: this.width});
        TweenLite.to(v1, 2, {x: this.width - this.firstMask});
        TweenLite.from(v2, 1, {x: this.width});
        TweenLite.to(v2, 2, {x: this.width - this.secondMask});
        TweenLite.from(v3, 1, {x: this.width});
        TweenLite.to(v3, 2, {x: this.width - this.thirdMask});
          setTimeout(() => {
              this.nextVideo();
              // e.preventDefault();
        }, 10000);
    }
    nextVideo() {
        const v1 = document.getElementById('video1');
        const v2 = document.getElementById('video2');
        const v3 = document.getElementById('video3');
        TweenLite.to(v1, 2, {x: -this.firstMask});
        TweenLite.to(v2, 3, {x: -this.secondMask});
        TweenLite.to(v3, 4, {x: -this.thirdMask});
        // e.preventDefault();

          setTimeout(() => {
            this.showVideo();
        }, 4000);
        // e.stopPropagation();
    }
    onMouseMove(e) {
        this.moveCircle(e);
    }
}
