import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ELocalStorage, ETag } from "../interfaces/tags.interface";
import { SaveService } from "./caching/save/save.service";
import { LoadService } from "./caching/load/load.service";
import { AnswersHandler } from "./answers-handler.abstract";

@Injectable({
  providedIn: 'root'
})
export class SkippedQuestionService extends AnswersHandler {

  constructor(
    protected override saveService: SaveService,
    protected override loadService: LoadService,
  ) {
    super(ELocalStorage.SkippedQuestions, saveService, loadService);
  }
}
