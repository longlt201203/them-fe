import { post, get } from '../ApiCaller';
import Localstorage from '../Localstorage';
import authHeader from './HeaderAuthorization';

const authApi = {
    login: async (data) => {
        const endpoint = `/auth/login`;

        return await post(endpoint, data, {}, {})
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    loginGG: async (credential) => {
        const endpoint = `/auth/login-with-google/${credential}`;
        return await get(endpoint, {}, {})
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getUser: async () => {
        const token = Localstorage.getToken();
        const endpoint = `/auth/self`;
        return await get(endpoint, {}, authHeader())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getInfoFromGG: async (credential) => {
        const endpoint = `/auth/get-info-from-google/${credential}`;
        return await get(endpoint, {}, {})
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    register: async (formData) => {
        const endpoint = `/users/create-one`;

        return await post(endpoint, formData, {}, {})
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },

    SendEmail: async (data) => {
        const endpoint = `/auth/request-reset-password`;
        // eslint-disable-next-line no-return-await

        return await post(endpoint, data, {}, {})
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);

                return res;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },
    ResetPassword: async (data) => {
        const endpoint = `/auth/reset-password`;
        // eslint-disable-next-line no-return-await

        return await post(endpoint, data, {}, {})
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);

                return res;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },
    CheckCode: async (data) => {
        const endpoint = `/auth/verify-reset-password-code`;
        // eslint-disable-next-line no-return-await

        return await post(endpoint, data, {}, {})
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);

                return res;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },
};

export default authApi;
