import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css'],

})
export class starComponent implements OnChanges{

@Input() rating:number=0;
@Output() RatingClicked = new EventEmitter<string>();

cropWidth:number=75;

ngOnChanges(): void {
    this.cropWidth=this.rating * 75/5;
}

onclick() {
   this.RatingClicked.emit(`the ratings clicked: ${this.rating} `);

}}