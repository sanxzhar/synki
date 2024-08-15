import { auth } from "@/auth";
import { DashBoardPage } from "@/views";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return <DashBoardPage />;
};

export default Page;
