import React from 'react';
import './Faq.css'

const Faq = () => {
   return (
      <div className='faq'>
         <div className="ans-1">
            <h3>How react works?</h3>
            <p><b>Answer:</b>To work react properly it needs two node packages these are react and react dom. When a components is written it is pure javascript code. Components are two type function components and class components. Inside the components we use JSX code. We are using the syntax of JSX to design our user interface and translating this into an output on the screen, this is rendering. React package is responsible to convert javascript code into html code. And now it is time to render html into browser. This job is done by react dom. React Dom inject converted HTML code on html file. Finally whole precess is run without reloading the page. In the public folder and an index.js file in the src folder. React requires just one div created in HTML file so that it can target that div and sort of hanging his total node tree onto that.</p>
         </div>
      </div>
   );
};

export default Faq;