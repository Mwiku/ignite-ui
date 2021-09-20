import { Component, OnInit } from '@angular/core';
import { IColumnExportingEventArgs, IgxCsvExporterService, IgxExcelExporterService } from 'igniteui-angular';
import { EMPLOYEE_DATA } from './tree-grid-sample-data';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  public localData!: any[];
    public selectionMode = 'multiple';
    constructor() {
        const skipColumnExport = (eventArgs: IColumnExportingEventArgs) => {
            eventArgs.cancel = eventArgs.header === 'Performance';
        };

        // this.excelExporter.columnExporting.subscribe(skipColumnExport);
        // this.csvExporter.columnExporting.subscribe(skipColumnExport);
    }

    public ngOnInit() {
        const employees = EMPLOYEE_DATA;
        for (const employee of employees) {
            this.getPerformance(employee);
        }
        this.localData = employees;
    }

    public getPerformance(employee: any): any {
        employee['Performance'] = this.getPerformanceData(12);
        const hasEmployees = employee.Employees === undefined;
        if (hasEmployees) {
            return employee;
        } else {
            for (const employer of employee.Employees) {
                this.getPerformance(employer);
            }
        }
    }

    public getPerformanceData(weeks?: number): any[] {
        if (weeks === undefined) {
            weeks = 20;
        }
        const performance: any[] = [];
        for (let w = 0; w < weeks; w++) {
            const value = this.getRandomNumber(0, 100);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            performance.push({Points: value, Week: w});
        }
        return performance;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

}
