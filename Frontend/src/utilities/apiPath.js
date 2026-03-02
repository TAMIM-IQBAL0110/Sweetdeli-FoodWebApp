export const baseUrl = import.meta.env.VITE_BASE_URL;

export const API_PATHS = {
    AUTH:{
        LOGIN: "/api/v1/auth/login",
        REGISTER:"/api/v1/auth/register",
        GET_USER_INFO: "/api/v1/auth/getUser",
    },
    CART:{
        ADD: "/api/v1/cart/add",
        UPDATE: "/api/v1/cart/update",
        REMOVE: "/api/v1/cart/remove",
        GET_ITEMS: "/api/v1/cart/getItems",
    }
}

