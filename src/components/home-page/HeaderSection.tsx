import React from 'react';
import profile from '../../assets/profile.jpeg';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
const Header: React.FC = () => {
  return (
    <>
      <header className='grid grid-cols-1 md:grid-cols-6 gap-4 text-gray-600'>
        <div className=' p-3 md:col-span-4  md:order-first'>
          <h1 className='text-4 mb-2 font-bold'>Welcome</h1>
          <img
            className='rounded w-16 float-left mr-3'
            loading='lazy'
            src={profile}
            alt='placeholder'
          />
          <p className='text-justify'>
            I am a full-stack developer with in React, Ember, Node, Typescript,
            and Mongo. I have a deep understanding of React, a JavaScript
            library for building user interfaces, which allows me to create
            highly interactive and dynamic web applications. I also have
            experience with Ember, a JavaScript framework that enables me to
            build ambitious web applications with a solid foundation.
            Furthermore, I am proficient in Node, a JavaScript runtime that
            allows me to develop back-end services and APIs, as well as in
            TypeScript, a typed superset of JavaScript that enables me to write
            robust and maintainable code. Lastly, I am well-versed in Mongo, a
            NoSQL database management system that allows me to handle large
            amounts of data and provides high performance and scalability.
          </p>
          <p>
            Thanks for visiting my site/blog, where I share my thoughts and
            experiences on building web applications with React, Typescript, and
            MongoDB. In this blog, you'll find tutorials, tips, and best
            practices on how to use these technologies effectively to build
            scalable, maintainable, and high-performing web applications.
            Whether you're a beginner or an experienced developer, I hope this
            blog will provide valuable insights and help you improve your skills
            in building web applications with React, Typescript, and MongoDB.
            So, let's dive in and start exploring the world of web development
            together!
          </p>
          <div className='social-links flex justify-end'>
            <a
              href='https://www.linkedin.com/in/edgar-rojas-developer/'
              className='flex relative flex-col flex-shrink-0 py-1 px-4 mx-2 bg-sky-500 text-white  rounded-full w-min hover:bg-black hover:text-white'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href='https://github.com/e-rojas'
              className='flex relative flex-col flex-shrink-0 py-1 px-4 mx-2 bg-slate-700 text-white  rounded-full w-min hover:bg-black hover:text-white'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubAlt size={30} />
            </a>
          </div>
        </div>
        <div className='header-img hidden md:flex md:col-span-2 p-3  grid content-center justify-center order-last'></div>
      </header>
    </>
  );
};

export default Header;
