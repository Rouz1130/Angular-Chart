import { Component } from '@angular/core';
import {VoteService} from './vote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  survey = {
    layer:'',
    description:'',
    rating: 0
  }

  constructor(private vote: VoteService) {} 

  saveEntry() {
    this.vote.saveEntry(this.survey);
  }

}
