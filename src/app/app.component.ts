import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from 'ngx-fullpage';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    menu: '.menu',
    css3: true,
    scrollingSpeend: 1000,
    anchors: ['hello', 'projects'],
    controlArrows: false
  });

  constructor(public fullpageService: MnFullpageService) { }

  ngOnInit() {
    const typed = new Typed('#typed', {
      stringsElement: '#typedStrings',
      typeSpeed: 40,
      autoInsetCss: false
    });
  }
}
