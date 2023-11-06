"use client";

import React, { FunctionComponent } from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text, ...rest }) => {
  return <button {...rest} className="ActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex"><span className="Text text-center text-white text-base font-medium   leading-normal">{text}</span></button>;
};

Button.displayName = "Button";
export default Button;

//  <Button onClick={login} text='Log In'/>
