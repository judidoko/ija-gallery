# React + Vite

To run this React + vite project locally,
1==you need to install the following:

-Node.js (with npm or yarn)
-Git (if the project is hosted on a Git repository)
-Code editor (e.g., Visual Studio Code)

2==Clone the Repository;

git clone https://github.com/judidoko/ija-gallery.git

3==Navigate to the Project Directory:

cd your-react-project(ija-images)

4==Install Dependencies;

npm install

# or

yarn install

5==Configuration: The project data was gotten from from an API called pexels api.
Sign up to the pexels API website: https://www.pexels.com/api/,
get your API KEY and create an ".env" file on your src folder, save the your API KEY with the variable vite"\_PUBLIC_API_KEY" and save.
The project is also authenticated using firebase authentication sign up to https://firebase.google.com/ to create a project and get the firebase API KEY and other web app's Firebase configurations change them with the ones on the project's firebase folder-config file

6==Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [ Local: http://localhost:5173/] with your browser to see the result.
