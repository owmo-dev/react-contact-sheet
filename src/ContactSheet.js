import React from 'react';
import Images from './Images';
import Config from './Config';
import Gallery from 'react-photo-gallery';

export default function ContactSheet() {
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        setPhotos(
            Object.keys(Images).map(name => {
                return {
                    id: name.split('.')[0],
                    src: `/${name}`,
                    width: Config.width,
                    height: Config.height,
                };
            }),
        );
    }, []);

    return <Gallery photos={photos} direction={Config.direction} margin={Config.margin} columns={Config.columns} />;
}
