import { auth } from "@/auth";
import { HomePage } from "@/views";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return <HomePage />;
};

export default Page;