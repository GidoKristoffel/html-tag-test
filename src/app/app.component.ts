import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ELang, ELocalStorage } from "./interfaces/tags.interface";
import { LoadService } from "./services/caching/load/load.service";

@Component({
  selector: 'htt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'html-tag-test';

  constructor(
    private translate: TranslateService,
    private loadService: LoadService,
  ) {
    translate.setDefaultLang(ELang.English);
    translate.use(this.getSaving());
  }

  private getSaving(): ELang {
    let language: ELang | string | null = this.loadService.loadLocalStorage(ELocalStorage.Language);
    return language ? JSON.parse(language as string) as ELang : ELang.English;
  }
}
