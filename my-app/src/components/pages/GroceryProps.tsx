export interface GroceryProps {
    groceryId: number;
    name: string;
    region: string;
    description: string;
    price: number;
}

export interface Groceries {
    grocery: GroceryProps;
}