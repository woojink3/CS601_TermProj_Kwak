import React from 'react';
import Photo from './Photo';
import './PhotoGrid.css';

interface Picture {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface PhotoProps {
    picture: Picture[];
}

const PhotoGrid: React.FC<PhotoProps> = ({ picture }:PhotoProps) :any => {
    return (
        <div className='photo-list'>
            {picture.map(picture => (
                <Photo key={picture.id} picture={picture} />
            ))}
        </div>
    )
}

export default PhotoGrid;