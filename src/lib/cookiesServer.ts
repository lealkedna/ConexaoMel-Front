import { cookies } from 'next/headers';

export async function getCookieServer(){
    const cookieStorage = await cookies();
    
    const token = cookieStorage.get("signin")?.value;

    return token || null;
}