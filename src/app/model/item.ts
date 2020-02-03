export enum ItemTypes {
    Candy= 'candy',
    Popcorn= 'popcorn',
    Coffee= 'coffee',
    Imported= 'imported',
    Other ='other'
}

export interface Item {
    name: string;
    quantity: number;
    price: string;
    type: string;
}
