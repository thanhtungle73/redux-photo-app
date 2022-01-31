import { createSlice } from '@reduxjs/toolkit';

const initialPhotos = [
  {
    id: 91176,
    categoryId: 5,
    photo: 'https://picsum.photos/id/532/300/300',
    title: 'Photo 1',
  },
  {
    id: 91178,
    categoryId: 1,
    photo: 'https://picsum.photos/id/1/300/300',
    title: 'Photo 2',
  },
  {
    id: 91179,
    categoryId: 2,
    photo: 'https://picsum.photos/id/2/300/300',
    title: 'Photo 3',
  },
  {
    id: 91180,
    categoryId: 3,
    photo: 'https://picsum.photos/id/3/300/300',
    title: 'Photo 4',
  },
  {
    id: 91181,
    categoryId: 4,
    photo: 'https://picsum.photos/id/4/300/300',
    title: 'Photo 5',
  },
  {
    id: 91182,
    categoryId: 5,
    photo: 'https://picsum.photos/id/5/300/300',
    title: 'Photo 6',
  },
  {
    id: 91183,
    categoryId: 2,
    photo: 'https://picsum.photos/id/6/300/300',
    title: 'Photo 7',
  },
  {
    id: 91184,
    categoryId: 3,
    photo: 'https://picsum.photos/id/7/300/300',
    title: 'Photo 8',
  },
  {
    id: 91185,
    categoryId: 4,
    photo: 'https://picsum.photos/id/8/300/300',
    title: 'Photo 9',
  },
  {
    id: 91186,
    categoryId: 3,
    photo: 'https://picsum.photos/id/9/300/300',
    title: 'Photo 10',
  },
];

// Create reducer and actions
const photo = createSlice({
  name: 'photos',
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      // action parameter is an object contains type & payload
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;

      // filter method return new array -> not direct mutate data -> should return state
      return state.filter((photo) => photo.id !== removePhotoId);
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;

      // Find the index of existing photo which equal to current edit photo index
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);

      // If finding is success -> set newPhoto for current editing photo
      console.log(photoIndex);
      if (photoIndex >= 0) {
        // direct mutate data
        state[photoIndex] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
