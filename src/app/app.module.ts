import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MnFullpageModule } from 'ngx-fullpage';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullpageComponent } from './components/fullpage/fullpage.component';
import { HelloComponent } from './components/fullpage/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    FooterComponent,
    FullpageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
