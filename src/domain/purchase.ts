import { User } from "./user";

export type PurchaseTags = [string];
export type PurchaseDescription = string;
export enum Currency {
  CAN = "CAD",
  USD = "USD",
}

export type Purchase = {
  id: UniqueId;
  user: User;
  price: PriceCents;
  currency: Currency;
  description: PurchaseDescription;
  tags: PurchaseTags;
};

export function getAmountFormatted(purchase: Purchase): string {
  return `$${purchase.price.toString()}`;
}
