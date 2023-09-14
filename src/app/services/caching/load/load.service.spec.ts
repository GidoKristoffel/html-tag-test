import { TestBed } from '@angular/core/testing';

import { LoadService } from './load.service';
import { ELocalStorage, ETag } from "../../../interfaces/tags.interface";
import { ShuffleService } from "../../shuffle/shuffle.service";

describe('LoadService', () => {
  let service: LoadService;
  let shuffle: ShuffleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadService);
    shuffle = TestBed.inject(ShuffleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load data from local storage', () => {
    const ids = Object.values(ETag);
    const shuffledIds: ETag[] = shuffle.runArray(ids);

    localStorage.clear();

    expect(localStorage.getItem(ELocalStorage.QuestionOrder)).toEqual(null);
    expect(localStorage.getItem(ELocalStorage.QuestionNumber)).toEqual(null);
    expect(localStorage.getItem(ELocalStorage.RightAnswers)).toEqual(null);
    expect(localStorage.getItem(ELocalStorage.WrongAnswers)).toEqual(null);
    expect(localStorage.getItem(ELocalStorage.ShowStatistics)).toEqual(null);

    localStorage.setItem(ELocalStorage.QuestionOrder, JSON.stringify(shuffledIds));
    localStorage.setItem(ELocalStorage.QuestionNumber, '4');
    localStorage.setItem(ELocalStorage.RightAnswers, JSON.stringify(shuffledIds.slice(0, 3)));
    localStorage.setItem(ELocalStorage.WrongAnswers, JSON.stringify(shuffledIds.slice(4, 4)));
    localStorage.setItem(ELocalStorage.ShowStatistics, 'true');

    expect(service.loadLocalStorage(ELocalStorage.QuestionOrder)).toEqual(JSON.stringify(shuffledIds));
    expect(service.loadLocalStorage(ELocalStorage.QuestionNumber)).toEqual('4');
    expect(service.loadLocalStorage(ELocalStorage.RightAnswers)).toEqual(JSON.stringify(shuffledIds.slice(0, 3)));
    expect(service.loadLocalStorage(ELocalStorage.WrongAnswers)).toEqual(JSON.stringify(shuffledIds.slice(4, 4)));
    expect(service.loadLocalStorage(ELocalStorage.ShowStatistics)).toEqual('true');
  });
});
