import React from 'react';

export default function Card({ children, className, style, ...restProps }) {
  return <div className={`custom-card my-3 ${className}`} style={style} {...restProps}>{children}</div>
};

Card.Header = function Header({children}) {
  return <h3 className="p-3">{children}</h3>
}

Card.Body = function Body({className,children, style}) {
  return <div className={`p-3 ${className}`} style={style}>{children}</div>
}