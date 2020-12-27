import React from 'react'; 
import UserIndexItem from './user_index_item'


export default class UserIndex extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        if(this.props.trainerId) {
            this.props.requestUser(this.props.trainerId);
        }
        else {
            this.props.requestUsers();
        }
    }

    renderUsers(users){
        let userItem = users.map(user => {
            return <UserIndexItem
                key={user.id}
                user={user} 
                status={this.props.status}
            />
        })
        return userItem; 
    }


    render() {
        return (
            <div>
                <header>
                    this is the user index page
                </header>
                {this.renderUsers(this.props.users)}
            </div>
        )


    }

}