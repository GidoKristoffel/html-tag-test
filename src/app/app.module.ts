import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from "@angular/forms";
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MainManuComponent } from './components/main-manu/main-manu.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { TestComponent } from './components/test/test.component';
import { ResultComponent } from './components/result/result.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { NotFoundDirective } from './directives/not-found.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScoreboardComponent,
    ToolbarComponent,
    DialogComponent,
    MainManuComponent,
    DictionaryComponent,
    TestComponent,
    ResultComponent,
    NotFoundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
