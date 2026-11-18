import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAppDispatch } from "../../hooks/hook";
import { setUserAuth, toAuthUser } from "../../redux/user/userSlice";

export const AuthListener = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
        auth,
        (firebaseUser) => {
            dispatch(
            setUserAuth(
                firebaseUser ? toAuthUser(firebaseUser) : null
            )
            );
        }
        );

        return unsubscribe;
    }, [dispatch]);

    return null;
}  