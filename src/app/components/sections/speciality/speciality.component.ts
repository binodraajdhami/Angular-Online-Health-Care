import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-speciality',
    templateUrl: './speciality.component.html',
    styleUrls: ['./speciality.component.css']
})
export class SpecialityComponent implements OnInit {

    public specialitySlider: OwlOptions = {
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true
    }

    constructor() { }

    ngOnInit(): void {
    }

}
