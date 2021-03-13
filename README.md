## Project Background
The Block Marketplace’s purpose is to connect the thousands of UCLA students who attempt to sell furniture, textbooks, meal swipes, and more to each other. Currently, the main sites used for this are Facebook Marketplace and Craigslist, neither of which provide a super secure way to verify the buyer and seller are who they say they are.

The site is built using React, NodeJS, and MongoDB.

## Quick Start

1. Clone this repository

```
git clone https://github.com/PaigeBrown577/gene-block-marketplace.git
cd gene-block-marketplace
```


2. Install all the dependencies

```
npm install
```
3. Run the frontend

```
cd client
npm start
```
4. Run the backend -- open another terminal window and:
```
cd gene-block-marketplace
cd server
node index.js
```
## Project Description
Once you run the project, you will be brought to the site on your default browser. The initial homepage looks like this:

<img width="1465" alt="HomePage" src="https://user-images.githubusercontent.com/78663982/111019606-262fa100-8375-11eb-9090-ed388936cbc6.png">

As you can see, on the top right and middle you can click Login or Signup (if you're new). On the bottom you can also view our Facebook, GitHub, and Instagram page. If you were to click Signup, you're brought to the signup page:

<img width="1463" alt="Signup" src="https://user-images.githubusercontent.com/78663982/111019672-b837a980-8375-11eb-9b15-d8ea38f92216.png">

Once you're here, you can input your information which is all going to be tied to your email account. If you enter an invalid email or a password less than 8 characters, the site will make you fix your errors. After you sign up and log in, then you're brought to the main feed:

<img width="1464" alt="MainFeed" src="https://user-images.githubusercontent.com/78663982/111019721-ea490b80-8375-11eb-9ede-f75be31fc71d.png">

Here you can see all the most recent posts done by other users, as well as a sidebar with the different pages that you can visit. To create a new listing, we'll head over to "Create New Listing":

<img width="1463" alt="CreateNewListing" src="https://user-images.githubusercontent.com/78663982/111019749-0056cc00-8376-11eb-8f24-afb216a9129c.png">

After you create your new listing, it will appear under your previous posts, as well as back on the main page. Another user scrolling through their feed who comes upon your post can message you if they're interested, which would appear under the "Messages" tab:

<img width="1462" alt="Messages" src="https://user-images.githubusercontent.com/78663982/111019758-0ea4e800-8376-11eb-9419-9c30afe0a799.png">

Here you can see all your past messages that you received from other people. On the explore page, you can filter by posts depending on the tag of the post (books, furniture, meal swipes, and other):




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory (specifically in the "client" folder), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

----------------------------------

In the project directory (specifically in the "server" folder), you can run:

### `node index.js`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Running both "npm start" and "node index.js" will allow you to run the site in development mode with both frontend and backend functioning.

---------------------------------

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
