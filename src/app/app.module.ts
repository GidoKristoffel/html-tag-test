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
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { NotFoundDirective } from './directives/not-found.directive';
import { BackButtonDisableModule } from "angular-disable-browser-back-button";
import { IconBtnComponent } from './shared/components/buttons/icon-btn/icon-btn.component';
import { SearchComponent } from './components/pages/dictionary/search/search.component';
import { TagsDescriptionComponent } from './components/pages/dictionary/tags-description/tags-description.component';
import { StatisticTabsComponent } from './components/pages/result/statistic-tabs/statistic-tabs.component';
import { AnswerListComponent } from './components/pages/result/answer-list/answer-list.component';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LanguageComponent } from './components/language/language.component';
import { TestInputComponent } from './components/pages/test/test-input/test-input.component';

export function httpTranslateLoader(http: HttpClient):any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    IconBtnComponent,
    SearchComponent,
    TagsDescriptionComponent,
    StatisticTabsComponent,
    AnswerListComponent,
    LanguageComponent,
    TestInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BackButtonDisableModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
