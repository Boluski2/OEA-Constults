
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPost } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Share, ThumbsUp } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, fetch posts from MongoDB
    const fetchPosts = async () => {
      try {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - only published posts
        const mockPosts: BlogPost[] = [
          {
            _id: '1',
            title: 'Introduction to Geospatial Analysis',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
            author: 'Jane Smith',
            imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2531&auto=format&fit=crop',
            publishedDate: new Date('2023-05-15'),
            isPublished: true,
            likes: 24,
            tags: ['geospatial', 'GIS', 'analysis']
          },
          {
            _id: '2',
            title: 'Remote Sensing Techniques',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...',
            author: 'John Doe',
            imageUrl: 'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=1372&auto=format&fit=crop',
            publishedDate: new Date('2023-06-22'),
            isPublished: true,
            likes: 18,
            tags: ['remote sensing', 'satellite', 'imagery']
          },
          {
            _id: '2',
            title: 'Remote Sensing Techniques',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...',
            author: 'John Doe',
            imageUrl: 'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=1372&auto=format&fit=crop',
            publishedDate: new Date('2023-06-22'),
            isPublished: true,
            likes: 18,
            tags: ['remote sensing', 'satellite', 'imagery']
          }
        ];
        
        setPosts(mockPosts);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load blog posts',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, [toast]);

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-16 bg-oea-gray min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-oea-black animate-on-scroll">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Insights, updates, and expertise from our team of geospatial professionals.
            </p>
          </div>
          
          {isLoading ? (
            <div className="text-center py-12">
              <p>Loading blog posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-oea-black mb-4">
                  No Blog Posts Yet
                </h2>
                <p className="text-gray-600 mb-6">
                  We're working on creating amazing content for you. Check back soon!
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post._id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full transition-transform duration-300 hover:translate-y-[-5px]">
                  {post.imageUrl && (
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      {/* <Calendar size={16} />
                      <span>{new Date(post.publishedDate).toLocaleDateString()}</span> */}
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-oea-black mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                      {post.content.substring(0, 150)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags?.map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MessageSquare size={16} />
                          <span>0</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp size={16} />
                          <span>{post.likes}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Share size={14} />
                          <span>Share</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post._id}`}>
                        <Button variant="outline" size="sm">Read More</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
