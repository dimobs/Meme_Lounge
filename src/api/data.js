import * as api from './api.js';

export const login = api.login; 
export const register = api.register; 
export const logout = api.logout; 

export async function getAllMems() {
return api.get('/data/memes?sortBy=_createdOn%20desc');
}

export async function createMeme(item) {
    return api.post('/data/memes', item);    
}