import axios from "axios";

export function electronicsService(){
    return axios.get("http://localhost:3000/categories_electronics");
};
