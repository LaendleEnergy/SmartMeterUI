"use client";

import React, { FunctionComponent } from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text, ...rest }) => {
  return <button {...rest} className="PrimaryMedium w-32 px-5 py-2 bg-gray-400 rounded-full justify-center items-center inline-flex"><span className="Text text-center text-white text-base font-medium font-['Inter'] leading-normal">{text}</span></button>;
};

Button.displayName = "Button";
export default Button;

//  <Button onClick={login} text='Log In'/>
