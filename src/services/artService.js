// const baseUrl = 'http://softuni-server.herokuapp.com/jsonstore';
const baseUrl = 'http://localhost:3030/data';
export const getAll = async () => {

    let response = await fetch(`${baseUrl}/gallery`);

    let arts = await response.json();

    let result = Object.values(arts);

    return result;

};

export const create = async (artData,token) => {
    let response = await fetch(`${baseUrl}/gallery`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization':token,
        },
        body: JSON.stringify({...artData, likes:0})

    });
    let result = await response.json();

    return result;
};

export const getOne = (artId) => {

    return fetch(`${baseUrl}/gallery/${artId}`)
        .then(res => res.json())
};