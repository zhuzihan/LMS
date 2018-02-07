import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
// import {MatTableModule} from '@angular/material'

@Component({
    selector: 'man-equip-para',
    templateUrl: '../../view/man-equip-para.component.html',
    styleUrls: ['../../css/man-equip-para.component.css']
})
export class ManEquipParaComponent {
  displayedColumns = [ 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  name: string;
  // position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {name: '无水碳酸钠', weight: 1.0079, symbol: 'H'},
  {name: '邻苯二甲酸氢钾', weight: 4.0026, symbol: 'He'},
  {name: '氢氧化钠', weight: 6.941, symbol: 'Li'},
  {name: '重铬酸钾', weight: 9.0122, symbol: 'Be'},
  {name: '硫代硫酸钠', weight: 10.811, symbol: 'B'},
  {name: '无水硫代硫酸钠', weight: 12.0107, symbol: 'C'},
  {name: '硫酸亚铁', weight: 14.0067, symbol: 'N'},
  {name: '硼砂', weight: 15.9994, symbol: 'O'},
  {name: '磷酸二氢钾', weight: 18.9984, symbol: 'F'},
  {name: '氯化钾', weight: 20.1797, symbol: 'Ne'},
  {name: '氯化钾', weight: 22.9897, symbol: 'Na'},
  // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
