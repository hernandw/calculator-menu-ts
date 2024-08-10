export type MenuItem = {
    id: number;
    name: string;
    price: number;
}

export type MenuOrder = MenuItem & {
    quantity: number
}

