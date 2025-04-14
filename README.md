# Supabase Auth Boilerplate for Next.js

This is a boilerplate for Next.js with all the login and signup requirements already configured. This is for Authentication only. If you want to use the database, remember to read the docs on the ssr sections of supabase to continue configuring your project as you see fit.

https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app

## Getting Started

Download the boilerplate or clone the repo.

Configure your `.env.local` file with your supabase url and service key. Also add your other provider callback urls as you need. For example, this has a github provider already
configured that reads the callback URL from the environment file.

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
LOCAL_GITHUB_CALLBACK=<your-github-callback-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

## Install the dependencies

Install the dependencies with npm install

## Run the project and configure to your liking

Run the project with ```npm run dev```

### Disclaimer:

This project has tailwind installed. If you want to uninstall it, follow the normal procedure on that. Remember that you won't be able to use the project
untill you configure your .env.local file with your urls. If you don't want to use the Github sign in button, you can remove the GithubSignInButton component from the login page and delete the component itself.

This project has really basic css styling as I'll honestly won't bother with it since this is just for the authentication part and you will delete the styles anyway to suit your needs.



### License

MIT
