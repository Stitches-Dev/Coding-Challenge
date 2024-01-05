# Project Overview

Welcome to Stitches Studios where we aim to implement a sleek and modern user interfaces

# Task at Hand

Your mission, should you choose to accept it, is to transform the provided design into a fully functional and visually appealing user interface. Some components, such as buttons, search input, and university card are ready for use.Focus on implementing the remaining design elements and ensuring a seamless user experience.

# Project Description

- Based on the provided design available here https://xd.adobe.com/view/dfa7a02d-9b86-4f0e-bdfa-3b9968f8dff1-8af4/grid

### All University Page

- Get all the universities paginated with their details, as shown in the design.
- Implement the pagination design, and functionality
- The user can search for a university by name

### Single University Page

- Upon clicking on each University card, it should navigate to a single univeristy page, where more details for the university are shown.
- Each university provides different faculties.
- Each faculty offers multiple majors.
- Each faculty with one of its chosen major, provide certain degrees.
- After choosing all three - faculty, major, and degree - the major degree details will be fetched

# API Integration

To fetch data from the backend, use the following API:

**To get all the univeristies (pagination, and search by name):**

> Endpoint: /career-test/launch-test
> Request Type: GET

**To get single university details:**

> Endpoint: /career-test/:careerTestId/questions
> Request Type: GET

**To get majors by faculty id:**

> Endpoint: /career-test/:careerTestId
> Request Type: GET

**To get degree by faculty and major id:**

> Endpoint: /career-test/result/:careerTestId
> Request Type: GET

**To get major degree details, by major and degree id:**

> Endpoint: /examinee
> Request Type: GET

# Optimization Guidelines

Efficiency is crucial! Follow these guidelines for optimal results:

- _Performance_: Prioritize efficient algorithms and practices for smooth user interactions.
- _Modularity_: Break down your code into modular components for better maintainability and reusability.
- _Responsiveness_: Ensure the user interface is responsive across different devices and screen sizes.
- _API Calls_: Handle API calls asynchronously to prevent blocking the user interface.

_Feel free to reach out for clarifications or assistance. Let's craft a fantastic user interface that aligns seamlessly with the provided design!_

# Happy coding! 🚀
