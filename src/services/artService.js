const baseUrl = 'http://softuni-server.herokuapp.com/jsonstore';

export const getAll = async () => {

    let response = await fetch(`${baseUrl}/gallery`);

    let arts = await response.json();

    let result = Object.values(arts);

    return result;

};

export const create = async (artData) => {
    let response = await fetch(`${baseUrl}/gallery`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(artData)

    });
    let result = await response.json();

    return result;
};

export const getOne = (artId) => {

    return fetch(`${baseUrl}/gallery/${artId}`)
        .then(res => res.json())
};