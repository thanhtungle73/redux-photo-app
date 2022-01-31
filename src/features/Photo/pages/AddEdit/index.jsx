import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // photoId is the params which is named in Photo/index.js
    const { photoId } = useParams();
    const isAddMode = !photoId;
    let date = new Date();

    // Get photo from Redux store with the id === photoId
    // The photoId is string, should convert to number
    const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId));

    const initialValues = isAddMode
        ? {
            title: '',
            categoryId: null,
            photo: ''
        }
        // If edit a existing photo -> populate the data
        : editedPhoto;

    const handleSubmit = (values) => {

        // API call simulate with response time 2 seconds
        return new Promise(resolve => {
            console.log('Form Submit: ', values);

            // Waiting 2 seconds for data response
            setTimeout(() => {
                if (isAddMode) {
                    // Add id key and it's value by current time
                    values.id = date.getTime();

                    const action = addPhoto(values);
                    // Dispatch action just created
                    dispatch(action);
                } else {
                    console.log('Test: ', values);
                    const action = updatePhoto(values);
                    dispatch(action);
                }
                // Navigate to main page after submitting
                navigate('/photos');
                resolve(true);
            }, 2000);
        });
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />

            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;