import React from 'react'
import { Link } from 'react-router-dom';
import './Photo.css';

interface Picture {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface PhotoProps {
    picture: Picture;
}

const Photo: React.FC<PhotoProps> = ({ picture }:PhotoProps ):any => {
    return (
        <div className="photo-item">
            <div className="photo-detail">
                <img src={picture.image} alt={picture.name} className="detail-image" />
                <Link to={`/photodetail/${picture.name}`} className="detail-btn">{picture.name}</Link>
            </div>
        </div>
    )
}

export default Photo;