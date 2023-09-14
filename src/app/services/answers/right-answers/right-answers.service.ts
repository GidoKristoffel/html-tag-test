import { Injectable } from '@angular/core';
import { ELocalStorage, ETag } from "../../../interfaces/tags.interface";
import { SaveService } from "../../caching/save/save.service";
import { LoadService } from "../../caching/load/load.service";
import { AnswersHandler } from "../answers-handler.abstract";

@Injectable({
  providedIn: 'root'
})
export class RightAnswersService extends AnswersHandler {
  constructor(
    protected override saveService: SaveService,
    protected override loadService: LoadService,
  ) {
    super(ELocalStorage.RightAnswers, saveService, loadService);
  }
}
