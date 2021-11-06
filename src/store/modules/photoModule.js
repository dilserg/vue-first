import axios from "axios";

export default {
  state: {
    photos: [],
    dialogVisible: false,
    currentPhoto: {},
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
    showDialog(state) {
      state.dialogVisible = true;
    },
    hideDialog(state) {
      state.dialogVisible = false;
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload;
    },
    pushPhoto(state, { title, image }) {
      const reader = new FileReader();
      reader.onload = () => {
        let photo = { id: Date.now(), title: title, url: reader.result };
        state.photos.push(photo);
      };
      reader.readAsDataURL(image);
    },
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
    getDialogPhoto(state) {
      return state.dialogVisible;
    },
    getCurrentPhoto: (state) => state.currentPhoto,
  },
  actions: {
    fetchPhotos(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response) => context.commit("setPhotos", response.data));
    },
  },
};
