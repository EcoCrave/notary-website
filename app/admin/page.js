import Admin from "../Components/Admin/Admin";

export const metadata = {
  title: "Admin Page",
  description:
    "This is the page that a admin is going to use to play with user's data",
};
const page = () => {
  return (
    <>
      <Admin />
    </>
  );
};

export default page;
