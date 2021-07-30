import { LightningElement, api } from 'lwc';

export default class StarRatingContainer extends LightningElement {
    @api rating = 0;
    @api totalStars = 5;
    @api size = "medium";
    @api isInteractive = false;
    @api filledColor = "orange";
    @api unfilledColor = "grey";

    handleRatingClick(event) {
        const selectedEvent = new CustomEvent(
            'ratingclick',
            {detail: event.detail}
        );
        this.dispatchEvent(selectedEvent);
    }
}
