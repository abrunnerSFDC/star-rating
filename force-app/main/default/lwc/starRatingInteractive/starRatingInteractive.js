import { LightningElement, api, track } from 'lwc';

const ICON_COLOR_MAPPING = new Map([
    ["grey", "default"],
    ["green", "success"],
    ["orange", "warning"],
    ["red", "error"],
    ["white", "inverse"],
]);

export default class StarRatingInteractive extends LightningElement {
    @api defaultRating;
    @api totalStars;
    @api size;
    @api filledColor;
    @api unfilledColor;
    @api customFilledUrl;
    @api customUnfilledUrl;
    @track selectedRating;
    @track stars = new Array();

    connectedCallback() {

        this.selectedRating = this.defaultRating;

        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.selectedRating) {
                this.stars.push(
                    {
                        Index: i,
                        State: ICON_COLOR_MAPPING.get(this.filledColor),
                        CustomUrl: this.customFilledUrl
                    }
                );
            } else {
                this.stars.push(
                    {
                        Index: i,
                        State: ICON_COLOR_MAPPING.get(this.unfilledColor),
                        CustomUrl: this.customUnfilledUrl
                    }
                );
            }
        }
    }

    handleRatingHover(event) {
        for (let i = 0; i < this.totalStars; ++i) {
            if (i < 1 + +event.target.getAttribute('data-id')) {
                this.stars[i].State = ICON_COLOR_MAPPING.get(this.filledColor);
                this.stars[i].CustomUrl = this.customFilledUrl;
            }
            else {
                this.stars[i].State = ICON_COLOR_MAPPING.get(this.unfilledColor);
                this.stars[i].CustomUrl = this.customUnfilledUrl;
            }
        }
    }

    handleRatingHoverOut() {
        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.selectedRating) {
                this.stars[i].State = ICON_COLOR_MAPPING.get(this.filledColor);
                this.stars[i].CustomUrl = this.customFilledUrl;
            }
            else {
                this.stars[i].State = ICON_COLOR_MAPPING.get(this.unfilledColor);
                this.stars[i].CustomUrl = this.customUnfilledUrl;
            }
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
