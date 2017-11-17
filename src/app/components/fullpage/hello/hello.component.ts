import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  ngOnInit() {
    const typed = new Typed('#typed', {
      stringsElement: '#typedStrings',
      typeSpeed: 40,
      autoInsetCss: false
    });
  }
}
