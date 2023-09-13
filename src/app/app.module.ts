import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from "@angular/forms";
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MainManuComponent } from './components/pages/main-manu/main-manu.component';
import { DictionaryComponent } from './components/pages/dictionary/dictionary.component';
import { TestComponent } from './components/pages/test/test.component';
import { ResultComponent } from './components/pages/result/result.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { NotFoundDirective } from './directives/not-found.directive';
import { BackButtonDisableModule } from "angular-disable-browser-back-button";
import { IconBtnComponent } from './shared/components/buttons/icon-btn/icon-btn.component';

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
    NotFoundDirective,
    IconBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BackButtonDisableModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
