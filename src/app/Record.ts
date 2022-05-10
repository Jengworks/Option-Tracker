export interface Record {
    completed: boolean,    
    rolled: boolean,
    action: string,        //  sto, stc, bto, btc, rolled, dividend //
    date: string,
    ticker: string,
    strikeDate: string,
    strikePrice: number,
    contracts: number,
    price: number,
    tickerTwo?: string,    //  These fields are for 2nd opening record for rolling
    strikeDateTwo?: string,
    strikePriceTwo?: number,
    contractsTwo?: number,
    priceTwo?: number,
}
