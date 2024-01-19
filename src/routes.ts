/**
 * An array of routes than are protect from the public
 * @type {string[]}
 */

export const protectRoutes: string[] = [
  "/cabinet"
];

/**
 * An array of routes than are accessible to the public
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  "/",
  "/contacts",
  "/doctors",
];

/**
 * An array of routes than are accessible to the public
 * @type {string[]}
 */

export const authRoutes: string[] = [
  "/signin",
  "/signup"
];

/**
 * The prefix for API authentification routes
 * @type {string}
 */

export const apiAuthPrefix: string = "api/auth";

/**
 * The prefix for API authentification routes
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/cabinet";