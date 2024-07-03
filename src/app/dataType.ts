interface Image {
    small: string;
    medium: string;
  }
  
  interface Review {
    count: number;
    url: string;
    rate: number;
  }
  
  interface PriceLabel {
    taxable: boolean;
    defaultPrice: number;
    discountedPrice: number | null;
    fixedPrice: number | null;
    premiumPrice: number | null;
    periodStart: number | null;
    periodEnd: number | null;
  }
  
  interface Point {
    amount: number;
    times: number;
    bonusAmount: number;
    bonusTimes: number;
    premiumAmount: number;
    premiumTimes: number;
    premiumBonusAmount: number;
    premiumBonusTimes: number;
  }
  
  interface Shipping {
    code: number;
    name: string;
  }
  
  interface GenreCategory {
    id: number;
    name: string;
    depth: number;
  }
  
  interface ParentGenreCategory {
    id: number;
    depth: number;
    name: string;
  }
  
  interface Brand {
    id: number | null;
    name: string;
  }
  
  interface ParentBrand {
    id: number;
    name: string;
  }
  
  interface SellerReview {
    rate: number;
    count: number;
  }
  
  interface Seller {
    sellerId: string;
    name: string;
    url: string;
    isBestSeller: boolean;
    review: SellerReview;
    imageId: string;
  }
  
  interface Delivery {
    area: string;
    deadLine: number | null;
    day: number | null;
  }
  
  export interface Hit {
    index: number;
    name: string;
    description: string;
    headLine: string;
    url: string;
    inStock: boolean;
    code: string;
    condition: string;
    imageId: string;
    image: Image;
    review: Review;
    affiliateRate: number;
    price: number;
    premiumPrice: number | null;
    premiumPriceStatus: boolean;
    premiumDiscountRate: number | null;
    premiumDiscountType: string | null;
    priceLabel: PriceLabel;
    point: Point;
    shipping: Shipping;
    genreCategory: GenreCategory;
    parentGenreCategories: ParentGenreCategory[];
    brand: Brand;
    parentBrands: ParentBrand[];
    janCode: string;
    payment: string;
    releaseDate: number | null;
    seller: Seller;
    delivery: Delivery;
  }
  
  