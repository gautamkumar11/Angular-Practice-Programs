import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'star-rating',
    templateUrl: './star.component.html',
    styles: [`
        .crop{
            overflow: hidden;
        }  
        div{
            cursor: pointer;
        }
    `]

})
export class StarComponent implements OnChanges{
    @Input() rating: number = 0;
    cropWidth: number = 75 ;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.cropWidth = this.rating * 75/5 ;
    }

    onClick() : void {
        this.ratingClicked.emit(`This rating ${this.rating} was clicked`);
      // console.log(`the clicked rating is ${this.rating} `);
    }
}