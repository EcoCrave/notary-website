import { useRouter } from "next/router";
const singleUserData = () => {
  const route = useRouter();
  const { id } = route.query;
  console.log(id);
  return <div>this is the single uer data</div>;
};

export default singleUserData;
