import {createSlice} from "@reduxjs/toolkit";
export const SlotSlice=createSlice({
    name:'slots',
    initialState:{slotList:[]},
    reducers:{
        SetSlotList:(state,action)=>{
            state.slotList=action.payload
        },
        
    }
})
export const {SetSlotList}=SlotSlice.actions;
export default  SlotSlice.reducer;