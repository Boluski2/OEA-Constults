
import { BlogPost } from '@/types/blog';
import { connectToDatabase } from '../utils/mongodb';

// Mock data for demonstration purposes
const mockPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Introduction to Geospatial Analysis',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Jane Smith',
    publishedDate: new Date('2023-05-15'),
    isPublished: true,
    likes: 24,
    tags: ['geospatial', 'GIS', 'analysis']
  },
  {
    _id: '2',
    title: 'Remote Sensing Techniques',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    author: 'John Doe',
    publishedDate: new Date('2023-06-22'),
    isPublished: true,
    likes: 18,
    tags: ['remote sensing', 'satellite', 'imagery']
  },
  {
    _id: '3',
    title: 'Draft: Future of Mapping Technologies',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus...',
    author: 'Alex Johnson',
    publishedDate: new Date('2023-07-10'),
    isPublished: false,
    likes: 0,
    tags: ['technology', 'future', 'mapping']
  }
];

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    // In a real implementation, we would connect to MongoDB
    // const db = await connectToDatabase();
    // const posts = await db.collection('posts').find({}).toArray();
    // return posts as BlogPost[];
    
    // For now, return mock data after a small delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockPosts;
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    throw error;
  }
};

export const fetchBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    // In a real implementation:
    // const db = await connectToDatabase();
    // const post = await db.collection('posts').findOne({ _id: id });
    // return post as BlogPost | null;
    
    // Mock implementation:
    await new Promise(resolve => setTimeout(resolve, 500));
    const post = mockPosts.find(post => post._id === id);
    return post || null;
  } catch (error) {
    console.error(`Failed to fetch blog post with id ${id}:`, error);
    throw error;
  }
};

export const createBlogPost = async (post: Omit<BlogPost, '_id'>): Promise<BlogPost> => {
  try {
    // In a real implementation:
    // const db = await connectToDatabase();
    // const result = await db.collection('posts').insertOne(post);
    // return { ...post, _id: result.insertedId } as BlogPost;
    
    // Mock implementation:
    await new Promise(resolve => setTimeout(resolve, 500));
    const newPost = {
      ...post,
      _id: Date.now().toString(),
      publishedDate: new Date(),
      likes: 0
    };
    return newPost;
  } catch (error) {
    console.error('Failed to create blog post:', error);
    throw error;
  }
};

export const updateBlogPost = async (id: string, updates: Partial<BlogPost>): Promise<BlogPost> => {
  try {
    // In a real implementation:
    // const db = await connectToDatabase();
    // await db.collection('posts').updateOne({ _id: id }, { $set: updates });
    // const updatedPost = await db.collection('posts').findOne({ _id: id });
    // return updatedPost as BlogPost;
    
    // Mock implementation:
    await new Promise(resolve => setTimeout(resolve, 500));
    const postIndex = mockPosts.findIndex(post => post._id === id);
    if (postIndex === -1) throw new Error('Post not found');
    
    const updatedPost = { ...mockPosts[postIndex], ...updates };
    return updatedPost;
  } catch (error) {
    console.error(`Failed to update blog post with id ${id}:`, error);
    throw error;
  }
};

export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    // In a real implementation:
    // const db = await connectToDatabase();
    // await db.collection('posts').deleteOne({ _id: id });
    
    // Mock implementation:
    await new Promise(resolve => setTimeout(resolve, 500));
    // In a real app, we would delete from the database
  } catch (error) {
    console.error(`Failed to delete blog post with id ${id}:`, error);
    throw error;
  }
};

export const togglePostPublishStatus = async (id: string, isPublished: boolean): Promise<BlogPost> => {
  return await updateBlogPost(id, { isPublished });
};
