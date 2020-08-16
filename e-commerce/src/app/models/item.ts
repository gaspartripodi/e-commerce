import { IProduct } from './product';

export interface IItem {
  product: IProduct;
  quantity: number;
  subtotal: number;
}