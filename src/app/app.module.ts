import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MnFullpageModule } from 'ngx-fullpage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';

import { ProjectService } from './services/project.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullpageComponent } from './components/fullpage/fullpage.component';
import { HelloComponent } from './components/fullpage/hello/hello.component';
import { ProjectComponent } from './components/fullpage/project/project.component';
import { ProjectInfoComponent } from './components/fullpage/project/project-info/project-info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    FooterComponent,
    FullpageComponent,
    ProjectComponent,
    ProjectInfoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MnFullpageModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
