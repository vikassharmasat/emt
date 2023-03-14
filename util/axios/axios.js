import axios from 'axios'
export const ajax = async (method,url,data,config) => {
    try{
        const response = await axios[method]( url, data, config );
        return response.data;
    }catch ( e ) {
        console.log(e,'failed to hit request')
    }
}
