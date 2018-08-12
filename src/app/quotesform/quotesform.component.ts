import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotesform',
  templateUrl: './quotesform.component.html',
  styleUrls: ['./quotesform.component.css']
})
export class QuotesformComponent implements OnInit {

inputQuote = new Quotes(0, '', '');

  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.addQuote.emit(this.inputQuote);
  }


  constructor() { }

  ngOnInit() {
  }

}
