import React from 'react';
import PhotoGrid from "../components/PhotoGrid";
import galleryData from "../data/galleryData.json";
import "./Gallery.css"

const Gallery: React.FC = ():any => {
    return (
        <div className="gallery-page">
            <h2>My Gallery</h2>
            <PhotoGrid picture={galleryData} />
        </div>
    );
};

export default Gallery;