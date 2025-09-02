import { Offer } from "./offer";

export interface CompletedPurchase {
  date: string;
  email: string;
  creditcard: string;
  offers: Offer[];
  ref: string;
  tax_amount: number;
  total: string;
  transaction_number: string;
}
