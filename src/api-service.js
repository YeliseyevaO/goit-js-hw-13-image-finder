export default class PhotoApiService {
  constructor() {
    this.photoName = '';
    this.page = 1;
  }
  fetchPhoto() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.photoName}&page=${this.page}&per_page=12&key=23352968-b8b048e55839ee6b2f6a0c2b8`,
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.page += 1;
        return data.hits;
      });
  }
  stepOnOnePage() {
    this.page = 1;
  }
  get photo() {
    return this.photoName;
  }
  set photo(newPhoto) {
    return (this.photoName = newPhoto);
  }
}
