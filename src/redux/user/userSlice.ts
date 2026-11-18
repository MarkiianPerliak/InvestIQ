import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";

interface authUser {
    email:string | null,
    displayName:string | null,
    photoURL:string | null,
    uid:string | null
}

interface authState {
    login:boolean,
    user:null | authUser
}

const initialState:authState = {
    login: false,
    user:null
}

export const toAuthUser = (user:User) => {
    return {uid:user.uid, email:user.email, displayName:user.displayName, photoURL:user.photoURL}
}

const userSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        setUserAuth: (state, action:PayloadAction<authUser | null>) => {
            state.user = action.payload
            state.login = true
        }
    }
})


export const {setUserAuth} = userSlice.actions
export default userSlice.reducer