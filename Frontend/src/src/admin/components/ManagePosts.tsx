
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts, deleteBlogPost, togglePostPublishStatus } from '@/backend/services/blogService';

const ManagePosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
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
    
    loadPosts();
  }, [toast]);

  const handleDeletePost = async (postId: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }
    
    try {
      await deleteBlogPost(postId);
      setPosts(posts.filter(post => post._id !== postId));
      
      toast({
        title: 'Post deleted',
        description: 'The post has been successfully deleted',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete post',
        variant: 'destructive',
      });
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      const updatedPost = await togglePostPublishStatus(post._id as string, !post.isPublished);
      setPosts(posts.map(p => p._id === post._id ? updatedPost : p));
      
      toast({
        title: updatedPost.isPublished ? 'Post published' : 'Post unpublished',
        description: `"${post.title}" has been ${updatedPost.isPublished ? 'published' : 'unpublished'}`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update post status',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-center py-8">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Manage Posts</h2>
      
      {posts.length === 0 ? (
        <p className="text-center py-8">No posts found. Create your first post!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(post.publishedDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.isPublished 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleTogglePublish(post)}
                      >
                        {post.isPublished ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Link 
                        to={`/blog/${post._id}`} 
                        target="_blank" 
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye size={16} />
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDeletePost(post._id as string)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManagePosts;
