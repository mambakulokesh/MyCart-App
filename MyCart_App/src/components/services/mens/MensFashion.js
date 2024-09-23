import axios from "axios";

export function mensFashion(){
    return axios.get("http://localhost:3000/categories_mensclothing");
}