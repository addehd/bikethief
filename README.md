Catalog of stolen bikes
====

![](https://images.unsplash.com/photo-1556316384-12c35d30afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80)

Stolen bikes is a typical problem in Malmö, where the Docly HQ is. We need your help to build an app that will help us keep track of the bikes stolen in the area!

# Requirements

- [ ] I want to pull data from the [Bikewise API](https://www.bikewise.org/documentation/api_v2#!/incidents/GET_version_incidents_format_get_0)
- [ ] I want to see a list of bikes stolen in the Malmö area (the coordinates for our office are `55.607405,12.998945`)
- [ ] For each reported theft I want to see
  - [ ] Case title
  - [ ] Case description
  - [ ] Date of the theft (format `yyyy-mm-dd hh:ss`)
  - [ ] Date of the report (format `yyyy-mm-dd hh:ss`)  
  - [ ] Location of the theft
  - [ ] Image of the bike (if available)
  - [ ] Link to a page with more information
- [ ] I want to see a loading state while the cases are loading
- [ ] I want to be able to filter the cases by title and by location
- [ ] I want to be able to use the app on mobile as well as desktop, with mobile being the most important.

# Tech requirements

- React
- Tests (We like (Jest)[https://jestjs.io])
- Linter (we really like (https://prettier.io)[prettier])
- CSSinJS is a plus, but not a requirement ((JSS)[https://cssinjs.org/react-jss/], (styled-components)[https://www.styled-components.com])


# Your challenge

- Create a React app that satisfies all the requirements listed above. If you have ideas for nice-to-have features you are welcome to add them.
- You can use any boilerplate and tools that you want to (NextJS, CRA etc) but we advice you to keep it simple. A clean, robust react app is what we're looking for, and we're usually in favor of using all available tools and tricks to get things done.
- You don't have to support legacy browsers, and you're free to use any and all modern browser features that you wish (flexbox, fetch etc).
- You can deploy your app on whatever cloud provider you wish (zeit, heroku, gcp etc)

# Instructions

- Fork this repo
- Build a clean and robust React app
- Publish the app on your chosen cloud provider
- Let us know that you've completed the challenge

# License

This project is licensed under MIT. Feel free to use it anyway you see fit.
