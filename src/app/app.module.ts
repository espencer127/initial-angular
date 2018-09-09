import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
import { AFilterComponent } from './a-filter/a-filter.component';
import { ButtonComponent } from './button/button.component';
import { ButtComponent } from './butt/butt.component';
// import { Globals } from './globals';


@NgModule({
  declarations: [
    AppComponent,
    AFilterComponent,
    ButtonComponent,
    ButtComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    UiModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
