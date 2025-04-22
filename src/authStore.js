import { writable } from 'svelte/store';

// Initial authentication state
const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  username: null,
};

// Create the writable store
const { subscribe, set, update } = writable(initialState);

// Export the store's subscribe method and custom actions
export const authStore = {
  subscribe,

  // --- DATABASE/BACKEND INTEGRATION Placeholder ---
  // TODO: In a real application, this function would typically be called *after*
  // a successful response from the backend authentication service (e.g., in UserLogin.svelte).
  // The backend would verify credentials against the database. This function's role
  // is primarily to update the client-side state based on that successful authentication.
  // --- END DATABASE/BACKEND INTEGRATION Placeholder ---
  loginUser: (username) => update(state => ({
    ...state,
    isLoggedIn: true,
    isAdmin: false,
    username: username,
  })),

  // --- DATABASE/BACKEND INTEGRATION Placeholder ---
  // TODO: Similar to loginUser, this would be called after successful backend
  // validation for an admin user.
  // --- END DATABASE/BACKEND INTEGRATION Placeholder ---
  loginAdmin: (username) => update(state => ({
    ...state,
    isLoggedIn: true,
    isAdmin: true,
    username: username,
  })),

  logout: () => set(initialState), // Reset state to initial on logout
};
