import React from 'react';

import gal1 from '../../../../img/gal-1.jpeg';
import gal2 from '../../../../img/gal-2.jpeg';
import gal3 from '../../../../img/gal-3.jpeg';
import gal4 from '../../../../img/gal-4.jpeg';
import gal5 from '../../../../img/gal-5.jpeg';
import gal6 from '../../../../img/gal-6.jpeg';
import gal7 from '../../../../img/gal-7.jpeg';
import gal8 from '../../../../img/gal-8.jpeg';
import gal9 from '../../../../img/gal-9.jpeg';
import gal10 from '../../../../img/gal-10.jpeg';
import gal11 from '../../../../img/gal-11.jpeg';
import gal12 from '../../../../img/gal-12.jpeg';
import gal13 from '../../../../img/gal-13.jpeg';
import gal14 from '../../../../img/gal-14.jpeg';

import { GalleryTW } from './Gallery.styles';



const Gallery = () => {
    return (
        <GalleryTW.baseStyle>
            <GalleryTW.item1><GalleryTW.image src={gal1} alt="/#" /></GalleryTW.item1>
            <GalleryTW.item2><GalleryTW.image src={gal2} alt="/#" /></GalleryTW.item2>
            <GalleryTW.item3><GalleryTW.image src={gal3} alt="/#" /></GalleryTW.item3>
            <GalleryTW.item4><GalleryTW.image src={gal4} alt="/#" /></GalleryTW.item4>
            <GalleryTW.item5><GalleryTW.image src={gal5} alt="/#" /></GalleryTW.item5>
            <GalleryTW.item6><GalleryTW.image src={gal6} alt="/#" /></GalleryTW.item6>
            <GalleryTW.item7><GalleryTW.image src={gal7} alt="/#" /></GalleryTW.item7>
            <GalleryTW.item8><GalleryTW.image src={gal8} alt="/#" /></GalleryTW.item8>
            <GalleryTW.item9><GalleryTW.image src={gal9} alt="/#" /></GalleryTW.item9>
            <GalleryTW.item10><GalleryTW.image src={gal10} alt="/#" /></GalleryTW.item10>
            <GalleryTW.item11><GalleryTW.image src={gal11} alt="/#" /></GalleryTW.item11>
            <GalleryTW.item12><GalleryTW.image src={gal12} alt="/#" /></GalleryTW.item12>
            <GalleryTW.item13><GalleryTW.image src={gal13} alt="/#" /></GalleryTW.item13>
            <GalleryTW.item14><GalleryTW.image src={gal14} alt="/#" /></GalleryTW.item14>
        </GalleryTW.baseStyle>
    )
}


export default Gallery; 