import './sass/main.scss';
import debounce from 'lodash.debounce';
import PhotoApiService from './api-service';
import photoCardTml from './photo.hbs';
/*
const options = {
  headers: {
    Authorization: '23352968-b8b048e55839ee6b2f6a0c2b8',
  },
};*/
const photoApiServise = new PhotoApiService();
const refs = {
  form: document.querySelector('#search-form'),
  imgList: document.querySelector('.gallery'),
  moreBtn: document.querySelector('.more-btn'),
};
refs.form.addEventListener('input', debounce(foundPhoto, 500));
refs.moreBtn.addEventListener('click', foundMorePhoto);

function foundPhoto(e) {
  photoApiServise.photo = e.target.value;
  photoApiServise.stepOnOnePage();
  photoApiServise.fetchPhoto();
  photoApiServise.fetchPhoto().then(photoCardMarkUp);
}
function foundMorePhoto(e) {
  photoApiServise.fetchPhoto().then(photoCardMarkUp);
  refs.imgList.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function photoCardMarkUp(hits) {
  refs.imgList.insertAdjacentHTML('beforeend', photoCardTml(hits));
}
