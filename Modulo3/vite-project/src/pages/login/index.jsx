import './login.css'
import { Button } from "../../components/button";
import { useNavigate } from 'react-router-dom';

export function Login(){  
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/HomePage'); // Redireciona para home
      };
    
    return(
        <div class="login-container">
            <h2>Login</h2>
            <form method="post">
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div class="form-group">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <Button onClick={handleNavigate}>Entrar</Button>
            </form>
        </div>
    )
}