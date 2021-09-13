/*import './sass/main.scss';*/
/*
const options = {
  headers: {
    Authorization: '23352968-b8b048e55839ee6b2f6a0c2b8',
  },
};*/
const refs = {
  input: document.querySelector('#search-form'),
  imgList: document.querySelector('.gallery'),
};
refs.input.addEventListener('input', debounce(foundFoto, 500));

function foundFoto(e) {
  fetch(
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=sea&page=1&per_page=12&key=23352968-b8b048e55839ee6b2f6a0c2b8',
  )
    .then(r => r.json())
    .then(console.log);
}
