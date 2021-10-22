import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlert,list}) => {
  useEffect(() => {
     const timeout = setTimeout(() => {
       removeAlert();
     },2000);
    return () => {
     clearTimeout(timeout);
    }
  }, [list]) // List her değiştiğinde useffeect çalışacak.
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
