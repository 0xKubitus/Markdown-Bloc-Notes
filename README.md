<div align="center">

[![THP Badge](https://github.com/0xKubitus/Usefull-Stuff-for-README/blob/main/assets/mkdwn-badges/the-hacking-project.svg)](https://www.thehackingproject.org/)

</br>

# my Markwown Previewer Notepad (React App)

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

</br>
</br>

## React Single Page App practice, including:

</br>

</div>

#### -> React Components, State & LifeCycle => useState() & useEffect() hooks;

#### -> conditional rendering;

#### -> JS functions .filter() / .sort() & .map();

#### -> localStorage



</br>
<hr>
</br>




<details>
<summary>
CLICK ME TO READ THE HACKING PROJECT INSTRUCTIONS (in English)
</summary>
<br>



# 1. INTRODUCTION

One of the most-famous applications in the world is the simple notepad. Available on Windows as on Mac, the notepad can be used at any time, and for everyone.

Your goal today will be to create your own Notepad using React. Inside your application, you can write in markdown, and your text will be displayed live as HTML.

If you don't know how to write in markdown, it's easy, don't worry: follow <a href="https://guides.github.com/features/mastering-markdown/">this link</a>.

All notes will be stored in localStorage. This way, you don't risk any problems with the GDPR.

</br>

</br>

# 2. PROJECT INSTRUCTIONS

Your application will consist of several parts.

On the left, the user will have access to a navigation bar. This will contain the list of your notes. The user will be able to see a title and the beginning of the text (~15 words). The user can create a new note by clicking the top button. On the right, taking ~80% of the width, the user will see the content of the selected note, nicely formatted in HTML, in the top part.

In the lower part, a text field (input) allowing to define the name of the note, as well as another field (textarea) allowing to modify the content of the note in markdown.



To convert your markdown into HTML, you can use the lib <a href="https://github.com/showdownjs/showdown">"showdown"</a>. It allows you to transform markdown into HTML, and vice versa. It is thanks to this that the markdown will be displayed in HTML and live, on the top part. By clicking on "save", the user saves the note. That is, if he reloads the page, his note is still visible in the list on the left. It will therefore be necessary to save the notes in the localStorage.

The user can change the note by clicking on one of them in the list on the left. He can modify it as he wishes.


</br>

</br>

# 3. EXPECTATIONS SUMMARY

The expected delivery is a gitHub repo containing your application.

<ul>
  <li>User can add a note.</li>
  <li>User can edit a note.</li>
  <li>The user can view a note.</li>
  <li>User can switch between ratings to see which one they like.</li>
</ul>

[OPTIONAL] The "save" button no longer exists, and the notes are saved regularly or at each change in the text.



</br>
</br>
</br>


</details>


</br>
<hr>
</br>

<details>
<summary>
CLIQUER POUR LIRE LES CONSIGNES DE THE HACKING PROJECT (en  Français)
</summary>
<br>

# 1. INTRODUCTION

L'une des applications les plus connues au monde est le simple bloc-notes. Disponible sur Windows comme sur Mac, ce dernier peut servir à n'importe quel moment, et pour tout le monde.

Ton objectif, aujourd'hui, sera de créer un bloc-notes. Dans celui-ci, tu pourras écrire en markdown, et ton texte sera affiché en live sous forme de HTML.

Si tu ne sais pas comment écrire en markdown, c'est facile, ne t'en fais pas : suit <a href="https://guides.github.com/features/mastering-markdown/">ce lien</a>.

L'ensemble des notes sera stocké dans le localStorage. Ainsi, tu ne risques aucun souci avec le RGPD.

</br>

</br>

# 2. CONSIGNES DU PROJET

Ton application sera constituée de plusieurs parties.  

Sur la gauche, l'utilisateur aura accès à une barre de navigation. Celle-ci contiendra la liste de tes notes. L'utilisateur pourra y voir un titre et le début du texte (~15 mots). L'utilisateur peut créer une nouvelle note en cliquant sur le bouton du haut.À droite, prenant ~80% de la largeur, l'utilisateur verra le contenu de la note sélectionnée, bien mis en forme en HTML, dans la partie haute.

Dans la partie basse, un champ de texte (input) permettant de définir le nom de la note, ainsi qu'un autre champ (textarea) permettant de modifier le contenu de la note en markdown.

Pour transformer ton markdown en HTML, tu pourras utiliser la lib <a href="https://github.com/showdownjs/showdown">"showdown"</a>. Celle-ci te permet de transformer du markdown en HTML, et inversement. C'est grâce à cela que le markdown sera affiché en HTML et en live, sur la partie du dessus. En cliquant sur "save", l'utilisateur sauvegarde la note. C'est-à-dire que s'il recharge la page, sa note est toujours visible dans la liste à gauche. Il faudra donc sauvegarder les notes dans le localStorage.

L'utilisateur peut changer de note en cliquant sur l'une d'elles dans la liste à gauche. Il peut la modifier à sa guise.


</br>

</br>

# 3. RENDU ATTENDU

Le rendu attendu est un repo gitHub contenant ton application.

<ul>
  <li>L'utilisateur peut ajouter une note.</li>
  <li>L'utilisateur peut modifier une note.</li>
  <li>L'utilisateur peut consulter une note.</li>
  <li>L'utilisateur peut basculer entre les notes pour voir celle qui lui plaît.</li>
</ul>  

[OPTIONNEL] Le bouton "sauvegarder" n'existe plus, et les notes sont sauvegardées régulièrement ou à chaque changement dans le texte.


</br>

</br>


</details>



</br>
<hr>
</br>
</br>
</br>
</br>

## How to use this repo:

Simply clone this repo on your machine, then open it in a Terminal window.

Then, you can copy and paste the following commands in your Terminal (inside the project's directory):

```
npm i
npm start
```

That's it!  
You have access to my markdown Notepad app :fire:

</br>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

</br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

</br>
</br>
</br>

<div align="center">

# Acknowledgments:

Background from <a href="https://www.toptal.com/designers/subtlepatterns/uploads/handmadepaper.png">Toptal</a>

Markdown/HTML converter library: <a href="https://github.com/showdownjs/showdown">Showdown</a>

Useful <a href="https://www.youtube.com/watch?v=ulOKYl5sHGk">tutorial from James Grimshaw</a>

</div>
