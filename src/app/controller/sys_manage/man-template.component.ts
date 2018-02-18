import {Component,OnInit} from '@angular/core'

@Component({
    selector: 'man-template',
    templateUrl: '../../view/man-template.component.html',
    // styleUrls: ['../../view/preview.component.css']
})
export class ManTemplateComponent implements OnInit{
    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
      
    constructor() { }
  
    ngOnInit(): void {
    }
}