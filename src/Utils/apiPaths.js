export const BASE_URL = "http://localhost:8000";

//utils/apiPaths.js
export const API_PATHS = {
    BASE_URL: 'http://localhost:3000', // or your actual base URL
    AUTH: {
        REGISTER: "/api/auth/register", // Register a new user (Admin or member)
        LOGIN: "/api/auth/login", // Authenticate user & return JWT token
        GET_PROFILE: "/api/auth/profile", //Get logged -in user details
        LOG_OUT: "/api/auth/logout",
    },

    INVENTORY: {
        ADD_RECORD: "/api/add/enter-inventory",
    },

    DASHBOARD: {
        OVER_VIEW: "/api/view/overview",
    },
    USER: {
        UPDATE_PROFILE_PICTURE: '/api/user/update-profile-picture', // Update user profile picture
        UPDATE_PROFILE: '/api/user/update-profile', // Update user profile details

    }





}