import { Component } from '@angular/core';
import { ITags } from "../../interfaces/tags.interface";
import { tags } from "../../../assets/tags";

@Component({
  selector: 'htt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  private tags: ITags = tags;
}
