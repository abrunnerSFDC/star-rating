import { LightningElement, api, track} from 'lwc';

const ICON_COLOR_MAPPING = new Map([
    ["grey", "default"],
    ["green", "success"],
    ["orange", "warning"],
    ["red", "error"],
    ["white", "inverse"],
]);

export default class StarRatingStatic extends LightningElement {
    @api rating = 0;
    @api totalStars = 5;
    @api size = "medium";
    @api filledColor = "orange";
    @api unfilledColor = "grey";
    @api customFilledUrl;
    @api customUnfilledUrl;
    @track stars = new Array();

    connectedCallback() {

        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.rating) {
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
}
