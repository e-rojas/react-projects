interface Project {
    sys: {
        id: string;
    };
    tags: string[];
    link: string;
    title: string;
    description: string;
    brief: string;
    inProgress: boolean;
    image: {
        url: string;
    };
}

export default Project;
