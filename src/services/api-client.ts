import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '272fda2d8bd54dd580a7c7b3cb64bd9a'
    },
})