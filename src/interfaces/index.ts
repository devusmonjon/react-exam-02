export interface IBlog {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface IProduct {
  id: string;
  name: string;
  image_url: string;
  description: string;
  color_options: string[];
  price: number;
  brand_name: string;
  ratings_stars: number;
  rating_counts: number;
}

export interface CartItem extends IProduct {
  quantity: number;
}
