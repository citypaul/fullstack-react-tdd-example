# React Component-Driven Development & DOM Testing Monorepo

Welcome to the React Component-Driven Development & DOM Testing Monorepo! This repository contains all the code and examples for a comprehensive talk on building React applications using Test-Driven Development (TDD) and DOM testing. The monorepo has been organized using PNPM and Turborepo to streamline package management and build processes.

If you are not familiar with the concept of a monorepo, it is a single repository that contains multiple projects. In this case, the monorepo contains a shared UI library, a React application, and a Next.js application. The shared UI library contains reusable and accessible React components, along with their tests and stories. The React application demonstrates component usage and integration. The Next.js application demonstrates the power of composition in React with the Mantine UI library's Modal component.

[You can read more about monorepos here](https://monorepo.tools/).

## Overview

The primary goal of this monorepo is to demonstrate best practices for building reusable and accessible React components, and how to effectively test them using tools like React Testing Library and Storybook. Additionally, it showcases the use of Mock Service Worker to handle external dependencies in tests and illustrates the Backend-for-Frontend (BFF) pattern in action. The talk is tailored for an audience with a mix of front-end and back-end experience, emphasizing the power of composition in React and how it applies to both component development and testing.

## Contents

The monorepo is structured as follows:

### Apps

- `frontend`: A React application built using Create React App to demonstrate component usage and integration.
- `example-bff`: A Node.js Express application serving as a Backend-for-Frontend, showcasing the BFF pattern.
- `acmesoft-domain-api`: A Node.js Express application representing a mock domain API.
- `mantine-modal`: A Next.js application demonstrating the power of composition in React with the Mantine UI library's Modal component. This app is used as an introduction to the talk, highlighting the benefits of composition when building and testing React components.
- `storybook`: A Storybook instance containing stories for all components within the monorepo.

### Packages

- `shared-ui-library`: A shared UI library containing reusable and accessible React components, along with their tests and stories.

## Getting Started

You will need to [install pnpm globally](https://pnpm.io/installation) to run the monorepo.

The version of pnpm used when developing this monorepo is `7.30.1`.

To install the dependencies for the monorepo, run the following command:

```bash
pnpm install
pnpm build
```

The monorepo can be run using the following commands:

- `pnpm run dev`: Runs the monorepo in development mode.
- `pnpm run build`: Builds the monorepo for production.
- `pnpm run start`: Runs the monorepo in production mode.
- `pnpm run test`: Runs the monorepo tests.

To run storybook, run the following command:

```bash
pnpm run storybook
```

_TODO: Add instructions for setting up and running the monorepo using PNPM and Turborepo._

## Contributing

_TODO: Add instructions for contributing to the monorepo, including any specific guidelines or requirements._

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Further Resources

_TODO: Add links to any relevant resources, such as the talk slides, blog posts, or external documentation._

We hope you find this monorepo useful in understanding the best practices for React Component-Driven Development and DOM testing. Feel free to explore the code, run the examples, and contribute to the repository. Happy coding!
