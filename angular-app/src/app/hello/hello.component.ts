import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  price: number;
  now: Date;
  styleClass: string;
  count: number;
  input: string;
  visible: boolean;
  data: string[];
  switch: string;

  constructor() {
    setInterval(
      () => {
         this.now = new Date();
         this.styleClass = this.styleClass === 'red' ? '' : 'red';
         console.log(this.styleClass)
       }, 1000);
  }

  ngOnInit() {
    this.title = 'Hello Boo!!';
    this.message = 'This is my first component';
    this.price = 123456;
    this.now = new Date();
    this.styleClass = 'red';
    this.count = 0;
    this.visible = true;
    this.data = [
      '最初の項目です。',
      '２番目の項目です。',
      '最後の項目です。'
    ];
    this.switch = 'one';
 }

  today() {
    // return this.now.toLocaleString();
    return this.now.toLocaleString();
  }

  doClick() {
    this.message = ++ this.count + '回、クリックしました。';
    this.visible = !this.visible ;
  }

  doType(val: string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }

  doSelect(val) {
    this.switch = val;
  }
}
