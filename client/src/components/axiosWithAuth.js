import axios from 'axios'; 

export const axiosWithAuth = () => {

    // get token stored in lical storage 
    const token = localStorage.getItem('token');
    
    // add Authorization key to headers object with a value of token 
    return axios.create({
        headers: {
        Authorization: token
        }
    });
};
