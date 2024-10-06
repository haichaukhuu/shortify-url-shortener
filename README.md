# SHORTIFY - url shortener 

## Deployed Application

You can access the live application here: [https://shortify-n5pm.onrender.com/](https://shortify-n5pm.onrender.com/)

## Source Code

The source code is hosted on GitHub. You can find the repository here: [https://github.com/haichaukhuu/shortify-url-shortener](https://github.com/haichaukhuu/shortify-url-shortener)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/haichaukhuu/shortify-url-shortener
   cd project-root/api

**Project folder tree**
```
/root
│
├── /shortify         # React frontend app
│   ├── /src
│   ├── /public
│   └── package.json
│
├── /api         # Backend code (Node.js/Express)
│   ├── /routes
│   ├── /models
│   ├── /controllers
│   └── package.json
│
├── README.md       
└── .gitignore      
```


2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the /api directory with the following variables:
   ```bash
   MONGODB_URI=<mongodb_connection_string>
   PORT=<port_number>
4. Start the backend server:
    ```
    node index.js
### Frontend Setup
1. Navigate to the frontend directory:
    ```
    cd ../shortify
2. Install dependencies:
   ```bash
   npm install
3. Run the frontend application locally:
   ```bash
   npm run dev
## Technology Choices
- Frontend: React with Material UI for building a responsive user interface.
- Backend: Node.js and Express for handling server-side logic.
- Database: MongoDB for storing the original and shortened URLs.

## Completed Features
- Users can shorten long URLs.
- Users can create custom short codes (optional). 
- Generated shortened URLs can be copied to the clipboard
- User-friendly interface designed with Material UI.

## Known Issues and Limitations
- The application currently does not handle user authentication.
- There is no password protection or expiry date for URLs.

## Future Improvements
- Implement user authentication to allow users to manage their shortened URLs.
- Add analytics to track the number of clicks on shortened links.
- Improve error handling for various scenarios (e.g., invalid URLs).
