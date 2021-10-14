export type ShoppingItemDescription = string;
export type ShoppingItemName = string;

export type ShoppingItem = {
  id: UniqueId;
  name: ShoppingItemName;
  quantity: Number;
  description: ShoppingItemDescription;
};
