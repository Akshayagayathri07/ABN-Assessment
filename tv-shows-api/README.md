# TV Shows Application with Vue Js
A single‐page web application which allows users to browse Tv Shows. It uses the following open api: https://www.tvmaze.com/api. On the Dashboard, it loads Tv Shows based on decreasing order of rating of the show.The shows are grouped according to specific genres like Romance, Horror, Comdey etc. However you can search any show, and you will get details regarding shows. When the user selects a show from the search results, the details of that show is displayed.
The details which are shown in the main section are given below:
- Summary of the Show
- Image of the show
- Show Info: 
    - Schedule of the show
    - Genres
    - Status
    - Show Type
    
- However there are tabs to display other details such as:
    - Episodes
    - Cast
    - Crew
    - Gallery

## Installations

This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Project Guidelines
1. Method Naming Convention, variable, object declaration : camelCase Example : 
getAllShows(), getSearchResults(showName) etc..

2. Folder Naming Convention, File Naming Convention: kabab-case Example : services  Components in vue : PascalCase Example : AppHeader.vue, CarouselShow.vue

### Project dependencies and devDependencies ------------
1. axios: Promise based HTTP client for the browser. Please refer below url for more details: https://www.npmjs.com/package/axios

2. vuetify: Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips. Please refer below url for more details: https://vuetifyjs.com/en/getting-started/quick-start/

3. @vue/cli-plugin-unit-jest: Run unit tests with Jest. Jest as a JS unit testing framework and runner. Please refer below url for more details: https://jestjs.io/
In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, coverageThreshold etc for getting exact code coverage with reports.

