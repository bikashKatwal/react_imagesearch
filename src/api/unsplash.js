import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID e5278e2af80e1baa42328ab9ece88a091b6580a9a7ed9c0a3f19da187dde4daf'
    }
});

