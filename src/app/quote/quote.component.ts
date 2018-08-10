import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })
// export class QuoteComponent implements OnInit {
//
//   quotes = [
//   new Quote(1, 'Pineapples are yummy', 'Me', 'Anne', new Date(2018, 3, 1 )),
//   new Quote(2, 'Be yourself; everyone else is eating pineapples.', 'Oscar Wilde',  'Myself', new Date(2012, 3, 9)),
//   new Quote(3, 'So many pineapples, so little time.', 'Frank Ananas', 'Sami-Mai', new Date(2013, 1, 10)),
//   new Quote(4, 'Be the pineapple that you wish to see in the world.', 'Mahatma Fruit', 'Hanna', new Date(2016, 7, 14)),
//   new Quote(3, 'My pineapples know their limits, my mind refuses to accept them.', 'Unknown', 'Nanasi', new Date(2018, 4, 10)),
// ];
//
//   addQuote(quote) {
//         const quoteLength = this.quotes.length;
//         quote.id = quoteLength + 1;
//          quote.datePublished = new Date();
//         this.quotes.push(quote);
//
//     }
//
//   toogleDetails(index) {
//       this.quotes[index].showDetails = !this.quotes[index].showDetails;
//   }
//
//   deleteQuote(isDelete, index) {
//       if (isDelete) {
//
//         const toDelete = confirm(`Sure you wanna delete this, buddy?\n \n \" ${this.quotes[index].quote}\"`);
//
//
//         if (toDelete) {
//             this.quotes.splice(index, 1);
//             }
//         }
//     }
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
