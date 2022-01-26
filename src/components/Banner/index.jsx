import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string
};

Banner.defaultProps = {
    title: '',
    backgroundColor: '',
};

function Banner(props) {
    const { title, backgroundUrl } = props;
    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {};
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    );
}

export default Banner;