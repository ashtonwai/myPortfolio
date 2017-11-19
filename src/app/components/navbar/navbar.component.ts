import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sidebarActive: boolean;
  @Output() onToggle = new EventEmitter<boolean>();

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    this.onToggle.emit(this.sidebarActive);
  }
}
