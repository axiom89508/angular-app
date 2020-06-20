import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BetterFormComponent } from './better-form/better-form.component';
import { ControlsComponent } from './controls/controls.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    BetterFormComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
/*     RouterModule.forRoot([
      { path: 'simple-form', component: SimpleFormComponent },
      { path: 'better-form', component: BetterFormComponent },
      { path: 'controls', component: ControlsComponent },
    ])
 */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
