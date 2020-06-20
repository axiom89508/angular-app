import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleform';
  paths = [
    { pathname: "./simple-form", title: "Simple Form" },
    { pathname: "./better-form", title: "Better Form" },
    { pathname: "./controls", title: "Controls" }
  ];
}
