import './sass/main.scss';
import debounce from 'lodash.debounce';
import PhotoApiService from './api-service';
import photoCardTml from './photo.hbs';

const photoApiServise = new PhotoApiService();
const refs = {
  form: document.querySelector('#search-form'),
  imgList: document.querySelector('.gallery'),
  moreBtn: document.querySelector('.load-more'),
};
refs.form.addEventListener('input', debounce(foundPhoto, 500));
refs.moreBtn.addEventListener('click', foundMorePhoto);

function foundPhoto(e) {
  refs.imgList.innerHTML = '';
  photoApiServise.photo = e.target.value;
  photoApiServise.stepOnOnePage();
  photoApiServise.fetchPhoto();
  photoApiServise.fetchPhoto().then(photoCardMarkUp);
}
function foundMorePhoto(e) {
  refs.imgList.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  photoApiServise.fetchPhoto().then(photoCardMarkUp);
}

function photoCardMarkUp(hits) {
  refs.imgList.insertAdjacentHTML('beforeend', photoCardTml(hits));
}
