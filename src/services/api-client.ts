import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c542e67aec3a4340908f9de9e86038af'
    },
})
// my-key: '272fda2d8bd54dd580a7c7b3cb64bd9a'
// 