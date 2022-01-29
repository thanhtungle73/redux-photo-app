import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import "./RandomPhoto.scss";

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
};

// change random id to get the random image
const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 1200);
    return `https://picsum.photos/id/${randomId}/300/300`
}

function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

    // random new URL and call onImageUrlChange -> parent will handle -> update new imageURL
    const handleRandomPhotoClick = async () => {
        /*  if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
        
            onImageUrlChange(randomImageUrl);
        } */

        // Generate new URL when error is returned
        if (onImageUrlChange) {
            let randomImageUrl;
            let responseCode = 404;
            while (responseCode !== 200) {
                randomImageUrl = getRandomImageUrl();
                const response = await fetch(randomImageUrl);
                responseCode = response.status;
            }
            onImageUrlChange(randomImageUrl);
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>

                <div className="random-photo__photo">
                    {imageUrl && <img src={imageUrl} alt="Ooops ... not found. Please click again!"></img>}
                </div>
            </div>
        </div>
    );
}

export default RandomPhoto;