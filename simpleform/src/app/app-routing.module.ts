import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleFormComponent } from './simple-form/simple-form.component';
import { BetterFormComponent } from './better-form/better-form.component';
import { ControlsComponent } from './controls/controls.component';

const routes: Routes = [
  { path: '', redirectTo: '/simple-form', pathMatch: 'full' },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: 'better-form', component: BetterFormComponent },
  { path: 'controls', component: ControlsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
