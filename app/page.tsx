// This is a supabase boilerplate with all the login and signup requirements already configured. This is for Authentication only.
// If you want to use the database, remember to read the docs on the ssr sections of supabase to continue configuring your project as you see fit.
// This main page can be modified as you want.
// Remember that this project has tailwind installed. If you want to uninstall it, follow the normal procedure on that.

import LoginButton from "./components/LoginButton/LoginButton";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          Supabase Auth Boilerplate
        </h1>
        <LoginButton />
      </div>
    </main>
  );
}
