// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Header from './components/header';
// import Content from './components/content';
// // import Footer from '';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Header />  
//     <Content/>
//   </React.StrictMode>
// );




import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


function Message(){
  return(
  <div>
  <Header/>
  <Content/>
  <Footer/>
  </div>
  )
}
ReactDOM.render(<Message/>,document.getElementById("root"));



