# Games list App

This project displays list of games for test task.\
I`ve tested it on node version of v14.18.1 and browser screen size of 1833x900 px.\
Get request described in test assignment are not working, so I have copied data from requests on levelupcasino5.com and made a static game url.
If they will start working - I can change them.\
Currently I'm rendering 8 games per page instead of 10 from assignment. This amount can be changed in utils/constants.ts in pageSize constant.
Reason for this is that for that is that for this I will have to have 2 or 5 items per raw and for my screen size it will require too big/small image size in my opinion(or very big gaps between them).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
