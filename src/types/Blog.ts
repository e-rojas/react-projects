interface Blog {
  sys: {
    id: string;
  };
  author: string;
  date: Date;
  tags: string[];
  title: string;
  image: {
    url: string;
  };
  summary: string;
  content: any;
}

export default Blog;
