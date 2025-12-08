import React from 'react';
import { useParams, Link } from 'react-router-dom';
import galleryData from '../data/galleryData.json';
import './PhotoDetail.css';

const PhotoDetail: React.FC = () :any => {
    const { name } = useParams<{ name: string }>();
    const photo = galleryData.find(p => p.name === name);

    if(!photo) {
        return (
            <div className="photo-detail-error">
                <h2>Image Not Found</h2>
                <Link to="/gallery">Back to Gallery</Link>
            </div>
        )
    }

    return (
        <div className="photo-detail">
            <Link to="/gallery" className="back-link">Back to Gallery</Link>
            <div className ="detail-container">
                <img src={photo.image} alt={photo.name} className="detailed-image" />
                <div className="detail-info">
                    <h2>{photo.name}</h2>
                    <h4>Description:</h4>
                    <p className="description">{photo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetail;