import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className='article-container'>
            <div className='atricle-one article'>
                <h1>1. How does useState work?</h1>
                <p className='atricle-ans'>useState is a special tool that helps us keep track of information that changes over time.  The useState hook returns an array whose first value is the current value of the state. The second value is the function which we will use to update the state similar to the setState method. <br /><br />


                    <code>const [index, setIndex] = useState(0);</code>

                    <br /> <br />
                    <ol>
                        <li>My component renders the first time. Because i passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.</li>
                        <li>When I click the button, it calls setIndex(index + 1). index is 0, so it’s setIndex(1). This tells React to remember index is 1 now and triggers another render.</li>
                        <li>React still sees useState(0), but because React remembers that you set index to 1, it returns [1, setIndex] instead.</li>
                    </ol>


                </p>
            </div>

            <div className='atricle-two article'>
                <h1>2. Props vs state:</h1>
                <p className='atricle-ans'>
                    <strong>Props:</strong> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. <br />
                    <strong>State:</strong> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only. <br /> <br />
                </p>  
                <table>
                        <tr>
                            <th>PROPS</th>
                            <th>STATE</th>
                        </tr>
                        <tr>
                            <td>The Data is passed from one component to another.</td>
                            <td>The Data is passed within the component only.</td>
                        </tr>
                        <tr>
                            <td>It is Immutable (cannot be modified).</td>
                            <td>It is Mutable ( can be modified).</td>
                        </tr>
                        <tr>
                            <td>Props can be used with state and functional components.</td>
                            <td>State can be used only with the state components/class component.</td>
                        </tr>
                    </table>


            </div>

            <div className='atricle-three article'>
                <h1>3. Purpose of useEffect other than fetching data:</h1>
                <p className='atricle-ans'>
                    The primary purpose of the useEffect hook in React is to handle side effects within functional components. Fetching data is a common use case for the useEffect hook, there are many other side effects of useEffect.
                    Some other examples of side effects:<br /> <br />

                    <strong>Manipulating the DOM:</strong> I can use useEffect to modify the DOM, such as adding or removing event listeners, changing styles or class names, or updating the content of an element. <br /> <br />

                    <strong>Setting up timers or intervals:</strong> If my component needs to run a timer or interval, I can use useEffect to set up the timer and clear it when the component is unmounted. <br /> <br />

                    <strong>Updating the document title:</strong> If my component needs to update the title of the document, I can use useEffect to set the title. <br /> <br />

                    <strong>Handling user input:</strong> I can use useEffect to handle user input, such as debouncing search queries or validating form data.
                </p>


            </div>

            <div className='atricle-four article'>
                <h1>4. How Does React work?</h1>
                <p className='atricle-ans'>
                    React basically maintains a tree for us. This tree is able to do efficient diff computations on the nodes.

                    Think of our HTML code as a tree. In fact, that is exactly how the browser treats our DOM (our rendered HTML on the browser). React allows us to effectively re-construct our DOM in JavaScript and push only those changes to the DOM which have actually occurred.
                </p>


            </div>
        </div>
    );
};

export default Qna;