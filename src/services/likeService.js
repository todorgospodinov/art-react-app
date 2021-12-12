import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, artId) => request.post(`${baseUrl}/likes`, {userId, artId});
export const getArtLikes = (artId) => {
    const query = encodeURIComponent(`artId="${artId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};