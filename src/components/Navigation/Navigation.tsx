import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Navigation.module.css"
import { useDispatch } from 'react-redux'
// import { logOut } from '../../redux/user/userOperations'

export default function Navigation() {
  return (
    <div>
        <div>
            <NavLink to={"/"}>Registration</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/transactions"}>Dashboard</NavLink>
            {/* <button onClick={() => dispatch(logOut())}>Log out</button> */}
        </div>
    </div>
  )
}