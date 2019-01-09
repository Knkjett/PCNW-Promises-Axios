// -- Dependencies
const cheerio = require('cheerio');
const url = require('url');

const getImagesInPage = (pageUrl, pageHtml, cb) => {

  const arrayOfImages = [];
  const $ = cheerio.load(pageHtml);

  $('img').map((i, e) => {
    const imgURL = url.resolve(pageUrl, $(e).attr('src'));
    arrayOfImages.push(imgURL);
  });

  cb(arrayOfImages);
}

const getImagesInPagePromisified = (pageUrl, pageHtml) =>{
  return new Promise((resolve, reject) => {
    const arrayOfImages = [];
    const $ = cheerio.load(pageHtml);
    $('img').map((i, e)=> {
        const imgURL = url.resolve(pageUrl, $(e).attr('src'));
        arrayOfImages.push(imgURL);
    })
    resolve(arrayOfImages);
  })
}

// ----- Promisified
getImagesInPagePromisified('url', 'html')
  .then(imageUrls => {
    console.log(imageUrls);
  })