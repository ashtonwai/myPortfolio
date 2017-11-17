import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-fullpage',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.scss']
})
export class FullpageComponent {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    menu: '.menu',
    css3: true,
    scrollingSpeend: 1000,
    anchors: ['hello', 'projects'],
    controlArrows: false
  });

  constructor(public fullpageService: MnFullpageService) { }
}
