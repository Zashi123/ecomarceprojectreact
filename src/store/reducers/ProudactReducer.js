// const initialState = {
//     fees: [],
//     formToEdit: null,

// }

// const FeesReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'POST_FEES':
//             return {
//                 ...state,
//                 fees: [...state.fees, action.fee]
//             }
//       case 'DELETE_FEE':
//             return {
//                 ...state,
//                 fees: state.fees.filter(fee => fee.code !== action.code)
//             }
//              case 'EDIT_FORM':
//             return{
//                 ...state,
//                 formToEdit: action.yoo
//             }
//         case 'UPDATE_FORM':
//             let updatedList = state.fees.filter(fee =>{
//                 if(fee.code === action.yoo.code){ 
//                     fee.Student = action.yoo.Student
//                     fee.regno = action.yoo.regno
//                     fee.Course = action.yoo.Course
//                 }
//                 return fee;
//             }); 
//             return {
//                 ...state,
//                 fees: updatedList,
//             }
//         default:
//             return state
//     }
// }


// export default FeesReducer


const initialState = {
    prodact: [],
}

const ProudactReducer = (state = initialState, action) => {
    switch(action.type){
        case 'Get_School_Success':
            return {
                ...state,
                prodact: action.payload
            }
        default:
            return state
    }
}

export default ProudactReducer