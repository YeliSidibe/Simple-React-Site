import axios from 'axios';
import { debug } from 'util';

const getAxiosConfig = () =>
{
    let axiosConfig =
        {
            headers:
            {
                'Content-Type': 'application/json;',
                "Access-Control-Allow-Origin": "*"
                // ,"Authorization": "Basic NUd3bkJ2clh4cDpGcmlkYXkkMQ=="
            }
        };
        return axiosConfig;
};

export default class ProfileService {
    static CreateProfile(profile) {        
        profile = Object.assign({}, profile); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
                        
            axios.post('https://localhost:44350/api/v1/user/register', profile, getAxiosConfig())
                .then((resp) => {                    
                    let res  = resp.data;
                    let response = { errors: res.errors, success: res.succcess, userProfile : profile,confirmEmailCallBackUrl : res.value.confirmEmailCallBackUrl};                    
                    resolve(response);
                })
                .catch((err) => {                      
                    let errors = err.errors ? err.errors : ["Systemic error " + err.message + "..."];                   
                    let response = { errors: errors, success: false, userProfile : profile};
                    reject(response); 
                });                        
        });
    }

    static Authenticate(profile) {        
        profile = Object.assign({}, profile); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            axios.post('https://localhost:44350/api/v1/user/login', profile, getAxiosConfig())
                .then((resp) => {                    
                    let res  = resp.data;                    
                    let response = { errors: res.errors, success: res.value.result.succeeded, userProfile : profile};
                    resolve(response);
                })
                .catch((err) => {                       
                    let errors = err.errors ? err.errors : ["Systemic error " + err.message + "..."];                   
                    let response = { errors: errors, success: false, userProfile : profile};
                    reject(response); 
                });                        
        });
    }
}