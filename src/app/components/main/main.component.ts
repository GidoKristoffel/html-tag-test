import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EDialog, ETag, IDialog, ITags } from "../../interfaces/tags.interface";
import { TagsService } from "../../services/tags/tags.service";
import { QuestionOrderService } from "../../services/question-order.service";
import { QuestionNumberService } from "../../services/question-number.service";
import { distinctUntilChanged } from "rxjs";
import { AnswerService } from "../../services/answer.service";
import { SettingsService } from "../../services/settings.service";
import { dialogs } from "../../../assets/tags";

@Component({
  selector: 'htt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {}
