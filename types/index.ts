export type PostType = {
  node: {
    author: {
      id: string;
      name: string;
      bio: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    title: string;
    slug: string;
    categories: Categories[];
  };
};

export interface Categories {
  name: string;
  slug: string;
}
