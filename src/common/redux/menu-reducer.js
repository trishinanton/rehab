
const initialState={
    show: true
}
export const menuReducer = (state=initialState,action)=>{
    switch (action.type){
        case 'SET-MENU':
            return {...state, show: action.show}
        default:
            return {...state}
    }
}

export const setMenuAC = (show) => ({type: 'SET-MENU', show})