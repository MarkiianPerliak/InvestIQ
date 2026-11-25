import { createAsyncThunk } from "@reduxjs/toolkit";
import type { newTransaction, transaction } from "../../features/transactions/transaction.types";
import { addTransaction } from "../../features/transactionServices";

export const createTransaction = createAsyncThunk<transaction, {id:string, data:newTransaction}, {rejectValue:string}>("transactions/add", 
    async ({id, data}, {rejectWithValue}) => {
        try {
            return await addTransaction(id, data)
        } catch (error) {
            return rejectWithValue("Transactions did not go thru")
        }
    }
)