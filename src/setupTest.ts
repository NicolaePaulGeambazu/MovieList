export {}; // Add this line to make the file a module

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {
      // Add logic for addListener if needed
    },
    removeListener: function () {
      // Add logic for removeListener if needed
    }
}
}