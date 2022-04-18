import {fork, all} from 'redux-saga/effects'
import {  getProdactWatcher } from './SchoolSaga'

export default function* RootSaga(){
    yield all([
        fork(getProdactWatcher),
    ])
}