import { LightningElement, api, track} from 'lwc';

const ICON_COLOR_MAPPING = new Map([
    ["grey", "default"],
    ["green", "success"],
    ["orange", "warning"],
    ["red", "error"],
    ["white", "inverse"],
]);

export default class StarRating extends LightningElement {
    @api rating;
    @api totalStars;
    @api size;
    @api filledColor;
    @api unfilledColor;
    @api customFilledUrl;
    @api customUnfilledUrl;
    @track stars = new Array();

    connectedCallback() {

        for (let i = 0; i < this.totalStars; ++i) {
            if (i < this.rating) {
                this.stars.push(
                    {
                        Index: i,
                        State: this.filledColor,
                        CustomUrl: ICON_COLOR_MAPPING.get(this.customFilledUrl)
                    }
                );
            } else {
                this.stars.push(
                    {
                        Index: i,
                        State: this.unfilledColor,
                        CustomUrl: ICON_COLOR_MAPPING.get(this.customUnfilledUrl)
                    }
                );
            }
        }
    }
}
