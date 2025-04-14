"use client";
import Link from "next/link";
import React from "react";


function LoginButton() {
// code to get the session from supabase from a client component in case you want to 
// conditionally render the signout button

  // const supabase = createClient();
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   const getSession = async () => {
  //     const { data } = await supabase.auth.getSession();
  //     setSession(data.session);
  //     console.log(data.session);
  //   };

  //   getSession();
  // }, []);

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link href="/login">Log in</Link>
    </button>
);
}

export default LoginButton;
