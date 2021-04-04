import React, {Component} from 'react';
import '../assets/scss/ClassItems.scss';


class FitnessClasses extends Component{
    
    render(){
        let classInfo = [
            {
              name: 'Squad',
              location: 'North Austin',
              Time: '12:00 PM',
              duration: '2 HR',
              trainer: 'trainer',
            },
            {
                name: 'Bicycle',
                location: 'South Austin',
                Time: '15:00 PM',
                duration: '3 HR',
                trainer: 'trainer',
              },
            ]
    

    return (
        <ul>
            {classInfo.map( (item, index)=> (
                <li key={item.name} info={ item }></li>
            ))}
        </ul>
    );
}
}

export default FitnessClasses;



