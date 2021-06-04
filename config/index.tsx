const dev = process.env.NODE_ENV !== 'production';

const API_URL_DEV = "https://jsonplaceholder.typicode.com/users"
const API_URL_PROD = "https://jsonplaceholder.typicode.com/users"

export const server = dev ? API_URL_DEV : API_URL_PROD