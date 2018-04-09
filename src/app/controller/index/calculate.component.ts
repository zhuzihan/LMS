import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'calculate',
    templateUrl: '../../view/index/calculate.component.html',
    styleUrls: ['../../css/calculate.component.css']
})
export class CalculateComponent implements OnInit {
    showFiller = false;
    constructor() { }

    ngOnInit(): void {
    }
}
