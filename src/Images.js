function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const Images = importAll(require.context('../public', false, /\.(png|jpe?g|svg)$/));

export default Images;
