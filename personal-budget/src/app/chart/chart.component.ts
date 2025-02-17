import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';

@Component({
    selector: 'pb-chart',
    standalone: true,
    templateUrl: './chart.component.html',
    styleUrl: './chart.component.scss'
})
export class ChartComponent implements AfterViewInit {
    @ViewChild('chartContainer') chartContainer!: ElementRef;
    private data: any[] = [];

    constructor(private dataService: DataService) {}

    ngAfterViewInit(): void {
        this.dataService.getData().subscribe(data => {
            if (data.length > 0) {
                this.data = data;
                this.createChart();
            }
        });
        this.dataService.fetchData(); // ✅ Calls only if data is empty
    }

    private createChart(): void {
        const svg = d3.select(this.chartContainer.nativeElement)
            .append('svg')
            .attr('width', 400)
            .attr('height', 300);

        svg.selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 50)
            .attr('y', d => 300 - d.value * 3)
            .attr('width', 40)
            .attr('height', d => d.value * 3)
            .attr('fill', 'steelblue');
    }
}
