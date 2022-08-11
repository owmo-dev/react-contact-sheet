import React from 'react';
import Images from './Images';
import Config from './Config';
import Gallery from 'react-photo-gallery';

export default function ContactSheet() {
    const [photos, setPhotos] = React.useState([]);
    const [chunks, setChunks] = React.useState([]);

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

    React.useEffect(() => {
        if (photos.length === 0) return;
        let c = [];
        for (let i = 0; i < photos.length; i += Config.chunk) {
            c.push(photos.slice(i, i + Config.chunk));
        }
        setChunks(c);
    }, [photos]);

    return (
        <>
            {chunks.map(chunk => {
                return (
                    <div key={chunk[0].id} className="A4">
                        <Gallery photos={chunk} direction={Config.direction} margin={Config.margin} columns={Config.columns} />
                    </div>
                );
            })}
        </>
    );
}
