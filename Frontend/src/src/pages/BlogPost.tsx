import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPost as BlogPostType, Comment } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  ThumbsUp, 
  ArrowLeft, 
  Share, 
  Copy, 
  Twitter, 
  Facebook, 
  Linkedin, 
  X 
} from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useAuth } from '@/context/AuthContext';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [showSharePopover, setShowSharePopover] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated, isAdmin } = useAuth();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    // In a real app, fetch post from MongoDB
    const fetchPost = async () => {
      try {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data for specific post
        if (id === '1') {
          setPost({
            _id: '1',
            title: 'Introduction to Geospatial Analysis',
            content: `
            <p>Geospatial analysis is a vital field that involves collecting, displaying, and manipulating imagery, GPS, satellite photography, and historical data, described explicitly in terms of geographic coordinates or implicitly, in terms of a street address, postal code, or forest stand identifier as they are applied to geographic models.</p>
            
            <h2>Why is Geospatial Analysis Important?</h2>
            <p>Geospatial analysis allows us to solve complex location-oriented problems. It extends far beyond simple mapping to allow us to:</p>
            <ul>
              <li>Analyze data with respect to its spatial distribution</li>
              <li>Create predictive models based on spatial patterns</li>
              <li>Optimize resource allocation and distribution</li>
              <li>Plan infrastructure development with geographical constraints in mind</li>
              <li>Respond to natural disasters and emergencies more effectively</li>
            </ul>
            
            <h2>Key Components of Geospatial Analysis</h2>
            <p>Modern geospatial analysis relies on several key technologies and methodologies:</p>
            
            <h3>Geographic Information Systems (GIS)</h3>
            <p>GIS provides the fundamental framework for storing, analyzing, and visualizing spatial data. It combines layers of information to give you a better understanding of a place.</p>
            
            <h3>Remote Sensing</h3>
            <p>Remote sensing involves gathering information about the Earth's surface using satellites or aircraft. This technology allows us to monitor changes over time and collect data from areas that are difficult to access.</p>
            
            <h3>Global Positioning Systems (GPS)</h3>
            <p>GPS technology enables precise location determination, which is crucial for many geospatial applications, including navigation, surveying, and tracking.</p>
            
            <h2>Applications in Various Industries</h2>
            <p>Geospatial analysis has found applications across numerous industries:</p>
            <ul>
              <li>Urban Planning: Optimizing city layouts and infrastructure</li>
              <li>Agriculture: Precision farming and crop yield prediction</li>
              <li>Environmental Management: Monitoring deforestation and pollution</li>
              <li>Telecommunications: Network planning and coverage optimization</li>
              <li>Retail: Site selection and market analysis</li>
              <li>Transportation: Route optimization and traffic management</li>
            </ul>
            
            <h2>Future Trends</h2>
            <p>The field of geospatial analysis continues to evolve with advances in technology. Some emerging trends include:</p>
            <ul>
              <li>Integration with artificial intelligence and machine learning</li>
              <li>Real-time analytics and IoT integration</li>
              <li>3D and 4D spatial analysis</li>
              <li>Augmented reality applications</li>
              <li>Increased use of drone-collected data</li>
            </ul>
            
            <p>As computational power increases and data collection becomes more sophisticated, the capabilities of geospatial analysis will continue to expand, offering new insights and solutions to complex spatial problems.</p>
            `,
            author: 'Jane Smith',
            imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2531&auto=format&fit=crop',
            publishedDate: new Date('2023-05-15'),
            isPublished: true,
            likes: 24,
            tags: ['geospatial', 'GIS', 'analysis']
          });
          
          // Mock comments for this post
          setComments([
            {
              _id: 'c1',
              postId: '1',
              author: 'Mark Johnson',
              content: 'Great introduction to geospatial analysis! I would love to see more technical details in future posts.',
              createdAt: new Date('2023-05-16'),
              likes: 5
            },
            {
              _id: 'c2',
              postId: '1',
              author: 'Sarah Williams',
              content: 'This helped me understand the basics. Thanks for sharing!',
              createdAt: new Date('2023-05-17'),
              likes: 3
            }
          ]);
        } else if (id === '2') {
          setPost({
            _id: '2',
            title: 'Remote Sensing Techniques',
            content: `
            <p>Remote sensing is the science of obtaining information about objects or areas from a distance, typically from aircraft or satellites. Remote sensing techniques have revolutionized how we observe and analyze the Earth's surface.</p>
            
            <h2>Key Remote Sensing Technologies</h2>
            <p>Remote sensing encompasses various technologies that capture different types of data:</p>
            
            <h3>Optical Sensors</h3>
            <p>These sensors detect visible, near-infrared, and short-wave infrared wavelengths. They're excellent for mapping vegetation, urban areas, and water bodies. Examples include Landsat, Sentinel-2, and WorldView satellites.</p>
            
            <h3>Thermal Sensors</h3>
            <p>By detecting heat emissions, thermal sensors can map temperature differences across landscapes. This is particularly useful for monitoring volcanic activity, urban heat islands, and forest fires.</p>
            
            <h3>Radar Systems</h3>
            <p>Radar can penetrate clouds and darkness, making it invaluable for areas with persistent cloud cover. Synthetic Aperture Radar (SAR) systems like Sentinel-1 can provide detailed information about surface texture, moisture content, and even subtle ground movements.</p>
            
            <h3>LiDAR</h3>
            <p>Light Detection and Ranging (LiDAR) uses laser pulses to create precise 3D models of the Earth's surface. It's particularly useful for mapping forest structure, precise elevation models, and detailed urban mapping.</p>
            
            <h2>Applications of Remote Sensing</h2>
            <p>Remote sensing techniques support a wide range of applications:</p>
            <ul>
              <li>Agriculture: Crop health monitoring, yield forecasting, and precision agriculture</li>
              <li>Forestry: Forest inventory, deforestation monitoring, and biomass estimation</li>
              <li>Disaster Management: Flood mapping, fire detection, and damage assessment</li>
              <li>Urban Planning: Land use mapping, infrastructure monitoring, and urban growth analysis</li>
              <li>Water Resources: Water quality assessment, snow cover mapping, and glacier monitoring</li>
              <li>Climate Studies: Long-term monitoring of environmental changes related to climate</li>
            </ul>
            
            <h2>Processing and Analysis Techniques</h2>
            <p>Raw remote sensing data requires processing before it can provide meaningful insights:</p>
            <ul>
              <li>Radiometric Correction: Adjusting for atmospheric effects and sensor calibration</li>
              <li>Geometric Correction: Ensuring accurate positioning and removing distortions</li>
              <li>Image Enhancement: Improving visual interpretability through contrast adjustments and filtering</li>
              <li>Image Classification: Categorizing pixels into meaningful classes like vegetation, water, and urban areas</li>
              <li>Change Detection: Identifying changes between images taken at different times</li>
            </ul>
            
            <h2>Future Directions</h2>
            <p>Remote sensing continues to advance with new technologies and methodologies:</p>
            <ul>
              <li>Hyperspectral Imaging: Capturing hundreds of spectral bands for detailed material identification</li>
              <li>Small Satellite Constellations: Providing higher temporal resolution with frequent revisits</li>
              <li>Machine Learning Integration: Automating analysis and extracting insights from vast amounts of data</li>
              <li>Data Fusion: Combining multiple sensor types for more comprehensive analysis</li>
            </ul>
            
            <p>As technology advances and becomes more accessible, remote sensing will continue to play a critical role in our understanding and management of Earth's resources and environments.</p>
            `,
            author: 'John Doe',
            imageUrl: 'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=1372&auto=format&fit=crop',
            publishedDate: new Date('2023-06-22'),
            isPublished: true,
            likes: 18,
            tags: ['remote sensing', 'satellite', 'imagery']
          });
          
          // Mock comments for this post
          setComments([
            {
              _id: 'c3',
              postId: '2',
              author: 'David Chen',
              content: 'I work with LiDAR data and this article provides a great overview of the technology. Would love to see a deep dive into LiDAR processing techniques.',
              createdAt: new Date('2023-06-23'),
              likes: 7
            }
          ]);
        } else {
          // If ID doesn't match our mock data
          toast({
            title: 'Post not found',
            description: 'The requested blog post could not be found',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load blog post',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
    
    // Check if user has liked the post before (from localStorage)
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
    if (likedPosts[id as string]) {
      setHasLiked(true);
    }
  }, [id, toast]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commentName.trim() || !commentEmail.trim() || !commentContent.trim()) {
      toast({
        title: 'Missing information',
        description: 'Please enter your name, email, and comment',
        variant: 'destructive',
      });
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(commentEmail)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmittingComment(true);
    
    try {
      // In a real app, send comment to MongoDB
      console.log('Submitting comment:', { name: commentName, email: commentEmail, content: commentContent });
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Create a new comment object
      const newComment: Comment = {
        _id: `c${Date.now()}`,
        postId: id as string,
        author: commentName,
        content: commentContent,
        createdAt: new Date(),
        likes: 0
      };
      
      // Update local state
      setComments([...comments, newComment]);
      
      // Reset form
      setCommentName('');
      setCommentEmail('');
      setCommentContent('');
      
      toast({
        title: 'Comment submitted',
        description: 'Your comment has been added successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit comment',
        variant: 'destructive',
      });
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleLikePost = async () => {
    if (hasLiked) return;
    
    try {
      // In a real app, send like to MongoDB
      console.log('Liking post:', id);
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update local state
      if (post) {
        const updatedPost = { ...post, likes: post.likes + 1 };
        setPost(updatedPost);
        setHasLiked(true);
        
        // Store liked state in localStorage
        const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
        likedPosts[id as string] = true;
        localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
        
        toast({
          title: 'Post liked',
          description: 'Thanks for your appreciation!',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to like post',
        variant: 'destructive',
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        title: 'Link copied',
        description: 'Post URL copied to clipboard',
      });
      setShowSharePopover(false);
    });
  };

  const shareViaWebAPI = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: `Check out this article: ${post?.title}`,
        url: currentUrl,
      })
      .then(() => {
        console.log('Successfully shared');
        setShowSharePopover(false);
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      copyToClipboard();
    }
  };

  const shareSocial = (platform: string) => {
    let shareUrl = '';
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(post?.title || 'Interesting article');
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      default:
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
      setShowSharePopover(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <section className="pt-32 pb-16 bg-oea-gray min-h-screen">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center py-12">
              <p>Loading blog post...</p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="pt-32 pb-16 bg-oea-gray min-h-screen">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-oea-black mb-4">
                Blog Post Not Found
              </h2>
              <p className="text-gray-600 mb-8">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/blog">
                <Button>Return to Blog</Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-16 bg-oea-gray min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-oea-blue mb-6 hover:underline">
            <ArrowLeft size={16} className="mr-1" /> Back to Blog
          </Link>
          
          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            {post.imageUrl && (
              <div className="h-72 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                {/* <Calendar size={16} />
                <span>{new Date(post.publishedDate).toLocaleDateString()}</span> */}
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-oea-black mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags?.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div 
                className="prose prose-lg max-w-none mb-8" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="border-t border-gray-200 pt-6 mt-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLikePost}
                    disabled={hasLiked}
                    className={`flex items-center gap-1 ${hasLiked ? 'text-oea-blue' : 'text-gray-600 hover:text-oea-blue'}`}
                  >
                    <ThumbsUp size={18} />
                    <span>{post.likes}</span>
                  </button>

                  <Popover open={showSharePopover} onOpenChange={setShowSharePopover}>
                    <PopoverTrigger asChild>
                      <button 
                        className="flex items-center gap-1 text-gray-600 hover:text-oea-blue"
                      >
                        <Share size={18} />
                        <span>Share</span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-4">
                      <h4 className="text-sm font-semibold mb-3">Share this article</h4>
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        <button 
                          onClick={() => shareSocial('twitter')}
                          className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100"
                        >
                          <Twitter className="h-5 w-5 text-gray-700" />
                          <span className="text-xs mt-1">Twitter</span>
                        </button>
                        <button 
                          onClick={() => shareSocial('facebook')}
                          className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100"
                        >
                          <Facebook className="h-5 w-5 text-gray-700" />
                          <span className="text-xs mt-1">Facebook</span>
                        </button>
                        <button 
                          onClick={() => shareSocial('linkedin')}
                          className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100"
                        >
                          <Linkedin className="h-5 w-5 text-gray-700" />
                          <span className="text-xs mt-1">LinkedIn</span>
                        </button>
                        <button 
                          onClick={shareViaWebAPI}
                          className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-100"
                        >
                          <Share className="h-5 w-5 text-gray-700" />
                          <span className="text-xs mt-1">Share</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="text" 
                          value={currentUrl} 
                          className="flex-grow text-xs p-2 border rounded-l-md focus:outline-none truncate bg-gray-50"
                          readOnly
                        />
                        <button 
                          onClick={copyToClipboard}
                          className="bg-gray-100 p-2 border border-l-0 rounded-r-md hover:bg-gray-200"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm">Edit Post</Button>
                  </Link>
                )}
              </div>
            </div>
          </article>
          
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-oea-black mb-6">
              Comments ({comments.length})
            </h2>
            
            <div className="space-y-6 mb-8">
              {comments.length === 0 ? (
                <p className="text-gray-600">Be the first to comment on this post!</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment._id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold">{comment.author}</h3>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))
              )}
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-oea-black mb-4">Leave a Comment</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    value={commentEmail}
                    onChange={(e) => setCommentEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Comment
                  </label>
                  <Textarea 
                    id="comment"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    className="min-h-[120px]"
                    placeholder="Share your thoughts..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-oea-blue hover:bg-oea-darkBlue"
                  disabled={isSubmittingComment}
                >
                  {isSubmittingComment ? 'Posting...' : 'Post Comment'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost;