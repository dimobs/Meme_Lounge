import * as api from './api.js';

export const login = api.login; 
export const register = api.register; 
export const logout = api.logout; 

export async function getAllMems() {
return api.get('/data/memes?sortBy=_createdOn%20desc');
}

export async function getbyId(id) {
    return api.get('/data/memes/' + id);
}

export async function createMeme(item) {
    return api.post('/data/memes', item);    
};

export async function deleteById(id) {
return api.del('/data/memes/' + id); 
}

export async function editItem(id, item) {
    return api.put('/data/memes/' + id, item);
}

export async function getMyItems(userId) {
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}