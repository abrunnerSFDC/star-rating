import { LightningElement, api, track } from 'lwc';

export default class StarRatingInteractive extends LightningElement {
    @api defaultRating;
    @api totalStars;
    @track selectedRating;
    @track stars = new Array();

    connectedCallback() {
        this.selectedRating = this.defaultRating;

        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.selectedRating) {
                this.stars.push(
                    {
                        Index: i,
                        State: "warning"
                    }
                );
            } else {
                this.stars.push(
                    {
                        Index: i,
                        State: "default"
                    }
                );
            }
        }
    }

    handleRatingHover(event) {
        for (let i = 0; i < this.totalStars; ++i) {
            if (i < 1 + +event.target.getAttribute('data-id'))
                this.stars[i].State = "warning";
            else
                this.stars[i].State = "default";
        }
    }

    handleRatingHoverOut() {
        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.selectedRating)
                this.stars[i].State = "warning";
            else
                this.stars[i].State = "default";
        }
    }

    handleRatingClick(event) {
        this.selectedRating = 1 + +event.target.getAttribute('data-id');

        const selectedEvent = new CustomEvent(
            'ratingclick',
            {detail: this.selectedRating}
        );
        this.dispatchEvent(selectedEvent);
    }
}
