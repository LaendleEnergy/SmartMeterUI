import React from "react";


interface ErrorAlertProps {
    message: String;
}

export default function SuccessAlert(props: ErrorAlertProps) {
    const successMessage = props.message;
    return (
        <div className="w-150 h-100 bg-green-100 rounded-lg border-2 border-zinc-400" style={{margin: "1vw"}}>
            {successMessage}
        </div>
    );
}
