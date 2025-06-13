import { NextRequest, NextResponse } from "next/server";
import { IUser, Role } from "./types/user";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
    try {
        const data = request.cookies.get('data')?.value
        const pathname = request.nextUrl.pathname;

        if (!data && pathname.startsWith('/account')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        if (!data && pathname.startsWith('/wishlist')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        if (data) {
            const user = JSON.parse(data).user as IUser

            if (!user.isEnabled) {
                const cookieStore = await cookies()
                cookieStore.delete('data')
                return NextResponse.redirect(new URL('/login', request.url));
            }

            if (pathname.startsWith("/login")) {
                return NextResponse.redirect(new URL('/', request.url));
            }
            
            switch (user.role) {
                case Role.CUSTOMER:
                    if (pathname.startsWith("/admin")) {
                        return NextResponse.redirect(new URL("/account/profile", request.url));
                    }
                    break;
                    case Role.ADMIN:
                        if (pathname.startsWith("/account")) {
                        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
                    }
                    break;
            }
            return NextResponse.next();
        }
    }
    catch (e) {
        console.error("Middleware error", e);
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|xlsx|pdf)$).*)',
    ],
};
