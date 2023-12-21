# Collagerie Fullstack Tech Test

## The Challenge
The challenge is split into two parts FE and BE and about we recommend spending 2-3 hours on it, we do not expect everyone to complete both parts of the task, however please try to attempt both parts of the exercise. You can attempt them in any order however we would recommend starting with the BE task first. We would like to see your approach and way of working over the task being "complete".

The exercise is very open on purpose, we want to see how you tackle building something from scratch yourself and what tech you reach for to accomplish i

We use NextJS, both the BE and FE tasks can be accomplished in the same application boilerplate. We have set up the project to utilise the app directory setup however feel free to change this if you need to.

### BE Task
Create a custom rest API to pre-filter all required data needed. The required data includes getting all Alive, Morty characters along with all of their associated data types Origin, Location and Episode data from the Rick and Morty API. https://rickandmortyapi.com/. Please ensure you read the docs thoroughly https://rickandmortyapi.com/documentation. We would prefer the use of the GraphqlQL API over the RestAPI alternative.

The interfaces in the codebase will show you what the data structure must look like, if you need to extend them, feel free! However, the original structure must stay **unchanged**.

### FE Task
Build a simple UI to list all characters using the basic wireframes provided. There is mockdata provided for the character listing page and for the individual character page if the BE Task is not complete however we would encourage you to use your own BE API.

Please ensure your work checks all the points below – it’s what we will be looking out for
- Your chosen method for fetching and aggregating data. (If the BE task is completed, you should use the BE API made)
- Chosen folder structure
- The layout should be based on the wireframes provided.
- Final work (whether complete or in part) should be submitted in a git repository. (ideally we would like to see a commit history - conventional commits are recommended). With a README.md file, so we can run the app locally and test it ourselves.
- Deploy the app to a service like Vercel or Netlify in whatever state it's left in.
- **For the BE task DO NOT use the Rick and Morty JavaScript library. We want to see how you architect aggregating data**.
- The site should be built using HTML, CSS and JavaScript (TypeScript), and as far as styling is concerned: SCSS, PostCSS, CSS Modules and Tailwind are all acceptable. (we have pre-baked in tailwind)
- The FE task should be built using responsive techniques.

### Taking things further:
(Not a requirement but if you think it will help us assess your skill level and passion). If you have the time, here are some suggestions to enhance the app:

- Add to the eslint config
- Add prettier and a config
- Add CI tasks, github actions or similar
- Add pre-commit hooks (husky, lint-staged etc)
- Unit tests: We have somewhat setup vitest + react-testing-library - however it's broken at the moment (on purpose), so you will need to fix it and add a test.
- Accessibility improvements
- Pagination if required?
