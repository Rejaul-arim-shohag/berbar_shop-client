import { configureStore } from '@reduxjs/toolkit';
import slotReducer from "../redux/stateSlice/SlotSlice"
export default configureStore({
    reducer:{
        slot:slotReducer
    }
})