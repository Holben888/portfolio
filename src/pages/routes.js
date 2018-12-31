const routes = [
  {
    path: "/",
    component: 'Home',
    icon: "education"
  },
  {
    path: "/projects",
    component: 'Fake',
    icon: "projects"
  },
  {
    path: "/games",
    component: 'Fake',
    icon: "game-shelf"
  },
  {
    path: "/about",
    component: 'Fake',
    icon: "about"
  },
]
const matchingRoute = (path) => routes.find(route => route.path === path) || routes[0];

module.exports = {
  routes: routes,
  matchingRoute: matchingRoute,
}