"use client";
import { signIn } from "next-auth/react";

export const HomePage = () => {
  const handleSignIn = () => {
    signIn("github");
  };

  return <button onClick={handleSignIn}>Sign In</button>;
};
