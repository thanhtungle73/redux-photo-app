import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from 'components/Banner';
import Images from 'constants/images';
/* Old import before using jsconfig.json
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images'; 
*/

MainPage.propTypes = {

};

function MainPage(props) {
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