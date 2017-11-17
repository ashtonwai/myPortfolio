import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { ProjectService } from '../../services/project.service';

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
  projects$;

  constructor(
    public fullpageService: MnFullpageService,
    private projectService: ProjectService) {
    this.projects$ = projectService.getAll();
  }
}
