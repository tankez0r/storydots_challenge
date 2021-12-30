
import axios from "axios";

export const loginPostData = async (section, queryObject, setState) => {
    const url = `http://localhost:3002/api/${section}`;
    let res = await axios.post(url, queryObject);
    setState(res)
};