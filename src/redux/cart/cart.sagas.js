import { takeLatest,put,all,call } from "redux-saga/effects";
import { clearCart } from "./cartActions";


export function* emptyCart(){
    yield put(clearCart());
}

export function* onSignOutCartClear(){
    yield takeLatest(
        'SIGN_OUT_SUCCESS',
        emptyCart
    )
} 

export function* cartSagas(){
    yield all(
        [
            call(onSignOutCartClear)
        ]
    )
}