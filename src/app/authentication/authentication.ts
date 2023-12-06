import { decode, verify } from "jsonwebtoken";
//import * as fs from "fs";

interface AuthRequest {
    emailAddress: string,
    password: string,
}

interface AuthResponse {
    exp: string;
    groups: any;
    householdId: string;
    iat: number;
    iss: string;
    sub: string;
    memberId: string;
}

export async function authenticate(props: AuthRequest) {
    // ToDo: Automatisch erneuern, wenn abgelaufen
    const token = await fetch('http://localhost:8080/user/authenticate', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    })
        .then(async result => {
            return await result.json();
        })
        .catch(error => console.log(error));


    // ToDo: eventuell verify verwenden?
    //const pubkey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1EaMo20M/jQ0J4Uopb/oK51QWBJYNXWUjxw5mtx12Riu2DJZaMNGiTQK229F7Lq6m4GZ65jkBDVw2o4zPWR+tk9X0Pn8wa7vRrpIASaOIYg6ZI6/RkbzuJ4X+6Qhks6ZSMKcPQqnPtmyBWNWSPz7GQfjIigGT6q/mwJ0wTAwVfIGiYrQWUy6OsBZALg5PmcSFnB/mTlG9Pco6YXP+b2lrz2bzfUcnkZj/ckqDbyQAHJmyjPhoG/xt/LFwuBvbRTW+VxQv2DO0lycbwSYtf4l1T8TXKNRzmpqpiZp2GHUfOsrcS0fLP4YPrvPN/+TWR7+t2WTWCcxBSUB9epHUfa/zwIDAQAB-----END PUBLIC KEY-----"
    // var cert = fs.readFileSync('publickey.pem');  // get public key
    /*const decoded = verify(token["token"], pubkey, (decodedToken: any) => {
        return decodedToken;
    });*/


    if (token) {
        const decodedToken = decode(token["token"]) as unknown as AuthResponse;
        localStorage.setItem("token", token["token"]);
        localStorage.setItem("email", props.emailAddress);
        localStorage.setItem("householdId", decodedToken.householdId);
        localStorage.setItem("memberId", decodedToken.memberId);
        console.log(decodedToken)
        return true;
    } else {
        console.log("Authorization failed");
        return false;
    }
};

