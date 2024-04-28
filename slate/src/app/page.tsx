// SignInWithGoogle.tsx
"use client";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../firebaseconfig";
import FileUpload from "@/components/file-upload";
import { useRouter } from "next/navigation";

const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

const SignInWithGoogle: React.FC = () => {
  useEffect(() => {
    initializeFirebase();
  }, []);

  // State to hold user information
  const [user, setUser] = useState<any>(null); // Provide initial state value of null

  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      setUser(user); // Set the user state with the signed-in user
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const router = useRouter();
  const handleRedirectToSummarize = () => {
    // Redirect to the summarize page
    router.push('/summarize');
  };

  return (
    <div>
      {user ? (
        <>
          <p>Hello {user.displayName}</p>
          <button onClick={handleRedirectToSummarize}>Go to Summarize Page</button>
        </>
      ) : (
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      )}
      <FileUpload />
    </div>
  );
};

export default SignInWithGoogle;
