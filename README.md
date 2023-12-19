# Project Documentation: Team Member Management App

This documentation provides a guide for building a simple team management system in an organization. It includes features for listing, adding, editing and deleting team member details.

## Deploy URL

Experience the live version of the Team Member Management App:

[Team Member Management App](https://team-member-management-app-harukafujii13.vercel.app/)

## Introduction

The Team Member Management App is a web-based application designed to manage details of team members, including their first and last names, phone numbers, emails, and roles. Utilizing SQL for its backend operations, the app ensures efficient data processing and storage. Complementing this is a user-friendly frontend web interface, designed to facilitate easy addition, editing, deleting and listing of team member details.

## Requirements

- A GitHub repository to host the project.
- Add reshavsingla as a collaborator.
- Create proper documentation for building and testing the project.
- Utilize React for building the user interface.
- Use backend technology.

## Technologies Used

- React
- JavaScript
- React Router
- React Toastify
- PostgreSQL
- Node.js
- Express
- Tailwind CSS

## Getting Started

To run the project locally, ensure you have [Node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed. Follow these steps:

1. Clone the repository.

2. Install dependencies for the monorepo (concurrently), backend, and frontend web application.

```
npm install
```

3. Start the backend and frontend web application.

```
npm run dev
```

4. Access the frontend web application at http://localhost:5173.

#### Server Environment Variables

Before running the backend, make sure to set the following environment variables in a `.env` file for the server (located in the `backend/` directory):

```
cp backend/.env-sample backend/.env
```

- `PORT`: The port on which the server should listen. (8000)
- `FRONTEND_URL`: The URL of the frontend application. (http://localhost:5173)

Add your connection string in postgresql

- `DB_HOST`
- `DB_USER`
- `DB_PASS`
- `DB_NAME`
- `DB_PORT`

#### Client Environment Variables

For the frontend web application, set the following environment variable in a `.env` file for the client (located in the `frontend/` directory):

```
cp frontend/.env-sample frontend/.env
```

- `VITE_API_BASE_URL`: The backend API endpoint URL for making requests from the frontend. (api/members)

5. Access the frontend web application at http://localhost:5173

## Backend

The backend serves as the data source for the frontend web application. It includes the following endpoints:

- `/api/members`: CRUD endpoints for members.
  - GET `/api/members/all`: Returns a list of all members.
  - POST `/api/members/create`: Creates a new member.
  - PUT `/api/members/edit/:id`: Edit and Updates a member by ID.
  - DELETE `/api/members/delete/:id`: Deletes a member by ID.

## Frontend Web Application

The frontend web application provides a user-friendly interface for managing team members. It includes:

- Member listing and viewing.
- Form for adding and editing members.
- Button for deleting members.

## User Stories

The application addresses the following user stories:

1. **User Story One**: As Lisa, a director, I want to view a comprehensive list of all team members' information, so I can easily manage and oversee my team.
2. **User Story Two**: As Lisa, I want to add new members to the team list, ensuring that our team records are always up to date.
3. **User Story Three**: As Alan, a DevOps resource, I need the ability to edit and delete team member information, to maintain accurate and current team data.

## Personas

- **Lisa**: A director at an organization, Lisa seeks a streamlined and efficient tool to manage her team members. She values ease of use and comprehensive functionality in a software application to keep track of her team's details and roles.
- **Alan**: Working in DevOps, Alan requires access to view and manage team members' information. He looks for a reliable and straightforward application that allows him to make quick updates and ensures data accuracy in team records.

## Screenshot

![Screenshot]()

## Conclusion

The Team Member Management app is a thoughtfully designed tool aimed at simplifying the complexities of organizational team management. With its user-friendly interface, the app facilitates efficient management of team member information, including their personal details and roles within the organization. By streamlining these processes, the app not only saves time but also enhances the overall efficiency and coordination within teams. Its implementation reflects a commitment to modernizing team management and supporting the dynamic needs of today's organizations.

For any questions or issues, please contact Francois at harukafujii.dev@gmail.com.

[GitHub Repository Link](https://github.com/harukafujii13/team-member-management-app.git)
