"use client";
import { SessionProvider } from "next-auth/react"
const Sessionprovider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Sessionprovider