import React from 'react';
import Button from './Button';

const DaysOfTheWeekBtns = props => {


    return (<>
        <Button style={{backgroundColor: 'white'}}
        btnAction={null}
        type={'action'} 
        title={'Mon'} >
            <span>Mon</span>
       </Button>
       <Button 
        btnAction={null}
        type={'action'} 
        title={'Tue'} >
            <span>Tue</span>
       </Button>
       <Button 
        btnAction={null}
        type={'action'} 
        title={'Wed'} >
            <span>Wed</span>
       </Button>
       <Button 
        btnAction={null}
        type={'action'} 
        title={'Thu'} >
            <span>Thu</span>
       </Button>
       <Button 
        btnAction={null}
        type={'action'} 
        title={'Fri'} >
            <span>Fri</span>
       </Button>
       <Button 
        btnAction={null}
        type={'action'} 
        title={'Sat'} >
            <span>Sat</span>
       </Button>
       <Button 
        btnAction={null}
        type={'action'} 
        title={'Sun'} >
            <span>Sun</span>
       </Button>
        </>);
}

export default DaysOfTheWeekBtns;