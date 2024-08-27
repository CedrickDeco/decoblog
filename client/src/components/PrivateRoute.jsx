import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/signin' />; // le composant outlet de la librairie react-router-dom nous permet d'acceder aux enfant du composant dans lequel il est appelé en occurence ici le composant PrivateRoute
}
