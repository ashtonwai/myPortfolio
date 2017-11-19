import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { MnFullpageOptions, MnFullpageService, MnFullpageDirective } from 'ngx-fullpage';
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
    anchors: ['hello', 'projects'],
    paddingTop: '60px',
    paddingBottom: '60px',
    scrollingSpeend: 1000,
    controlArrows: false,
    css3: true
  });
  @ViewChild(MnFullpageDirective) fullpage: MnFullpageDirective;
  projects$;
  loaded: boolean;

  constructor(
    public fullpageService: MnFullpageService,
    private projectService: ProjectService) {
    this.projects$ = projectService.getAll();
  }

  rebuild() {
    if (this.loaded) return;
    this.fullpageService.destroy('all');
    this.fullpage.ngOnInit();
    this.loaded = true;
  }
}
