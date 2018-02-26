import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Material design
import { MatSelectModule, MatButtonModule, MatRadioModule } from '@angular/material';

import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

//Service
import { VoteService } from './vote.service';

//Ngx-Charts
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxChartsModule
  ],
  providers: [
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
