import axios from "axios";
// import store from "../redux/store";
// import {SetSlotList} from "../redux/stateSlice/slotSlice";
import { Alert } from "bootstrap";

const baseUrl = "http://localhost:5000/api/v1";

export function readSlotList(slotDate) {
    const baseUrl = "http://localhost:5000/api/v1";

    const url = baseUrl + "/readSlots";
    const postBody = {
        slotDate: slotDate
    }
    return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return res.data;
            }
            else {
                return false;
            }
        }).catch((err) => {
            //    alert("Something went wrong")
        })
}

export function readSlotById(slotId) {
    const url = baseUrl + "/readSlots/" + slotId;
    return axios.get(url)
        .then((res) => {
            if (res.status === 200) {
                return res.data;
            }
            else {
                return false;
            }
        }).catch((err) => {
            alert("Something went wrong")
        })
}

export function fromDataPost(image, name) {
    const formData = new FormData()
    formData.append("image", image)
    const url = baseUrl + "/createSlot";
    console.log(formData)
    return axios.post(url, formData)
        .then((res) => {
            if (res.status === 200) {
                return res.data;
            }
            else {
                return false;
            }
        }).catch((err) => {
            alert("Something went wrong")
        })
}


