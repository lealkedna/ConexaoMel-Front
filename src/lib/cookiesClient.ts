// import { get } from "axios";
import { getCookie } from "cookies-next";
import {jwtDecode} from "jwt-decode";

export function getCookieClient(){
    const token = getCookie("signin");
    return token;
}

// TODO: ajustar esse arquivo para decodificar o id do user para cadastrar

export function getVendedorId(): string | null {
    const token = getCookieClient();

    if (!token || typeof token !== "string") {
        console.error("⚠️ Token inválido ou não encontrado.");
        return null;
    }

    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = jwtDecode(token);
        return decoded.sub || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
