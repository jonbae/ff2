import React from 'react'; 

export default class UserIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() {
        const {username} = this.props.user
        

        return (
            <ul>
                <li>
                    {this.props.status} name: {username}
                </li>
            </ul>
        )
    }
}
