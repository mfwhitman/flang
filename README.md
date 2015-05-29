# flang

An image search tool using AngularJS front-end and Flickr API.

## Notes

The Flickr API has two methods of returning a list of images based on search terms: Either via filtering the public feed, or using flickr.photos.search. For the prurpose of this exercise, I used flickr.photos.search as it would correspond with actual search results. For a real world customer, we would ask the purpose of the application and make the API decision based on this.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

Underscore.js and UI-Router have been used.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
