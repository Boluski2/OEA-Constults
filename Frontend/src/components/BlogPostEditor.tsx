
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/types/blog';

const BlogPostEditor = ({ post }: { post?: BlogPost }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<BlogPost>({
    defaultValues: post || {
      title: '',
      content: '',
      author: '',
      tags: [],
      isPublished: false,
      publishedDate: new Date(),
      likes: 0,
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(post?.tags || []);

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (data: BlogPost) => {
    setIsSubmitting(true);
    
    // Add tags to form data
    data.tags = tags;
    
    try {
      // In a real application, this would send data to your MongoDB backend
      console.log('Submitting post:', data);
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: post ? "Post updated" : "Post created",
        description: `Successfully ${post ? "updated" : "created"} "${data.title}"`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${post ? "update" : "create"} post`,
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{post ? 'Edit Post' : 'Create New Post'}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <Input 
            id="title"
            {...register("title", { required: "Title is required" })} 
            className={errors.title ? "border-red-500" : ""}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <Input 
            id="author"
            {...register("author", { required: "Author is required" })} 
            className={errors.author ? "border-red-500" : ""}
          />
          {errors.author && (
            <p className="mt-1 text-sm text-red-600">{errors.author.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <Textarea 
            id="content"
            {...register("content", { required: "Content is required" })} 
            className={`min-h-[200px] ${errors.content ? "border-red-500" : ""}`}
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Image URL (optional)
          </label>
          <Input 
            id="imageUrl"
            {...register("imageUrl")} 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags
          </label>
          <div className="flex gap-2 mb-2">
            <Input 
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add a tag"
            />
            <Button type="button" onClick={addTag}>
              Add
            </Button>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map(tag => (
                <div key={tag} className="bg-gray-100 px-2 py-1 rounded-md flex items-center gap-1">
                  <span>{tag}</span>
                  <button 
                    type="button" 
                    onClick={() => removeTag(tag)}
                    className="text-xs hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center">
          <input
            id="isPublished"
            type="checkbox"
            {...register("isPublished")} 
            className="h-4 w-4 text-oea-blue focus:ring-oea-blue border-gray-300 rounded"
          />
          <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-700">
            Publish immediately
          </label>
        </div>

        <Button 
          type="submit" 
          className="bg-oea-blue hover:bg-oea-darkBlue"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
        </Button>
      </form>
    </div>
  );
};

export default BlogPostEditor;
