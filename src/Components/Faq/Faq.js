import React from 'react';
import './Faq.css'

const Faq = () => {
   return (
      <div className='faq'>
         <div className="ans-1">
            <h3>How react works?</h3>
            <p><b>Answer:</b>To work react properly it needs two-node packages which are react and react-dom. When a component is written it is pure javascript code. Components are two types function components and class components. Inside the components, we use JSX code. We use the JSX syntax to create our user interface and translating this into an output on the browser, this is rendering. React package is responsible to convert javascript code into html code. And now it is time to render html into the browser. This job is done by react-dom. React Dom inject converted HTML code on HTML file. Finally, the whole process is run without reloading the page. In the public folder and an index.js file in the src folder. React requires just one div created in an HTML file so that it can target that div and sort of hanging his total node tree onto that.</p>
         </div>
      </div>
   );
};

export default Faq;