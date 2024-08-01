# Get started

1. Install dependencies - `npm install`

2. Dev - `npm run dev`.

3. Build - `npm run build`

# Folder Structure

Below is an overview of the projects folder strucutre and it's usage. It is an opinionated structure used to help reduce technical debt and provide a common structure for teams to work on. Note that you can also nest folders such as hooks.

- api // includes the functions which will handle our api queries
- components // small reuseable pieces, used across the application
  - atoms - basic building blocks. single elements e.g. a container
  - molecules - combine multiple atoms e.g. a FilterContainer
  - organisms - combine multiple molecules e.g. a header
- features // medium-large features that encapsulate various components and hooks etc.
  - character-search.tsx
    - components // for components that are specific to this feature
    - hooks
      - use-filter.tsx
- helpers // includes small helper functions
- hooks // global hooks
- services // reusable. like helpers, but bigger, basically more complex functionality that involves more than just a small reusable helper
- store // for inclusion of store e.g. zustand or jotai
- layouts // used to wrap pages with a generic layout
- tests // used to store test related functions
- pages // holds the content of the page.
  - home
    - index.tsx

# General Useage notes

- If you add a new context, remember to also add it to the custom test render function in `src/tests/test-utils.tsx`.
- To view the built project, I would reccomened running `npm run build` to build the folder then `cd dist`, and then running `npx http-server`. Note this will require npx to be installed.
- Layouts are added to page at the routes level here `src/pages/routes.tsx`

# Assumptions

Below is a list of my assumptions about the brief I made while working on this project.

- I assume that the tester will have a compatible version of Node. I considered adding `use-node-version=20.15.1` to .npmrc to set it at the latest LTS version but I didn't want to introduce possible build issues for the testing dev at this stage. Node version management could be discussed in future.

- I would normally use pnpm for the build tool, but to reduce chance of errors for the tester, I have used npm.

# Notes

- I have added a debounce to the search function for best UX
