import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {

        // API call simulate with response time 2 seconds
        return new Promise(resolve => {
            console.log('Form Submit: ', values);

            // Waiting 2 seconds for data response
            setTimeout(() => {
                const action = addPhoto(values);
                console.log(action);
                // Dispatch action just created
                dispatch(action);
                // Navigate to main page after submitting
                navigate('/photos');
                resolve(true);
            }, 2000);
        });
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;