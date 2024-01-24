interface AuthRequest {
    emailAddress: string,
    password: string,
}

export async function authenticate(props: AuthRequest) {
    const token = await fetch(process.env.NEXT_PUBLIC_HOST_ACCOUNTMANAGEMENT + '/user/authenticate', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    })
        .then(async result => {
            return await result.json();
        })
        .catch(() => { return false; });

    if (token) {
        localStorage.setItem("token", token["token"]);
        return true;
    } else {
        console.log("Authorization failed");
        return false;
    }
};

