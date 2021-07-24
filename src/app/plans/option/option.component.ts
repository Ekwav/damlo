import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.less']
})
export class OptionComponent implements OnInit {

  constructor() { }

  @Input()
  title : string
  @Input()
  price : number

  ngOnInit(): void {
  }

}
