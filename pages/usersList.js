import React from 'react';
import Layout from '../components/layout';


var style1 = {
    padding: '10px'
};

var style2 = {    
    display: 'block'
};

export default class usersList extends React.Component{
    constructor(props){
        super (props);

        this.state = { data: [{ _id: '', email: 'loading........', name: '' }] };            
    };
    

    componentDidMount(){
        fetch('/api/users')
            .then((response) => {
                return response.json();
            })
                .then((data) => {
                    this.setState({ data: data });
                });
    };
    

    render(){
        
        return (
            <Layout>
                 <table style={style2}>
                    <thead>
                        <tr style={style1}>
                            <td style={style1}>ID</td>
                            <td style={style1}>Email</td>
                            <td style={style1}>Name</td>
                            <td style={style1}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.data.map(function(user, i){
                            return (<tr style={style1}>
                                <td style={style1}>{user._id}</td>
                                <td style={style1}>{user.email}</td>
                                <td style={style1}>{user.name}</td>
                                <td><button>Delete</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                <div style={style1}><button>Add new user</button></div>
            </Layout>            
        )
        }
}