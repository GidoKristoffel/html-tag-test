import { Injectable } from '@angular/core';
import { ITags } from "../interfaces/tags.interface";
import { tags } from "../../assets/tags";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private tags: ITags = tags;

  public get(): ITags {
    return this.tags;
  }
}
