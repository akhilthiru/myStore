import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name;

  constructor() { }

  @Output() pushEvent = new EventEmitter<string>();

  pushButton() {
    console.log(this.name);
    this.pushEvent.emit(this.name);
  }

  ngOnInit() {
  }

}
