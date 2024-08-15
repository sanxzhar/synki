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

// TODO:
// Sign in via Github Auth from auth.js
// if there is already session then redirect user to dashboard page
