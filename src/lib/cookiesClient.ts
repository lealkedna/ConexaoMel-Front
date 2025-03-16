import { get } from "axios";
import { getCookie } from "cookies-next";

export function getCookieClient(){
    const token = getCookie("signin");
    return token;
}