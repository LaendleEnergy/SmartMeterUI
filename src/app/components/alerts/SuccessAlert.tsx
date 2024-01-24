import React from "react";
import './css/SuccessAlert.scss'


interface ErrorAlertProps {
    message: String;
}

export default function SuccessAlert(props: ErrorAlertProps) {
    const successMessage = props.message;
    return (
        <div className="w-150 h-100 bg-green-100 rounded-lg border-2 border-zinc-400" style={{margin: "1vw", justifyContent: "center"}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                </div>
            </div>
            <div style={{margin: "2vw"}}>
                {successMessage}
            </div>
        </div>
    );
}
