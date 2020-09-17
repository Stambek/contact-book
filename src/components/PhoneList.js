import React from 'react';


const Phone = (props) => {
    
    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.number}</td>
            <td>{props.user.workPlace}</td>
            <td><button className="danger" onClick={()=>{
                props.onDeleteUser(props.index)
            }}>Delete</button></td>
        </tr>
    )
}

class AddContact extends React.Component {
    state={
        name: "",
        workPlace: "",
        number: ""
    }

    onChangeName=(e)=>{
        this.setState({name: e.target.value})
    }

    onChangeNumber=(e)=>{
        this.setState({number: e.target.value})
    }

    onChangeWorkPlace=(e)=>{
        this.setState({workPlace: e.target.value})
    }
    render(){
        return(
            <div>
                Name: <input type="text" value={this.state.name} onChange={this.onChangeName}/> <br/>
                Number: <input type="text" value={this.state.number} onChange={this.onChangeNumber}/> <br/>
                Work Place: <input type="text" value={this.state.workPlace} onChange={this.onChangeWorkPlace}/> <br/>
                <button className="add-btn" onClick={()=>this.props.onAddContact(this.state)}>Add Number</button>
            </div>
        )

    }
}
class PhoneList extends React.Component{
    state = {
        phoneUsersList: [{
            name: 'Stambek',
            number: 777395395,
            workPlace: 'Osh bazar'
        },
        {
            name: 'Atakhan',
            number: 9379992,
            workPlace: 'Amazon'
        },
        {
            name: 'Ali',
            number: 123456789,
            workPlace: 'Tesla'
        }
    ]
    }

    onDeleteUser = (index)=>{
        const {phoneUsersList} = this.state
        phoneUsersList.splice(index, 1)
        this.setState({phoneUsersList})
    }

    onAddContact = (contactData)=>{
        const newContact = contactData;
        const {phoneUsersList} = this.state;
        phoneUsersList.push(newContact);
        this.setState({phoneUsersList})
    }

    render(){
        return(
            <div className='PhoneList'>
                <AddContact onAddContact={this.onAddContact}/>
                <br/>
                <hr/>
                <br/>
                <div className='Phone'>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Work place</th>
                            <th>Delete Contact</th>
                        </tr>
                        {this.state.phoneUsersList.map((user, index)=>{
                            return <Phone user={user} index={index} onDeleteUser={this.onDeleteUser}/>
                        })}
                        
                    </table>
                </div>
            </div>
        )
    }
}

export default PhoneList