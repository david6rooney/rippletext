function Login() {
  return (
    <div id="login">
      <p>Sign Up</p>
      <form>
        <label>
          First Name:
          <input type="text" name="firstname" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastname" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>Or Login</p>
    </div>
  );
}

export default Login;
