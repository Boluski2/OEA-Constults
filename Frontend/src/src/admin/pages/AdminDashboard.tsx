
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogPostEditor from '@/admin/components/BlogPostEditor';
import ManagePosts from '@/admin/components/ManagePosts';

const AdminDashboard = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-16 bg-oea-gray min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-oea-black mb-4">Blog Admin Dashboard</h1>
            <p className="text-gray-600">Manage your blog posts, comments, and settings</p>
          </div>
          
          <Tabs defaultValue="new-post" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="new-post">New Post</TabsTrigger>
              <TabsTrigger value="manage-posts">Manage Posts</TabsTrigger>
            </TabsList>
            <TabsContent value="new-post">
              <BlogPostEditor />
            </TabsContent>
            <TabsContent value="manage-posts">
              <ManagePosts />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
