const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

// const createGalleryEl = images.reduce(
//     (string, item) => string + `<li><img class="imge" src='${item.url}' alt='${item.alt}'></li>`,
//   ""
// );
// galleryEl.insertAdjacentHTML('afterbegin', createGalleryEl);

const createGalleryEl = images.map(({url, alt}) => {
  const galleryItemEl = document.createElement('li');

  const imagesEl = document.createElement('img');
  imagesEl.classList.add('imge');
  imagesEl.src = url;
  imagesEl.alt = alt;

  galleryItemEl.append(imagesEl);

  return galleryItemEl;
})

galleryEl.append(...createGalleryEl)
