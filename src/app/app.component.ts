import { Component, Input } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    menu: '.menu',
    css3: true,
    scrollingSpeend: 1000,
    anchors: ['home', 'projects']
  });

  constructor(public fullpageService: MnFullpageService) { }
}
