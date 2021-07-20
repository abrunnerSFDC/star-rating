import { LightningElement, api } from 'lwc';

export default class StarRatingContainer extends LightningElement {
    @api rating = 0;
    @api isInteractive = false;
}