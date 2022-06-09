export const getGiffs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=wuf4HfUF4Vp4jCO1KsyfF8AD5Aneu9X1`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
};
