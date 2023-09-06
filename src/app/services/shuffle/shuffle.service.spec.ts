import { TestBed } from '@angular/core/testing';

import { ShuffleService } from './shuffle.service';

describe('ShuffleService', () => {
  let service: ShuffleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuffleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should shuffle an array of numbers using the runArray() function', () => {
    const defaultArray = [1, 2, 3, 4, 5];
    const shuffledArray = service.runArray(defaultArray.slice());

    expect(defaultArray.length).toEqual(shuffledArray.length);
    expect(shuffledArray).not.toEqual(defaultArray);
    expect(defaultArray.sort()).toEqual(shuffledArray.sort());
  });

  it('should shuffle an array of strings using the runArray() function', () => {
    const defaultArray = ['a', 'b', 'c', 'd', 'e', 'f'];
    const shuffledArray = service.runArray(defaultArray.slice());

    expect(defaultArray.length).toEqual(shuffledArray.length);
    expect(shuffledArray).not.toEqual(defaultArray);
    expect(defaultArray.sort()).toEqual(shuffledArray.sort());
  });

  it('should shuffle an array of objects using the runArray() function', () => {
    const defaultArray = [{ id: 0}, { id: 1}, { id: 2}, { id: 3}, { id: 4}];
    const shuffledArray = service.runArray(defaultArray.slice());
    console.log(defaultArray);
    console.log(shuffledArray);

    expect(defaultArray.length).toEqual(shuffledArray.length);
    expect(shuffledArray).not.toEqual(defaultArray);
    expect(
      defaultArray.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
    ).toEqual(
      shuffledArray.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
    );
  });
});
