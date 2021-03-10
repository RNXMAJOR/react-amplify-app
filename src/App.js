import logo from './logo.svg';
import image from './GabonFlag.png';
import './App.css';

function App() {
  return (
    <main className="form-signin">
      <form>
        <img className="mb-4" src={image} alt="" width="70" height="70">
        <h1 >Please sign in</h1>
        <label for="inputEmail" className="visually-hidden">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" className="visually-hidden">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </main>
    
  );
}

export default App;