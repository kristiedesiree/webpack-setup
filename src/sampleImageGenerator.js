//uncomment to generate sample images
//a sample images array has been made to prevent needing to generate each time app is run
/*const faker = require('faker');

let createSampleImages = function(number) {
  let images = [];
  for (var i = 0; i < number; i++) {
    let image = {};
    image.url = `https://picsum.photos/200/30${i}`;
    image.caption = faker.lorem.sentence();
    images.push(image);
  }
  return images;
}

let sampleImages = createSampleImages(10);
*/

let sampleImages = [ { url: 'http://4.bp.blogspot.com/_AkvACLvCvR8/TRArTuvJ4YI/AAAAAAAAAEw/0ZtL8KErNh4/s1600/nature-wallpapers-0026.jpg',
    caption: 'Rerum rerum corrupti.' },
  { url: 'https://zahuren.files.wordpress.com/2010/01/nature.jpg',
    caption: 'Ab asperiores voluptas qui sit et libero sit velit sunt.' },
  { url: 'http://4.bp.blogspot.com/-ueMDJccHj5Q/Tlh-m4ISE9I/AAAAAAAAAZA/11wQ_oD6PCc/s1600/Nature-Wallpapers-7.jpg',
    caption: 'Voluptatem voluptatibus magnam eum voluptatem distinctio.' },
  { url: 'https://kollywood247.files.wordpress.com/2012/09/wooden-path-hdr-nature-1280x800.jpg',
    caption: 'Amet ut itaque quidem placeat tempora.' },
  { url: 'https://jdi915.files.wordpress.com/2012/05/twotreesrevisited.jpg',
    caption: 'Et rerum ducimus et ut est.' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1920px-Altja_j%C3%B5gi_Lahemaal.jpg',
    caption: 'Vel quia eos iusto.' },
  { url: 'http://2.bp.blogspot.com/_N_mOB63qPaE/TTSdxa6S38I/AAAAAAAARs8/vZlHEX_VtW8/s1600/3d_nature_wallpaper_landscape.jpg',
    caption: 'Animi illo rem error.' },
  { url: 'http://1.bp.blogspot.com/-F4V4Xo16zNw/TuRw4Pn8zHI/AAAAAAAABCs/5Ep_m8jB9qs/s1600/Nature+Pics.jpg',
    caption: 'Quibusdam molestias quis voluptas commodi temporibus autem.' },
  { url: 'https://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-45.jpg',
    caption: 'Officiis ex voluptatum veritatis minus.' },
  { url: 'http://blog.hdwallsource.com/wp-content/uploads/2014/11/nature-17941-18400-hd-wallpapers.jpg',
    caption: 'Laborum odit numquam aperiam ea quasi aut corrupti aut.' } ]

export default sampleImages;