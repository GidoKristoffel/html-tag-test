import { Component } from '@angular/core';
import { ELang } from "../../../interfaces/tags.interface";
import { UtilityService } from "../../../services/utility/utility.service";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'htt-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  public currentLanguage!: ELang;
  public languages: string[] = Object.values(ELang);

  constructor(
    private utilityService: UtilityService,
    private translateService: TranslateService,
  ) {
    this.init();
  }

  private init(): void {
    this.initCurrentLanguage();
  }

  private initCurrentLanguage(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      if (this.utilityService.isEnumContains(event.lang, ELang)) {
        this.currentLanguage = this.translateService.currentLang as ELang;
      }
    });
  }

  public changeLanguage(language: string): void {
    if (this.utilityService.isEnumContains(language, ELang)) {
      this.translateService.use(language as ELang);
    }
  }

  public back(): void {

  }
}
