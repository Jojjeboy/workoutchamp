import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageServiceService } from './local-storage-service';
import { LsTypeEnum } from './LsTypeEnum';
import { TallyService } from './tally-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LocalStorageServiceService, TallyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
