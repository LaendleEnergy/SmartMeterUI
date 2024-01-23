import React from "react";
import './css/ErrorAlert.css'


interface ErrorAlertProps {
    message: String;
}

export default function ErrorAlert(props: ErrorAlertProps) {
    const errorMessage = props.message;
    return (
        <div className="w-150 h-100 bg-red-100 rounded-lg border-2 border-zinc-400" style={{margin: "1vw"}}>
            <svg className="checkmark__red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle__red" cx="26" cy="26" r="25" fill="red" />
                <path className="checkmark__check__red" fill="white" d="M16 16 36 36 M36 16 16 36" />
            </svg>
            <div style={{margin: "2vw"}}>
                {errorMessage}
            </div>
        </div>
    );
}
