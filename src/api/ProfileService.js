import axios from 'axios';


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
            // axios.post('https://localhost:44350/api/v1/user/login', profile, getAxiosConfig())
            //     .then((resp) => {                    
            //         let res  = resp.data;                    
            //         let response = { errors: res.errors, success: res.value.result.succeeded, userProfile : profile};
            //         resolve(response);
            //     })
            //     .catch((err) => {                       
            //         let errors = err.errors ? err.errors : ["Systemic error " + err.message + "..."];                   
            //         let response = { errors: errors, success: false, userProfile : profile};
            //         reject(response); 
            //     });  
            resolve({ errors: [], success: true, userProfile : profile,confirmEmailCallBackUrl : ''});
        });
    }

    static SignOut(profile)
    {
        return new Promise((resolve, reject) => {
            // axios.post('https://localhost:44350/api/v1/user/logout', profile, getAxiosConfig())
            //     .then((resp) => {                                        
                    
            //     })
            //     .catch((err) => {                       
                    
            //     }).then(() => {resolve({});})            
            resolve({});
        });  
            
    }

    static SendOTP(profile)
    {
        return new Promise((resolve, reject) => {
            // axios.post('https://localhost:44350/api/v1/user/sendOtp', profile, getAxiosConfig())
            //     .then((resp) => {                                        
                    
            //     })
            //     .catch((err) => {                       
                    
            //     }).then(() => {resolve({});})        
            resolve(profile);
        });  
    }

    static ResetUserPassword(profile)
    {
        return new Promise((resolve, reject) => {
            // axios.post('https://localhost:44350/api/v1/user/resetPassword', profile, getAxiosConfig())
            //     .then((resp) => {                                        
                    
            //     })
            //     .catch((err) => {                       
                    
            //     }).then(() => {resolve({});})        
            resolve(profile);
        });  
    }

}