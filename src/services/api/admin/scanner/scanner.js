import axios from '../../axios'

export const scanUserInformation = async (payload) => {
    return await axios.post(
      "/api/user",
      payload
    );
};