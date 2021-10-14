import { User } from "../domain/user";
import { Purchase } from "../domain/purchase";
import { ShoppingItem } from "../domain/shoppingItem";
import { TodoItem } from "../domain/todoItem";

export interface IAuthService {
  isLoading: boolean;
  isAuthenticated: boolean;
  register(email: Email, password: string): void;
  login(email: Email, password: string): void;
  logout(): void;
  fetchCurrentUser(): Promise<any>;
}

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface PurchasesStorageService {
  purchase?: Purchase[];
  updatePurchases(purchase: Purchase[]): void;
  deletePurchases(purchase: Purchase[]): void;
}

export interface ShoppingItemsStorageService {
  shoppingItems?: ShoppingItem[];
  updateShoppingItems(shoppingItem: ShoppingItem[]): void;
  deleteShoppingItems(shoppingItem: ShoppingItem[]): void;
}

export interface TodoItemsStorageService {
  todoItems?: TodoItem[];
  updateShoppingItems(todoItem: TodoItem[]): void;
  deleteShoppingItems(todoItem: TodoItem[]): void;
}

export interface NotificationService {
  notify(message: string): void;
}
