import { configureStore } from "@reduxjs/toolkit";
import ui from './ui'
const Store = configureStore({
    reducer: {
        ui: ui,
    }
})

export default Store;