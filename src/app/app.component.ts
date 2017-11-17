import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    menu: '.menu',
    css3: true,
    scrollingSpeend: 1000,
    anchors: ['hello', 'projects'],
    controlArrows: false
  });

  constructor(public fullpageService: MnFullpageService) { }
}
