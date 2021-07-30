import { LightningElement, api, track } from 'lwc';

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
        switch (this.filledColor) {
            case "grey":
                this.filledColor = "default";
                break;
            case "green":
                this.filledColor = "success";
                break;
            case "orange":
                this.filledColor = "warning";
                break;
            case "red":
                this.filledColor = "error";
                break;
            case "white":
                this.filledColor = "inverse";
                break;
            default:
                this.filledColor = "warning";
                break;
        }

        switch (this.unfilledColor) {
            case "grey":
                this.unfilledColor = "default";
                break;
            case "green":
                this.unfilledColor = "success";
                break;
            case "orange":
                this.unfilledColor = "warning";
                break;
            case "red":
                this.unfilledColor = "error";
                break;
            case "white":
                this.unfilledColor = "inverse";
                break;
            default:
                this.unfilledColor = "default";
                break;
        }

        this.selectedRating = this.defaultRating;

        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.selectedRating) {
                this.stars.push(
                    {
                        Index: i,
                        State: this.filledColor,
                        CustomUrl: this.customFilledUrl
                    }
                );
            } else {
                this.stars.push(
                    {
                        Index: i,
                        State: this.unfilledColor,
                        CustomUrl: this.customUnfilledUrl
                    }
                );
            }
        }
    }

    handleRatingHover(event) {
        for (let i = 0; i < this.totalStars; ++i) {
            if (i < 1 + +event.target.getAttribute('data-id')) {
                this.stars[i].State = this.filledColor;
                this.stars[i].CustomUrl = this.customFilledUrl;
            }
            else {
                this.stars[i].State = this.unfilledColor;
                this.stars[i].CustomUrl = this.customUnfilledUrl;
            }
        }
    }

    handleRatingHoverOut() {
        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.selectedRating) {
                this.stars[i].State = this.filledColor;
                this.stars[i].CustomUrl = this.customFilledUrl;
            }
            else {
                this.stars[i].State = this.unfilledColor;
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
