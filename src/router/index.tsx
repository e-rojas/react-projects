import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import BlogDetails from '../pages/BlogDetails';
import Home from '../pages/Home';
import DevJobsDashboard from '../projects/dev-jobs-dashboard';
import PokemonClient from '../projects/pokemon-client';
import PomodoroProject from '../projects/pomodoro';
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='blog/:id' element={<BlogDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetails />} />
          <Route path='/dev-jobs-dashboard/*' element={<DevJobsDashboard />} />
          <Route path='projects/pokemon' element={<PokemonClient />} />
          <Route path='projects/pomodoro' element={<PomodoroProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
