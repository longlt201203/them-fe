import { post, get } from '../ApiCaller';
import Localstorage from '../Localstorage';
import authHeader from './HeaderAuthorization';

const userApi = {
    updateProfile: async (data) => {
        const endpoint = `/users/update-profile`;

        return await post(endpoint, data, {}, authHeader())
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
};

export default userApi;
