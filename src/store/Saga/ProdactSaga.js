import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'
import {Get_Proudact} from '../actions/ProudactActions'

// workers
function* getProdactAsync(){
    try{
        const response = yield call(axios.get, "http://127.0.0.1:8000/all/")
        yield put({
            type: 'Get_Proudact _Success',
            payload: response.data
        })
    }
    catch(e){
        console.log(e.message)
    }
}

// watchers
export function* getProdactWatcher(){
    yield takeLatest(Get_School, getProdactAsync)
}
