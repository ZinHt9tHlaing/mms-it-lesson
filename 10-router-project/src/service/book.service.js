import { baseUrl } from "./baseUrl";

export const getBookData = async (arg) => {
    try {
        const {data} = await baseUrl.get(arg);
        console.log(data);
    }catch (e) {
    throw new Error(e.message);
    }
}