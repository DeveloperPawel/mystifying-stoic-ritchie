export interface Offer {
  app_id: string;
  id: string;
  image: string;
  tags: string; // tags SUBSCRIPTION, OTO, BUMP, BONUS
  group: string;
  price: string;
  description: string;
  itemid: string;
  title: string;
  start: string;
  end: string;
  quantity: number;
}
