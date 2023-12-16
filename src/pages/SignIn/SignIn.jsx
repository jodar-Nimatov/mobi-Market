import React, { useState } from 'react';
import './SignIn.scss'
import signinimg from '../../Assets/images/Photo background.png'
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Link} from "react-router-dom";


function SignIn(props) {

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='signin'>
            <div className="signin-inner">
                <div className="signin-inner-left">
                    <img src={signinimg} alt=""/>
                </div>
                <div className="signin-inner-right">
                    <form className='signin-inner-right-form'>
                        <TextField
                            sx={{width: '335px', height: '35px', fontSize: '16px'}}
                            id="standard-basic"
                            label="Имя пользователя"
                            variant="standard"
                        />
                        <TextField
                            id="standard-basic"
                            label="Пароль"
                            variant="standard"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Link to={'/resetpassword'}>
                            <span>
                                <p>
                                    Забыли пароль
                                </p>
                            </span>
                        </Link>
                        <button className='signin-inner-right-form-btn'>
                            Войти
                        </button>
                        <Link to={'/signup'}>
                            <span className="signin-inner-right-form-registerbtn">
                                <p>
                                    Зарегистрироваться
                                </p>
                            </span>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;