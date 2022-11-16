import useState from 'react'

import './styles.css'


const values = [];
const keys = Object.keys(localStorage);

let i = keys.length;
console.log("localStorage.length = ", i);

while ( i-- ) {
    values.push( localStorage.getItem(keys[i]) );
    // console.log("values = ", values);
}




export default function Sidebar(/*{ notes }*/) {

  const Component = () => {

    console.log("values =", values);
    console.log("typeof values =", typeof values);

      values.forEach((note) => {
        const content = JSON.stringify(note)
        return content
      })
  }



  return (
    <div>
        {/* { values.length>0 && (<p>*replace me with a COMPONENT that blueprints the display of one note?*</p>) } */}
        { values.length>0 && <Component /> }
    </div>
      
  );

}









//   const listOfStoredNotes = [];
  
//   const DisplayStoredNotes = () => {
//     Object.keys(localStorage).forEach(function(note){
//       console.log(localStorage.getItem(note));

//       return (
//         <div>
//           {/* <p>{note.index}</p>
//           <p>{note.key}</p>  */}
//         </div>
//       )

//    });
      

//   }

//   if (localStorage.length > 0) {
//       // console.log("localStorage = ", localStorage);
//       DisplayStoredNotes()
//   }


//   return (
//     <div className="app-sidebar">

//       <h3>MY NOTES:</h3>

//       {/* 
//         <div className="app-sidebar-notes">
//             {notes.map((note) => (

//               <div className="app-sidebar-note">
//                 <div className="sidebar-note-title">
//                   <strong>TITLE</strong>
//                   <button>Delete</button>
//                 </div>

//                 <p>Note preview</p>
//                 <small className="note-meta">Last modified [date]</small>
//               </div>
//             ))}
//         </div> 
//       */}

//     </div>
//   );
// };