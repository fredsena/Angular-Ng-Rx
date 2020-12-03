import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;
    @Output() sendRatingEvent: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

    onSendRatingClick(): void {
        this.sendRatingEvent.emit(`the rating is: ${this.rating}`);

    }

}