import profile from '../assets/profile.jpeg';
import Delay from '../components/Delay.animation';

const About = () => {
  return (
    <Delay delay={500}>
      <div className=' w-100 grid-4'>
        <section className='grid-col-span-2 h-100 p-2'>
          <h1>Bio</h1>
          <p>
            I’m a front-end developer always looking to improve my full-stack
            skills. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Moncton, NB, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
        </section>
        <figure className='grid-col-span-2 p-2 center h-100'>
          <Delay delay={300}>
            <img loading='lazy' src={profile} alt='placeholder' width={200} />
          </Delay>
        </figure>
      </div>
    </Delay>
  );
};

export default About;
