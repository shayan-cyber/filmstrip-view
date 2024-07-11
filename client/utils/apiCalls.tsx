import axios from "axios";
const BASE_URL =process.env.API_URL || 'http://localhost:3000/';

export const getData = async () =>{
    try{
        const res = await axios(BASE_URL+'api/data');
        console.log({res});
        return res?.data
    }catch(e){
        console.log({e});
    }
}