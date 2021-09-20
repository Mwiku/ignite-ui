import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from '../sample-data';

@Component({
  selector: 'app-normal-grid',
  templateUrl: './normal-grid.component.html',
  styleUrls: ['./normal-grid.component.css']
})
export class NormalGridComponent implements OnInit {
  title = 'ignite-ui';
  @ViewChild('myGrid', { read: IgxGridComponent })
  
  public grid!: IgxGridComponent;
  public localData: any = athletesData;
  constructor() { }

  ngOnInit(): void {
    this.localData = athletesData;
  }

}
