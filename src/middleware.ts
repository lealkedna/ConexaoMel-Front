import { NextRequest, NextResponse } from "next/server";
import { getCookieServer } from "./lib/cookiesServer";
import { api } from "@/services/api";


export async function middleware(req:NextRequest) {
    
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/_next") || pathname === "/"){
        return  NextResponse.next();
    }

    const token = await getCookieServer();
    if (pathname.startsWith("/produto")){

        if (!token){
            return NextResponse.redirect(new URL("/", req.url));
        }

        const isValid = await validarToken(token);

        if (!isValid){
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
   return NextResponse.next();
    
}
async function validarToken(token: string){
    if (!token) return false;

    try{
        await api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return true;

    }catch(err){
        console.log(err);
        return false;
    }
}