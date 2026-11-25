import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createTransaction } from "./transactionsOperations";
import type { transaction } from "../../features/transactions/transaction.types";

interface authState {
    transactions:transaction[],
}

const initialState:authState = {
    transactions: [],
}

const transactionsSlice = createSlice({
    name: "TransactionsAuth",
    initialState,
    reducers: {
        // setTransactionsAuth: (state, action:PayloadAction<createTransaction | null>) => {
        //     state.transactions = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(createTransaction.fulfilled, (state, action) => {
            state.transactions.unshift(action.payload)
        })
    }
})

export default transactionsSlice.reducer