# PetSoft
> This is one of the projects from the "Professional React & Next.js" course by ByteGrad. We built an app which allows the user to track the pets which are under his care.



## General Information
- The aim of this project was to build a cutting-edge Next.js application with full CRUD functionality, optimistic UI, server actions, auth and payments.
- I got introduced to a lot of new concepts with regards to the new React Server Components paradigm in combination with authentication, form management etc.
- The project also was my first contact with using a payment provider like Stripe to process payments using their APIs.



## Technologies Used
- React 18
- TypeScript 5.3.3
- Next JS 14.1.0
- Tailwind 3.3.0
- Prisma 5.10.2
- Next-Auth 5.0.0 (Beta 4)
- Zod (3.22.4)
- Stripe (15.1.0)
- Radix UI
- Bcrypt (5.1.1) / BcryptJS (2.4.3)



## Features
- Sign up / Login, every user can only see the animals which are under his care
- Payment, in order to use the app the user needs to pay a single fee for lifetime access to the app
- Once registered and payed, the user can add / edit / remove pets which are under his care
- The user can provide details for each animal under his care (e.g., name, owner name, allergies etc.)



## Screenshots
![Example screenshot](https://i.ibb.co/HKCxvLq/petsoft-example.jpg)



## Demo
Live demo [_here_](https://bg-petsoft.vercel.app/).



## Setup
The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Install NPM packages in the project folder by running
```
npm install
```
in the terminal.
3. Run the app 
```
npm run dev
```
4. Visit localhost:5173 in your browser

- You will need to set up your own PostgreSQL database and connect it to the app.
- You will need an AUTH_SECRET env-variable in order to use the signup/login functionality and access the protected routes.
- You will need to hook up the app to stripe using webhooks in order to simulate the payment flow.
- You will need to provide a CANONICAL_URL env-variable to indicate which port you are using locally (e.g., localhost:3000).



## Learnings
- Structuring a Full-Stack NextJS application in an efficient way e.g., to share layouts
- Separation of concerns regarding components (e.g., no layout styles in components which can hinder reusability)
- Handling of form data (e.g., accessing form data using methods like formData.get)
- Triggering server actions (e.g., using the action attribute from forms instead of an onSubmit event handler)
- Combining React-Hook-Form with zod in order to handle input validation more efficiently (using resolvers)
- Using errors and error codes provided by Prisma (e.g., for already used email)
- Creating and updating an JWT Token on the client using API routes
- Wiring up stripe with the user of their API and webhooks to implement a payment flow (e.g., verify a stripe webhook using a stripe event)



## Project Status
The project is basically finished. I may dabble into it in the future to experiment with some things. 



## Acknowledgements
- This project is part of the [Professional React & Next.js Course](https://bytegrad.com/app/professional-react-and-nextjs/) from ByteGrad.



