import React from 'react'; 
import { withRouter } from 'react-router';
class UserIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        
        this.props.history.push(`/users/${this.props.user.id}`);
    }

    render() {
        const {username} = this.props.user
        

        return (
            <ul>
                <li>
                    {this.props.status} name: {username}
                </li>
                <button onClick={this.handleClick}>
                    show schedule
                </button>
                
            </ul>
        )
    }
}

export default withRouter(UserIndexItem)