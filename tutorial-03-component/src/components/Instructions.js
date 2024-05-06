import React, { Component } from 'react';
import emoji from './emoji.svg'
//statefull class
export default class Instructions extends Component {

    render() {
        return(
            // Only return single element using empty closing tag
            <div className="instructions">
            <img alt="laughing crying emoji" src={emoji} />  
            <p>Click on an emoji to view the emoji short name.</p>
          </div>
        )

        
      }
}

// export default function Instructions() {
//   return(
//     <div className="instructions">
//         <img alt="laughing crying emoji" src={emoji} />
//         <p>Click on an emoji to view the emoji short name.</p>
//     </div>
//   )
// }

//stateless 