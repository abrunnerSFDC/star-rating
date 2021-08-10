# Star Rating - Custom Lightning Web Component

## About

This LWC attempts to mimic the functionality found on many e-commerce sites of leaving review ratings via clicking on stars, and displaying a rating as a row of stars. This component offers both static and interactive versions, and can be customized to use different numbers of stars, different sizes, different colors, and even use of custom icons. Only integer ratings are supported, and there may be additional styling needed to accomodate certain custom icons. 

Feel free to fork and update/add functionality as you see fit!

## User Guide

Add to your project's lwc folder and add either the `<c-star-rating-interactive>` or `<c-star-rating-static>` element to a parent component. Additional attributes can be set to alter the behavior and appearance of the component. A description of the available attributes and their usage can be found below.

- `rating` (*Integer*) : Sets the number of filled stars to render for the static version, or the default selected rating for the interactive version.
- `total-stars` (*Integer*) : Sets the total number of stars to render for both versions.
- `size` (*String*) : Determines size of star icons.
  - Possible values: `"xx-small"` `"x-small"` `"small"` `"medium"` (*default*) `"large"`
- `filled-color` (*String*) : Determines color of filled star icons.
  - Possible values: `"grey"` `"green"` `"orange"` (*default*) `"red"` `"white"`
- `unfilled-color` (*String*) : Determines color of unfilled star icons.
  - Possible values: `"grey"` (*default*) `"green"` `"orange"` `"red"` `"white"`
- `custom-filled-url` (*String*) : URL for custom SVG resource used for filled stars.
- `custom-unfilled-url` (*String*) : URL for custom SVG resource used for unfilled stars.
- `onratingclick` (*Function - Interactive Only*) : Assign handler function to utilize data passed by an interactive component (Selected rating value held in `event.detail`).

## Known Issues / Potentional Updates

- As previously mentioned, some extra effort may be required to properly render some custom icons.
- As seen in the possible values, colors and sizes are restricted to those avaible to the `<lighting-icon>` element. In its current state, other colors and sizes require the use of custom SVG icons. It may be possible to implement different colors and sizes via CSS applied to the `<lightning-icon>` in the starRating child components.
- While currently restricted to integer rating values, replacing the `<lighting-icon>` element with an `<svg>` element could allow for rendering of partial stars, and therefore support decimal / percentage ratings.

## Closing Remarks

Any feedback regarding the design of the component will be greatly appreciated. I'm rather green to Salesforce development, and web / JS development in general, so I'm hoping making this open to the critique of others will be an excellent learning opportunity! Again, feel free to fork this repo and modify it for your own use cases, I hope it provides some value to you!
