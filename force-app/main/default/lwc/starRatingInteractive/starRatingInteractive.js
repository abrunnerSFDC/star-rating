import { LightningElement, api, track } from 'lwc';

export default class StarRatingInteractive extends LightningElement {
    @api defaultRating;
    @track selectedRating;
    @track starState1 = "default";
    @track starState2 = "default";
    @track starState3 = "default";
    @track starState4 = "default";
    @track starState5 = "default";

    connectedCallback() {
        switch (this.defaultRating) {
            case 1:
                this.starState1 = "warning";
                this.starState2 = "default";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case 2:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case 3:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case 4:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "warning";
                this.starState5 = "default";
                break;
            case 5:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "warning";
                this.starState5 = "warning";
                break;
            default:
                this.starState1 = "default";
                this.starState2 = "default";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
        }
        this.selectedRating = this.defaultRating;
    }

    handleRatingHover(event) {
        switch(event.target.getAttribute('data-id')) {
            case "star1":
                this.starState1 = "warning";
                this.starState2 = "default";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case "star2":
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case "star3":
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case "star4":
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "warning";
                this.starState5 = "default";
                break;
            case "star5":
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "warning";
                this.starState5 = "warning";
                break;
            default:
                break;
        }
    }

    handleRatingHoverOut() {
        switch(this.selectedRating) {
            case 1:
                this.starState1 = "warning";
                this.starState2 = "default";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case 2:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case 3:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
            case 4:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "warning";
                this.starState5 = "default";
                break;
            case 5:
                this.starState1 = "warning";
                this.starState2 = "warning";
                this.starState3 = "warning";
                this.starState4 = "warning";
                this.starState5 = "warning";
                break;
            default:
                this.starState1 = "default";
                this.starState2 = "default";
                this.starState3 = "default";
                this.starState4 = "default";
                this.starState5 = "default";
                break;
        }
    }

    handleRatingClick(event) {
        switch(event.target.getAttribute('data-id')) {
            case "star1":
                this.selectedRating = 1;
                break;
            case "star2":
                this.selectedRating = 2;
                break;
            case "star3":
                this.selectedRating = 3;
                break;
            case "star4":
                this.selectedRating = 4;
                break;
            case "star5":
                this.selectedRating = 5;
                break;
            default:
                break;
        }

        const selectedEvent = new CustomEvent(
            'ratingclick',
            {detail: this.selectedRating}
        );
        this.dispatchEvent(selectedEvent);
    }
}
