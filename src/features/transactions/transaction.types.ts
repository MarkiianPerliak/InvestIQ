export interface newTransaction {
    date:string,
    describtion:string,
    category:string,
    overall:number,
    type: "expenses" | "income"
}

export interface transaction extends newTransaction {
    id:string
}