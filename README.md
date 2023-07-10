# aws-landing

I was playing around with the t3 stack and trying to host it on aws amplify. 

## How did it go?

It worked but I was confused by how much amplify did in the background. I was happy with how easy amplify makes it to host an app, it has near vercel qualities in CI/CD but is slower but cheaper! Where I decided to abandon it was when I was trying to understand what resources it generated to host the app. I was trying to connect it to an RDS (aurora postgres instance) but kept getting errors that sounded like a NACL or Security Group issue but I could never figure out where my NextJS server was hosted, so I could never figure out how to unblock the connection. Which turned out to be fine, aurora postgres, serverless v2, cost me $4 after 24 hours so I finally understand why everyone uses planetscale and supabase. I deleted the aurora instance when aws showed I was going to spend $70+ a month running it!

The only thing of interest may be the amplify.yml file which extracts my supabase DATABASE_URL out of an .env file which isn't committed.

## What next?

I followed some tips from [Web Dev Cody](https://youtu.be/Szr5SNFBT3g) and am moving over to [SST.dev](https://sst.dev)
Right now that repo is private until I can figure out what needs to go into the .gitignore file. It'll be called aws-hub.
