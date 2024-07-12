import axios from "axios";
const BASE_URL =process.env.API_URL || 'http://localhost:3000/';

export const getData = async (page=1) =>{
    try{
        const res = await axios(BASE_URL+`api/data?page=${page}`);
        // console.log({res});
        return res?.data
    }catch(e){
        console.log({e});
    }
}