import Dashboard from "../Components/Admin/Dashboard";
import ProjectStats from "../Components/Admin/ProjectStatus";
export const metadata = {
  title: "Admin Page",
  description:
    "This is the page that a admin is going to use to play with user's data",
};
const page = () => {
  return (
    <div className="mt-20">
      <ProjectStats />
      <Dashboard />
    </div>
  );
};

export default page;
