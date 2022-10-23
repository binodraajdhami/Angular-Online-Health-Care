import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public logoImage: string;
    constructor() {
        this.logoImage = './../../../../assets/images/logo.png';
    }

    ngOnInit(): void {
    }

}
