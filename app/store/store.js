import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employee-slice/employee-slice'

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
    }
})
