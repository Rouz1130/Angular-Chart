import { Component, OnInit } from '@angular/core';
import {VoteService} from './vote.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  survey = {
    layer:'',
    description:'',
    rating: 0
  }

  chartdata: boolean = false;

  layerCount = [];
  layerData = [];

  //Chart
  view: any[] = [500,300];
  showLegend = true;

  colorScheme = {
    domain: ['#FFA500','#FF0000','#660000', '#000000']
  };
  showLabels = true;
  explodeSlices = false;
  doughnut = false;


  constructor(private vote: VoteService) {} 

  saveEntry() {
    this.vote.saveEntry(this.survey);
  }

  ngOnInit() {
    this.vote.getAllEntries().subscribe((results) =>  {
      this.chartdata = true;
      this.processData(results)
    })
  }

  onSelect(event) {
    console.log(event);
  }

  processData(entries) {
    this.layerCount = [];
    this.layerData = [];

    entries.forEach(element => {
      if (this.layerCount[element.layer])
      this.layerCount[element.layer] += 1;
      else
        this.layerCount[element.layer] = 1;
    });
    for (var key in this.layerCount) {
      let singleentry = {
        name: key,
        value: this.layerCount[key]
      }
      this.layerData.push(singleentry);
    }
  }

}
