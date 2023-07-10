Hello everybody
this is a simple react native base project. you can use this project to build others projects using a configuration of many libraries like redux, react-navigation and supabase
this project includes examples to create a CRUD with and authentication with supabase

Installation

- clone this repository
- install dependencies
```
yarn install
```
o
```
npm install
```

- create a project in supabase and configure your .env file. you can use .env.example file, just rename to .env and add yours credentials

- access to supabase in your project with the code bellow

```
npx supabase login
```
- when supabase request the access token you need to go to the url in the top of message in cosole to get the access token https://supabase.com/dashboard/account/tokens and generate your access token with the name types or the name that you want
 
- copy your access token when the command npx supabase login request them

- finally run this command to generate the types for typescript in your app. (you can run this code again when you create others tables in your database)

```
yarn gen:types
```
or
```
npm run gen:types
```








- generate your access token in supabase