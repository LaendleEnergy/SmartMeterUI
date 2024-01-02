"use client";

import { ReactNode, useEffect, useState } from "react";
import jwt from 'jsonwebtoken';

interface AuthenticatedViewProps {
    children: ReactNode;
    role: string
  }

  export const AuthenticatedView = ({children, role}: AuthenticatedViewProps) => {
    const [bareToken, setBareToken] = useState<string | null>();
    
    useEffect(() => {
        setBareToken(localStorage.getItem('token'));
    }, []);

    if (!bareToken) return <></>
    const token = jwt.decode(bareToken) as { groups: string[] };

    if(token.groups.includes(role)) {
        return (
            <>
                {children}
            </>
        )
    }

    return <></>
}
