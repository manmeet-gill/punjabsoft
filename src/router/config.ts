const routes = [
  {
    path: "/",
    component: "Home",
    exact: true,
  },
  {
    path: "/job/:id", // Route for job details
    component: "JobDetails",
    exact: true,
  },
];

export default routes;
