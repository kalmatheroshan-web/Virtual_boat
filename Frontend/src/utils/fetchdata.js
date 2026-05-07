import axios from "axios";

async function fetchdata(
    url,
    method = "GET",
    data = null,
    headers = {},
    params = {}
) {
    try {

        const response = await axios({
            url, method,
            data, headers,
            params
        });

        return response.data;

    } catch (error) {

        return {
            success: false,
            message: error.response?.data || error.message,
            status: error.response?.status || 500
        };
    }
}

export default fetchdata;