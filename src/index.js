import './sass/main.scss';
import debounce from 'lodash.debounce';
/*
const options = {
  headers: {
    Authorization: '23352968-b8b048e55839ee6b2f6a0c2b8',
  },
};*/
const refs = {
  form: document.querySelector('#search-form'),
  imgList: document.querySelector('.gallery'),
};
refs.form.addEventListener('input', debounce(foundFoto, 500));

function foundFoto(e) {
  const fotoName = e.target.value;
  fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${fotoName}&page=1&per_page=12&key=23352968-b8b048e55839ee6b2f6a0c2b8`,
  )
    .then(r => r.json())
    .then(console.log);
}
