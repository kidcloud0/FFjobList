import axios from "axios";

const BASE_URL='https://www.moogleapi.com/api/v1/characters/search?job=Black Mage'

class FFapi{
    static async getCharBYjob(){
        let res=await axios.get (BASE_URL)
        console.log (res)
        return res
    }
}
export default FFapi