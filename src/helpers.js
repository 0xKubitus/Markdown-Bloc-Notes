// VARIABLES DECLARATION:

// Find out the title of the first note saved in local storage:
const indexOfLastEntry = localStorage.length
const title = localStorage.key(indexOfLastEntry - 1); // returns 'theTitle'
// console.log("first entry title = ", title);

// Find out the content of the first note saved in local storage:
const lastEntryContent = localStorage.getItem(title);
// console.log("first entry content = ", content);


// - - - - - - - - - -


// FUNCTION TO SET THE STATE OF THE TITLE OF THE NOTE TO DISPLAY:
export function getFirstLocalStorageItemTitle() {  
    // console.log("function getFirstLocalStorageItemTitle() from 'helpers.js' is called successfully!");
    return JSON.parse(title);
}

// FUNCTION TO SET THE STATE OF THE (converted) CONTENT OF THE NOTE TO DISPLAY:
export function getFirstLocalStorageItemContent() {  
    return JSON.parse(lastEntryContent);
}

