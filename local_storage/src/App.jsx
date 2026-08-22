import React from 'react'

const App = () => {
 // localStorage.clear();
 // localStorage.setItem("name","Gnaneswar Reddy");
// const name=localStorage.getItem("name");
 //localStorage.removeItem("name");
// const student={
//   name:"Gnaneswar",
//  Roll:"R22EI032"
// };
//  localStorage.setItem("student",JSON.stringify(student));
const student=JSON.parse (localStorage.getItem("student"));
return (
    <div>{student.name} <span>=</span> {student.Roll}</div>
  )
}

export default App