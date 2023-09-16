import { Injectable } from '@angular/core';
import { ELocalStorage } from "../../../interfaces/tags.interface";
import { AnswersHandler } from "../answers-handler.abstract";
import { CachingService } from "../../caching/caching.service";

@Injectable({
  providedIn: 'root'
})
export class SkippedAnswersService extends AnswersHandler {
  constructor(
    protected override cachingService: CachingService,
  ) {
    super(ELocalStorage.SkippedQuestions, cachingService);
  }
}
