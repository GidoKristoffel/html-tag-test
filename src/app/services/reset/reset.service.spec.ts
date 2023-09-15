import { TestBed } from '@angular/core/testing';

import { ResetService } from './reset.service';
import { ELocalStorage, ETag } from "../../interfaces/tags.interface";
import { TagsService } from "../tags/tags.service";
import { ShuffleService } from "../shuffle/shuffle.service";

describe('ResetService', () => {
  let service: ResetService;
  let tags: TagsService;
  let shuffle: ShuffleService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetService);
    tags = TestBed.inject(TagsService);
    shuffle = TestBed.inject(ShuffleService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('local storage must be reset', () => {
    const tagIds = Object.values(ETag);
    const shuffledTagIds: ETag[] = shuffle.runArray(tagIds);

    localStorage.setItem(ELocalStorage.QuestionOrder, JSON.stringify(shuffledTagIds));
    localStorage.setItem(ELocalStorage.QuestionNumber, '5');
    localStorage.setItem(ELocalStorage.RightAnswers, '["<abbr>","<!--...-->","<aside>"]');
    localStorage.setItem(ELocalStorage.WrongAnswers, '["<basefont>","<button>"]');
    localStorage.setItem(ELocalStorage.ShowStatistics, 'true');

    expect(localStorage.getItem(ELocalStorage.QuestionOrder)).toEqual(JSON.stringify(shuffledTagIds));
    expect(localStorage.getItem(ELocalStorage.QuestionNumber)).toEqual('5');
    expect(localStorage.getItem(ELocalStorage.RightAnswers)).toEqual('["<abbr>","<!--...-->","<aside>"]');
    expect(localStorage.getItem(ELocalStorage.WrongAnswers)).toEqual('["<basefont>","<button>"]');
    expect(localStorage.getItem(ELocalStorage.ShowStatistics)).toEqual('true');

    service.run();

    expect(localStorage.getItem(ELocalStorage.QuestionOrder)).not.toEqual(JSON.stringify(shuffledTagIds));
    expect(JSON.parse(localStorage.getItem(ELocalStorage.QuestionOrder) as string).sort()).toEqual(tagIds.sort());
    expect(localStorage.getItem(ELocalStorage.QuestionNumber)).toEqual('0');
    expect(localStorage.getItem(ELocalStorage.RightAnswers)).toEqual('[]');
    expect(localStorage.getItem(ELocalStorage.WrongAnswers)).toEqual('[]');
    expect(localStorage.getItem(ELocalStorage.ShowStatistics)).toEqual('true');
  });
});
