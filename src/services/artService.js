import * as request from './requester';
 //const baseUrl = 'http://softuni-server.herokuapp.com/jsonstore';
 const baseUrl = 'http://localhost:3030/data';


export const getAll = async () => {
    let response = await fetch(`${baseUrl}/gallery`);
    let arts = await response.json();
    let result = Object.values(arts);
    return result;
};


export const getMyArts = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/gallery?where=${query}`);
};


export const create = async (artData,token) => {
    let response = await fetch(`${baseUrl}/gallery`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization':token,
        },
        body: JSON.stringify({...artData, likes:[]})
    });
    let result = await response.json();
    return result;
};

export const update = (artId, artData) => request.put(`${baseUrl}/gallery/${artId}`, artData);

export const getOne = (artId) => {
    return fetch(`${baseUrl}/gallery/${artId}`)
        .then(res => res.json())
};


export const remove = (artId,token)=>{
    return fetch(`${baseUrl}/gallery/${artId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
} 

export const like = (artId, art, token) => {
    return fetch(`${baseUrl}/gallery/${artId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(art)
    }).then(res => res.json());
};