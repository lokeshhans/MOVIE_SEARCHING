// This is a neat implementation of a debounce utility in JavaScript 👌. Let me break it down for you:

// What it does

// It ensures that the given callback is only executed after a specified delay (default 1000ms) after the last call.

// Useful for things like search input, resize events, scroll handling, etc., where you don’t want to trigger a function on every keystroke or pixel moved.

function useDebounce(callback, delay = 900) {
  let timeId; // Holds the timeout ID

  return (...args) => {
    // Clear any previously set timeout
    clearTimeout(timeId);

    // Start a new timeout
    timeId = setTimeout(() => {
      callback(...args); // Call the callback after the delay
    }, delay);
  };
}
export default useDebounce;

// useDebounce accepts a callback function and an optional delay (default 1000ms).

// It returns a new function that:

// Cancels the previous scheduled execution (clearTimeout(timeId)).

// Creates a new timeout (setTimeout) to call callback after the delay.

// If the returned function is called again before the delay finishes, the old timer is cleared, and a new one is started.



// import useDebounce from "./useDebounce.js";

// const logInput = (value) => {
//   console.log("Search for:", value);
// };

// const debouncedLog = useDebounce(logInput, 500);

// // Simulating typing
// debouncedLog("h");   // cancelled
// debouncedLog("he");  // cancelled
// debouncedLog("hel"); // cancelled
// debouncedLog("hell"); // cancelled
// debouncedLog("hello"); // ✅ fires after 500ms of no new calls
