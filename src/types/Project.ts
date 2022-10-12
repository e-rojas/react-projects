interface Project {
  sys: {
    id: string;
  };
  tags: string[];
  title: string;
  description: string;
  image: {
    url: string;
  };
}

export default Project;
