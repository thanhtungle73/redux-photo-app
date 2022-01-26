import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

Photo.propTypes = {

};

function Photo(props) {
    /* const match = useMatch('photos'); */

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path='add' element={<AddEditPage />} />
            <Route path=':photoId' element={<AddEditPage />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Photo;