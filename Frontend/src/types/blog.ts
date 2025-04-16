
export interface BlogPost {
  _id?: string;
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
  tags?: string[];
  publishedDate: Date;
  isPublished: boolean;
  likes: number;
}

export interface Comment {
  _id?: string;
  postId: string;
  author: string;
  content: string;
  createdAt: Date;
  likes: number;
}

export interface AdminUser {
  username: string;
  password: string; // This would be hashed in a real application
  isAdmin: boolean;
}
