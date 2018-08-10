import axios from 'axios';

export default class ProfileService {
    static CreateProfile(profile) {
        profile = Object.assign({}, profile); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            // let axiosConfig =
            // {
            //     headers:
            //     {
            //         'Content-Type': 'application/json;charset=UTF-8',
            //         "Access-Control-Allow-Origin": "*",
            //         "Authorization": "Basic NUd3bkJ2clh4cDpGcmlkYXkkMQ=="
            //     }
            // };
            // axios.post('http://localhost/SelfServiceRenewal/api/v1/pdf/Post', profile, axiosConfig)
            //     .then((res) => {
            //         resolve(profile);
            //     })
            //     .catch((err) => {
            //         //reject(profile); // should be rejected                
            //         resolve(profile);
            //     });
            profile.FirstName = "Khairati";
            let response = { errors: ["Please enter a valid phone number","An error occured while creating a profile"], success: false, userProfile : profile};
            resolve(response);
        });

    }
}