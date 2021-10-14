export type PurchaseTags = [string];
export type PurchaseDescription = [string];
export enum Currency {
  CAN = "CAD",
  USD = "USD",
}

export type Purchase = {
  id: UniqueId;
  amount: number;
  currency: Currency;
  description: PurchaseDescription;
  tags: PurchaseTags;
};

export function getAmountFormatted(purchase: Purchase): string {
  return purchase.amount.toString();
}
