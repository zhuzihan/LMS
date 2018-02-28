import { Component, OnInit, Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ExpParameterService } from '../../service/exp-parameter.service';
// import {MatTableModule} from '@angular/material'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'man-equip-para-preview',
  templateUrl: '../../view/man-equip-para-preview.component.html',
  styleUrls: ['../../css/man-equip-para.component.css'],
  providers: [ExpParameterService]
})
export class ManEquipParaPreviewComponent {
    // expParameterData: Object;
    @Input() expParameter: Array<Object> = [];
}
