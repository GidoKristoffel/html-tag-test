import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ELang } from "./interfaces/tags.interface";

@Component({
  selector: 'htt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'html-tag-test';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(ELang.English);
    translate.use(ELang.English);
  }
}
