
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const routes = [
  {
    path: "/contact",
    title: "Contact",
    component: Contact,
    pos: 3
  },
  {
    path: "/work",
    title: "Work",
    component: Work,
    pos: 2
  },
  {
    path: "/about",
    title: "About",
    component: About,
    pos: 1
  },
  {
    path: "/",
    title: "Home",
    component: Home,
    pos: 0,
  },
];

export default routes;