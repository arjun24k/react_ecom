export const setCurrentUser = user =>{
    return {
        type:'SET_CURRENT_USER',
        payload:user
    };
}

export const googleSignInStart = () =>{
    return{
        type:'GOOGLE_SIGN_IN_START'
    }
};

export const signInSuccess = (user) =>{
    return {
        type:'SIGN_IN_SUCCESS',
        payload:user
    };
}

export const signInFaliure = (error) =>{
    console.log(error);
    return {
        type:'SIGN_IN_FALIURE',
        payload:error
    }
}

export const emailSignInStart = (emailAndPassword) =>{
    return{
        type:'EMAIL_SIGN_IN_START',
        payload:emailAndPassword
    }
};

export const checkUserSession = () =>{
    return{
        type:'CHECK_USER_SESSION'
    }
}

export const signOutStart = () =>{
    return{
        type:'SIGN_OUT_START'
    }
}

export const signOutSuccess =() =>{
    return {
        type:'SIGN_OUT_SUCCESS'
    }
}

export const signOutFaliure = (error) =>{
    return {
        type:'SIGN_OUT_FALIURE',
        payload:error
    }
}

export const signUpStart = (userDetails) =>{
    return {
        type:'SIGN_UP_START',
        payload:userDetails
    }
}

/* export const signUpSuccess = (user) =>{
    return {
        type:'SIGN_UP_SUCCESS',
        payload:user
    }
}

export const signUpFaliure = (error) =>{
    return {
        type:'SIGN_UP_FALIURE',
        payload:error
    }
}
 */