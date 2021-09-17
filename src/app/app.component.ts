import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from './sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public localData: any = athletesData;

  ngOnInit(): void {
    this.localData = athletesData;
  }

  title = 'ignite-ui';
  @ViewChild('myGrid', { read: IgxGridComponent })
  public grid!: IgxGridComponent;
}
