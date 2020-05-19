# Cats4fun

## Resume

I've build an Web App just for retrieving cat images and gifs, because it makes me happy.

## Challenges

1. ### Developing a project from scratch.
    I've always wanted to develop an App which I dreamt, organized, designed and coded the whole thing. The biggest difficult for me was to not feel the pressure to make it perfect from the beginning, and after watching a webinar a phrase caught my eye.

    > If you aren’t embarrassed by the first version of your product, you shipped too late.  
    > **-- Reid Hoffman**
    
    And that made me realize that I will only know how to get better, if I get something wrong. And to get something wrong, all I have to do is try anything. So I did. And oh boy, I made some mistakes, including 100 requests to the api in a very little time interval *(Note to self: use while loops with caution)*. But in the end, I'm still alive, so I will continur to try things. Including the topics below, like...

1. ### Organizing the development in GitHub Projects.
    I've discovered how a great tool the Github Projects tab is. I am loving how easy it integrates with the [GitHub Pull Requests and Issues - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github).  
    You maybe thinking why would I wanna use a whole tool to plan and organize issues for a project as small as an app that returns cat images, but even though it seems too powerful for it, it's still a tool that I wanted to learn and what better way to learn something than using it.  
    And it shows me how much I've worked on the app, how many bugs I've squashed and how many features I've implemented, and that gives me a sense of growing, so it's a win/win situation.

    And I've being having a blast with it, the tool entered my workflow really easily. Because I kind of already organized my planning with code in a Kanban way (thanks for my Trello and Pipefy experience), but now I'm using the issues plataform to keep track of my problems and solutions, because with the extension for VS Code, it creates a branch for the issue in a click inside my editor, and believe you not, I can also Pull Request, Merge, Squash and Delete the branch also inside the editor. REALLY AWESOME 😄👍

1. ### Dominating RxJS
    My nemesis the reactive programming always seems to find a way to haunt me, but NOW, I was fearless and ready for our battle. I've learned that the API that handles HTTP requests from Angular returns Observables, so I had to face my enemie in the eye, or more precisely, in the tutorials and code snippets of the internet, until I understood the concept of asynchronous and streams.  
    For now, I am proud of how I made it to work, but it can be improved a lot, like separating the [getCat function](src\app\components\cat-forms\cat-forms.component.ts) as a service, and implementing a loading animation while it waits for the response, and also I need to throw something if it doesn't return anything or if it takes too long to respond.

1. ### ~~Angular Animations get me animated~~ **TO BE CONQUERED**
1. ### ~~Making a PWA with Angular~~ **TO BE CONQUERED**

## Stack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

I've used the [CatAPI](https://thecatapi.com/) to get images or gifs of cats.

## Development server

Run `npm start` for a dev server. The app will automatically open in your default browser on `http://localhost:4200/` and will reload if you change any of the source files.
