import React from 'react'
import './login.less'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        }
        this.onHandleClick = this.onHandleClick.bind(this)
    }

    componentDidMount() {
        console.log("登录")
    }

    handUserChange = e => {
        console.log(e);
        this.setState({
            user: e.target.value
        })
    }
    handPassChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    onHandleClick() {
        let {user, password} = this.state
        console.log(user)
        console.log(password)
    }
    render() {
        return (
            <div>
                <div></div>
                <div className="box">
                    <div className="container">
                        <div className="box-container">
                            <div className="logo-index">bilibili</div>
                            <div className="login-input" ><input onChange={this.handUserChange} className="login-input" type="text" placeholder="请输入用户名"></input></div>
                            <div className="login-input" ><input onChange={this.handPassChange} className="login-input" type="password" placeholder="请输入密码"></input></div>
                            <div className="login-button" ><button onClick={this.onHandleClick}>登录</button></div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}

