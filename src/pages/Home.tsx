import React from 'react';
import Header from '../components/home-page/HeaderSection';
import BlogSection from '../components/home-page/BlogSection';
import { Divider } from '../components/home-page/Divider';
import ProjectsSection from '../components/home-page/ProjectsSection';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Divider />
      <BlogSection />
      <Divider />
      <ProjectsSection />
    </>
  );
};

export default Home;