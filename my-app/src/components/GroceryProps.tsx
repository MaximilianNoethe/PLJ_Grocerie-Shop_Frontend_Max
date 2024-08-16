export interface GroceryProps {
    groceryId: number;
    name: string;
    region: string;
    description: string;
    url: string;
    price: number;
}

export interface Groceries {
    grocery: GroceryProps;
}