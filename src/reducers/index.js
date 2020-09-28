const reducer = (state, action) => {

    switch(action.type) {
        case 'SET_FAVORITE':
         return {
             ...state,
             myList: [...state.mylist, action.payload] //donde y que ele guardar
         }
        default:
            return state;
    }
}

export default reducer