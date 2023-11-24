## AvatarGroup

A Material UI avatar grouo widget for Mendix. 

<img width="396" alt="Screenshot 2023-11-24 at 14 23 14" src="https://github.com/cryy-bit/avatargroup/assets/77331038/9cb1277e-f1ae-4e7f-8d4e-f0121b23e250">

## Features
The widget renders a Material-UI avatar stacked group, utilizing a Mendix datasource. Users can pass in attributes linked to the datasource, such as Name, Email, and users' images. Additionally, users can select how many avatars to display initially and the number to show as 'additional' users. Clicking on the 'additional' user avatars will display a popover to show the rest of the list.

![image](https://github.com/cryy-bit/avatargroup/assets/77331038/27c1d7e7-5e91-43b6-94c3-3e300ea73953)


## Issues, suggestions and feature requests
[[link to GitHub issues]](https://github.com/cryy-bit/avatargroup/issues)

## Development and contribution
1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
2. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

3. Actively accepting pull requests 
