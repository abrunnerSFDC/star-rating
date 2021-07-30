import { LightningElement, api, track} from 'lwc';

export default class StarRating extends LightningElement {
    @api rating;
    @api totalStars;
    @api size;
    @track stars = new Array();
    connectedCallback() {

        for (let i = 0; i < this.totalStars; ++i) {
            this.stars.push(
                {
                    Index: i,
                    State: "default"
                }
            );
        }

        for (let i = 0; i < this.rating; ++i) {
            this.stars[i].State = "warning";
        }
    }
}
