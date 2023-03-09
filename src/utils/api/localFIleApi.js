import { API_URL } from '../../config';
import { post, get } from '../ApiCaller';
import Localstorage from '../Localstorage';
import authHeader from './HeaderAuthorization';

const localFileApi = {
    postImg: async (data) => {
        const endpoint = `/local-files/upload`;
        console.log(data);
        const formatData = {
            files: data,
        };
        return await post(
            endpoint,
            { files: data[0] },
            {},
            { 'content-type': 'multipart/form-data' }
        )
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getImg: (id) => {
        console.log(id);
        return API_URL + `/local-files/get-file/${id}`;
    },
};

export default localFileApi;
