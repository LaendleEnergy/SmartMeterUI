import React from "react";


interface ErrorAlertProps {
    message: String;
}

export default function ErrorAlert(props: ErrorAlertProps) {
    const errorMessage = props.message;
    return (
        <div className="w-150 h-100 bg-red-100 rounded-lg border-2 border-zinc-400" style={{margin: "1vw"}}>
            {errorMessage}
        </div>
    );
}
