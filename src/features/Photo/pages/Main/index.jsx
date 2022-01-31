import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import './styles.scss';
/* Old import before using jsconfig.json
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images'; 
*/

MainPage.propTypes = {

};

function MainPage(props) {
    const dispatch = useDispatch();
    // Connect to Redux store to get state from store
    // State is rootReducer and located in store.js
    const photos = useSelector(state => state.photos);
    console.log('list of photo: ', photos);
    const navigate = useNavigate();

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);

        const editPhotoUrl = `${photo.id}`;
        navigate(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);

        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">
                        <Button color="primary">
                            Add new photo
                        </Button>
                    </Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;