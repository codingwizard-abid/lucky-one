import React from 'react';
import './Faq.css'

const Faq = () => {
   return (
      <div className='faq'>
         <div className="ans-1">
            <h3>How react works?</h3>
            <p><b>Answer:</b>To work react properly it needs two-node packages which are react and react-dom. When a component is written it is pure javascript code. Components are two types function components and class components. Inside the components, we use JSX code. We use the JSX syntax to create our user interface and translating this into an output on the browser, this is rendering. React package is responsible to convert javascript code into html code. And now it is time to render html into the browser. This job is done by react-dom. React Dom inject converted HTML code on HTML file. Finally, the whole process is run without reloading the page. In the public folder and an index.js file in the src folder. React requires just one div created in an HTML file so that it can target that div and sort of hanging his total node tree onto that.</p>
         </div>

         <div className="ans-2">
            <h3>Difference between props vs state?</h3>
            <p><b>Answer: </b>
            <b>State: </b>
             The state is an mutable structure that is used to keep data or information of the component and can change each time. The Mutation in state can happen when user click on any event. It is the heart of the react component which decide the behavior of the component and the way it will render. <br />
            <b>Props: </b>
            Props are read-only components. It is an object which contain the value of attributes of a tag and work similar to the HTML attributes. It helps send data from one component to another components. It is similar to function arguments and can be passed to the component the like the way arguments passed in a function. Props are unchangeable so we can't modify the props from inside the component.</p>
         </div>
      </div>
   );
};

export default Faq;