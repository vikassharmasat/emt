import { createSlice } from '@reduxjs/toolkit';
import { ajax } from "../../util/axios/axios";

const EmployeeSlice = createSlice( {

    name: 'employee',
    initialState: [],
    reducers: {
        employeeAdded( state, action ) {
            state.push( {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            } )
        },
        employeeList( state, action ) {
            const employees = state.find( employees => employees.id === action.payload )
            employees.completed = !employees.completed
        },
        employeeView( state, action ) {
            const employees = state.find( employees => employees.id === action.payload )
            employees.completed = !employees.completed
        },
        employeeDelete( state, action ) {
            const employees = state.find( employees => employees.id === action.payload )
            employees.completed = !employees.completed
        },
        employeeUpdate( state, action ) {
            const employees = state.find( employees => employees.id === action.payload )
            employees.completed = !employees.completed
        }
    }
} )

export const {
    employeeAdded,
    employeeList,
    employeeView,
    employeeDelete,
    employeeUpdate
} = EmployeeSlice.actions

export default EmployeeSlice.reducer
