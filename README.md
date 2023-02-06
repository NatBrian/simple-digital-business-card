# Digital Business Card

*Note: Some of the contact links provided are for demonstration purposes only and are not linked to my actual contact information for privacy reasons.*

Demo deploying digital business card in Firebase:
1. `npm install -g firebase-tools`
2. `firebase login`
3. `firebase init` choose `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
4. What do you want to use as your public directory? `build`
5. Configure as a single-page app (rewrite all urls to /index.html)? `Y`
6. Set up automatic builds and deploys with GitHub? `N`
7. File build/index.html already exists. Overwrite? `N`
8. `npm run build`
9. `firebase deploy`
