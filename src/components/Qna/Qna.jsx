import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className='article-container'>
            <div className='atricle-one'>
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

            <div className='atricle-one'>
                <h1>2. Props vs state:</h1>
                <p className='atricle-ans'><strong>Props:</strong> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. <br />
                <strong>State:</strong> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                </p>

                
            </div>
        </div>
    );
};

export default Qna;