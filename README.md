# favorite-language-toggle
This program is a simple React application that demonstrates how to use the `createContext` and `useContext` features to manage and share application state between components. Here's an explanation of the key parts of the program:

1. **Imports**:
   - It starts by importing necessary modules from React and React DOM.
   - `createRoot` is imported from `react-dom/client`, which is used to create a root for the React application.

2. **Data**:
   - An array called `languages` is defined, containing two programming languages: 'JavaScript' and 'Python'.

3. **Context Creation**:
   - `LanguageContext` is created using `createContext()`. This context will be used to share the selected favorite programming language among components.

4. **App Component**:
   - The `App` component is defined. It manages the application's state for the favorite programming language using the `useState` hook.
   - Inside the `App` component, a `LanguageContext.Provider` is used to wrap the `MainSection` component. This provides the `favoriteLanguage` state and `setFavoriteLanguage` function to all components within the `LanguageContext.Provider` hierarchy.

5. **MainSection Component**:
   - The `MainSection` component consumes the context using `useContext(LanguageContext)`. This allows it to access the `favoriteLanguage` state and `setFavoriteLanguage` function from the context.
   - Inside the component, there's a function called `toggleLanguage`, which toggles between the two languages in the `languages` array when the "toggle language" button is clicked.
   - The component renders the current favorite language and a button to toggle it.

6. **Rendering the App**:
   - The `createRoot` function is used to create a root for the React application within the HTML element with the id "root."
   - The `App` component is rendered inside the root using `root.render(<App />)`.

Overall, this program creates a simple React application where the `App` component manages the state of a favorite programming language, and the `MainSection` component consumes and displays this state. When the "toggle language" button is clicked, the `toggleLanguage` function is called to switch between the two languages defined in the `languages` array. The use of the `LanguageContext` allows these components to communicate and share state without needing to pass props explicitly.
