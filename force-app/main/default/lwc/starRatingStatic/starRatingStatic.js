import { LightningElement, api, track} from 'lwc';

export default class StarRating extends LightningElement {
    @api rating;
    @api totalStars;
    @api size;
    @api filledColor;
    @api unfilledColor;
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
            default:
                this.unfilledColor = "default";
                break;
        }

        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.rating) {
                this.stars.push(
                    {
                        Index: i,
                        State: this.filledColor
                    }
                );
            } else {
                this.stars.push(
                    {
                        Index: i,
                        State: this.unfilledColor
                    }
                );
            }
        }
    }
}
