import { Injectable } from '@angular/core';
import { ELocalStorage } from "../interfaces/tags.interface";
import { SaveService } from "./caching/save/save.service";
import { LoadService } from "./caching/load/load.service";
import { AnswersHandler } from "./answers-handler.abstract";

@Injectable({
  providedIn: 'root'
})
export class WrongAnswersService extends AnswersHandler {

  constructor(
    protected override saveService: SaveService,
    protected override loadService: LoadService,
  ) {
    super(ELocalStorage.WrongAnswers, saveService, loadService);
  }
}
