import { Add_To_Cart,Remove_To_Cart } from "../constant"


const initialstate = {
    cardData:[]
}

console.log(initialstate)

export default function cardItems(state=[], action){
    switch(action.type){
        case Add_To_Cart: 
       // console.log("reducer", action)
             return [
                ...state,
                {cardData:action.data}
             ]
             case Remove_To_Cart: 
             // console.log("reducer", action)
             state.pop()
                   return [
                      ...state,
                   ]
             default: 
                return  state
    }
}