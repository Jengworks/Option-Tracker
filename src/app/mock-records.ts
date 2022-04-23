import { Record } from './Record';

export const RECORDS: Record[] = [

    { action:'sto', completed: false, date:'03/01/2022', ticker:'MSFT', strikeDate:'03/11/2022', strikePrice:350, contracts: 3, price: 0.80 },
    { action:'btc', completed: true, date:'03/02/2022', ticker:'MSFT', strikeDate:'03/11/2022', strikePrice:350, contracts: 3, price: 0.10 },
    { action:'sto', completed: true, date:'03/05/2022', ticker:'MSFT', strikeDate:'03/18/2022', strikePrice:307, contracts: 3, price: 0.65 },
    { action:'btc', completed: true, date:'03/07/2022', ticker:'MSFT', strikeDate:'03/18/2022', strikePrice:307, contracts: 3, price: 0.05 },
    { action:'sto', completed: true, date:'04/01/2022', ticker:'MSFT', strikeDate:'04/08/2022', strikePrice:300, contracts: 3, price: 0.30 },
    { action:'btc', completed: true, date:'04/02/2022', ticker:'MSFT', strikeDate:'04/08/2022', strikePrice:300, contracts: 3, price: 0.10 },
    { action:'sto', completed: false, date:'04/02/2022', ticker:'MSFT', strikeDate:'04/15/2022', strikePrice:310, contracts: 3, price: 0.50 },
    { action:'btc', completed: false, date:'04/03/2022', ticker:'MSFT', strikeDate:'04/15/2022', strikePrice:310, contracts: 3, price: 0.20 },
    { action:'sto', completed: false, date:'04/20/2022', ticker:'MSFT', strikeDate:'04/15/2022', strikePrice:310, contracts: 3, price: 0.20 },
    { action:'bto', completed: false, date:'04/21/2022', ticker:'MSFT', strikeDate:'04/15/2022', strikePrice:310, contracts: 3, price: 0.20 },

];