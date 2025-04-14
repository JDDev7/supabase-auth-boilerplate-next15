import GitHubSignInButton from "../components/GithubSignInButton/GithubSignInButton";

import { signup } from "./actions";

export default function SignUpPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          className="border-2 border-gray-500 rounded-md p-1"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border-2 border-gray-500 rounded-md p-1"
          id="password"
          name="password"
          type="password"
          required
        />
        <button
          formAction={signup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Sign Up
        </button>
      </form>
      <GitHubSignInButton />
    </div>
  );
}