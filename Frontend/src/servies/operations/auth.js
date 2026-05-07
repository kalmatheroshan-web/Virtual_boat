import toast from 'react-hot-toast';
import fetchdata from '../../utils/fetchdata';
import { authApi } from '../api';

const { SIGNUP_API, LOGIN_API, LOGOUT_API } = authApi;

export async function signup(payload) {
    try {
        const response = await fetchdata(SIGNUP_API, "POST", payload);
        toast.success('Signup Successfull');
        return response;
    } catch (error) {

        return {
            success: false,
            message: error.message
        };
    }
}

