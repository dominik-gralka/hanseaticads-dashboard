export { default } from "next-auth/middleware"

export const config = { 
    matcher: ["/playground"],
}

console.log("middleware.ts")