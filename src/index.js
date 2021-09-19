import './sass/main.scss';
import debounce from 'lodash.debounce';
import PhotoApiService from './api-service';
import photoCardTml from './photo.hbs';

const photoApiServise = new PhotoApiService();
const refs = {
  form: document.querySelector('#search-form'),
  imgList: document.querySelector('.gallery'),
  div: document.querySelector('.sentinel'),
};
refs.form.addEventListener('input', debounce(foundPhoto, 1000));

function foundPhoto(e) {
  photoApiServise.photo = e.target.value;
  if (photoApiServise.photo !== '') {
    refs.imgList.innerHTML = '';
    photoApiServise.stepOnOnePage();
    photoApiServise.fetchPhoto().then(photoCardMarkUp);
    photoApiServise.plusPage();
  }
}

function photoCardMarkUp(hits) {
  refs.imgList.insertAdjacentHTML('beforeend', photoCardTml(hits));
}
const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && photoApiServise.photo !== '') {
      photoApiServise.fetchPhoto().then(photoCardMarkUp);
      photoApiServise.plusPage();
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '200px',
});
observer.observe(refs.div);
