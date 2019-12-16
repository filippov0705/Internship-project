import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { setPeriodicity } from '../../action/ProceduresActions';

const DaysOfTheWeekBtns = props => {
    const btnClick = event => {
        const periodicity = props.procedures.periodicity;
        if(periodicity.includes(event.target.innerText)) {
            periodicity.splice(periodicity.indexOf(event.target.innerText), 1);
        } else {
            periodicity.push(event.target.innerText);
        }
    }

    return (
        <>
            <Button
             btnAction={btnClick}
             type={'action'} 
             title={'Mon'} >
                <span>Mon</span>
            </Button>
            <Button 
             btnAction={btnClick}
             type={'action'} 
             title={'Tue'} >
                <span>Tue</span>
            </Button>
            <Button 
             btnAction={btnClick}
             type={'action'} 
             title={'Wed'} >
                <span>Wed</span>
            </Button>
            <Button 
             btnAction={btnClick}
             type={'action'} 
             title={'Thu'} >
                <span>Thu</span>
            </Button>
            <Button 
             btnAction={btnClick}
             type={'action'} 
             title={'Fri'} >
                <span>Fri</span>
            </Button>
            <Button 
             btnAction={btnClick}
             type={'action'} 
             title={'Sat'} >
                <span>Sat</span>
            </Button>
            <Button 
             btnAction={btnClick}
             type={'action'} 
             title={'Sun'} >
                <span>Sun</span>
            </Button>
        </>
    );
}

const mapStateToProps = store => {
    return {
        procedures: store.procedures
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setPeriodicity: periodicity => dispatch(setPeriodicity(periodicity))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DaysOfTheWeekBtns);

