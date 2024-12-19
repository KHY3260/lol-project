export interface Item {
  id: string;
  name: string;
  description: string;
  gold: {
    base: number;
    total: number;
    sell: number;
  };
  imageUrl: string;
  image: {
    full: string;
  };
}

export interface ItemData {
  name: string;
  description: string;
  gold: {
    base: number;
    total: number;
    sell: number;
  };
  from?: string[];
  into?: string[];
  image: {
    full: string;
  };
}
