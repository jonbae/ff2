import React from 'react' 

export default class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {}

        this.requestConnection = this.requestConnection.bind(this);
    }

    componentDidMount(){
        // needs slight modification: change requestUser to requestAllTrainers
        // if(this.props.profileUser?.trainerId) {
        //     this.props.requestUser(this.props.trainerId);
        // }
        // else {
        //     this.props.requestUsers();
        // }
        this.props.requestUser(this.props.profileUserId)
    }

    // requestConnection(){
    requestConnection(){
        const {currentUser, profileUser, updateUser} = this.props
        // if trainee then request trainer
        if(currentUser.trainerId)
            updateUser({...currentUser, trainer_id: profileUser.id})
        else 
            updateUser({...profileUser, trainer_id: currentUser.id})
        
    }



    render() {
        return (
            <div>
                {/* cover photo */}
                <div>
                    {/* picture  */}
                    {/* name  */}
                    {this.props.profileUser?.username}
                    {/* request trainer button  */}
                    <button onClick={this.requestConnection}>
                        Request Connection
                    </button>    
                </div>
                {/* credentials */}
                {/* stats  */}
                {/* ratings & reviews */}
                
            </div>
        )
    }
}