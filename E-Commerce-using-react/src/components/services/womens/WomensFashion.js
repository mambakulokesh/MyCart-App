import axios from "axios";

export function womensFashion(){
    return axios.get("http://localhost:3000/categories_womensclothing");
}