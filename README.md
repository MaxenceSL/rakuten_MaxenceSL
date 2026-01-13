# Rakuten Product Detail Page - Coding Assignment

  ## Goals
  This project was completed as part of the technical assessment for the Frontend Developer Intern position within the Visitor team at Rakuten. The objective was to design a functional, aesthetically pleasing, and performing product detail page using the Rakuten API.

  ## Tech Stack
  + React with TypeScript for robust and type-safe development.
  + Material UI (MUI) for a modern, responsive, and accessible user interface.
  + TanStack Query (React Query) for efficient server-state management, caching, and handling loading/error states.

  ## Implemented Features
  + Dynamic Data Fetching: Integration with the Rakuten API to display real-time product information.
  + Comprehensive Product Display: Handled product name, pricing (including discount logic), descriptions, ratings, and breadcrumbs.
  + User Experience (UX):
    + Loading states handled via spinners.
    + Comprehensive Error Handling for API failures or missing data.
    + 100% Responsive Design optimized for Mobile, Tablet, and Desktop.


# Getting Started
Follow these steps to ship the project locally:

  ## 1. Clone the repository
  `bash
  git clone <YOUR_REPOSITORY_URL>
  cd <YOUR_PROJECT_NAME>

  ## 2. Install dependencies
  Make sure you have pnpm installed.

  ## Run the development server
  The application will be available at http://localhost:5173.


# Development Notes

  ## Product Selection & Switching
  To keep the demonstration focused on the UI and data fetching logic, the product ID is managed via a constant. 

  To test the page with the different product IDs provided in the assignment (Mattress, Phone, Gaming CD, or Monitor), you only need to change one line :

  1. Open `src/components/ProductDetail/ProductDetail.tsx`.
  2. Update the `CURRENT_PRODUCT_ID` constant at line 22:

  ```typescript
  // ProductDetail.tsx
  // IDs disponibles : Mattress: 11084451963 / Phone: 7758205598 / Gaming: 13060247469 / Monitor: 10735101964
  const CURRENT_PRODUCT_ID = '13060247469'; // Replace with any other ID from above



