const faker = require('faker');

let createSampleImages = function(number) {
  let images = [];
  for (var i = 0; i < number; i++) {
    let image = {};
    image.url = faker.image.imageUrl();
    image.caption = faker.lorem.sentence();
    images.push(image);
  }
  return images;
}

let sampleImages = createSampleImages(10);

export default sampleImages;