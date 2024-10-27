import React from 'react';
import { Carousel } from './Carousel';

export const AllGalery = () => {
    return (
        <div>
            <Carousel direction="left" />
            <Carousel direction="right" />
        </div>
    );
};
