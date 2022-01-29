import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useSelector } from 'react-redux';
/* Old import before using jsconfig.json
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images'; 
*/

MainPage.propTypes = {

};

function MainPage(props) {
    // Connect to Redux store to get state from store
    // State is rootReducer and located in store.js
    const photos = useSelector(state => state.photos);
    console.log('list of photo: ', photos);

    return (
        <div className="photo-main">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>
            </Container>
        </div>
    );
}

export default MainPage;