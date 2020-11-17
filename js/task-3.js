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
galleryEl.classList.add('gallery');

galleryEl.insertAdjacentHTML(
	'afterbegin',
	images.reduce((acc, { url, alt }) => {
		acc += `<li class = "gallery_item"><img class="gallery_image" src="${url}" alt="${alt}"/></li>`;
		return acc;
	}, '')
);

// //  Все помещает в одно li, как сделать с помощью такого метода чтобы было в каждой ли по картинке?
//   const createGallery = images.map(image => {
//    const picture =  document.createElement('img');
//    picture.src = image.url;
//    picture.alt = image.alt;
// return picture

// });
// const listGallery = document.createElement('li')
// listGallery.append(...createGallery)
// console.log(listGallery)
// gallery.append(listGallery);
