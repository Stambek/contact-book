import React from 'react';
import './PhoneBook.css';
import PhoneList from './PhoneList';

class PhoneBook extends React.Component{
    render(){
        return(
            <div className='PhoneBook'>
                <h1>Phone Book</h1>
                <PhoneList/>
            </div>
        )
    }
}

export default PhoneBook