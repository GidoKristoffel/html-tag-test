import { Component, EventEmitter, Output } from '@angular/core';
import { ELang, ELocalStorage } from "../../interfaces/tags.interface";
import { UtilityService } from "../../services/utility/utility.service";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { LoadService } from "../../services/caching/load/load.service";
import { SaveService } from "../../services/caching/save/save.service";

@Component({
  selector: 'htt-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  public currentLanguage!: ELang;
  public languages: string[] = Object.values(ELang);

  constructor(
    private utilityService: UtilityService,
    private translateService: TranslateService,
    private loadService: LoadService,
    private saveService: SaveService,
  ) {
    this.init();
  }

  private init(): void {
    this.initCurrentLanguage();
    this.watchChange();
  }

  private initCurrentLanguage(): void {
    this.currentLanguage = this.getSaving();
  }

  private getSaving(): ELang {
    let language: ELang | string | null = this.loadService.loadLocalStorage(ELocalStorage.Language);
    if (language) {
      return JSON.parse(language as string) as ELang;
    }
    return ELang.English;
  }

  private watchChange(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent): void => {
      if (this.utilityService.isEnumContains(event.lang, ELang)) {
        this.currentLanguage = this.translateService.currentLang as ELang;
        this.saveService.saveLocalStorage(ELocalStorage.Language, this.currentLanguage);
      }
    });
  }

  public changeLanguage(language: string): void {
    if (this.utilityService.isEnumContains(language, ELang)) {
      this.translateService.use(language as ELang);
    }
  }

  public runClose(): void {
    this.close.emit();
  }
}
