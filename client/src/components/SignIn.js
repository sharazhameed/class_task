import React from 'react';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleCheckLogin = async e => {
    e.preventDefault();

    const responce = await fetch('http://localhost:3001/task_form/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await responce.json();
    console.log(json);
  };
  return (
    <div className="container ">
      <div className="container-sm card_mine">
        <div className=" ">
          <form onSubmit={handleCheckLogin}>
            <h3 className="">Login</h3>
            <p className="inline text-align-center">
              Build a Sign In Page to display your commands on bootstrap
              <span className="text-success"> :text with green color </span>
              pseudo-element
            </p>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="sheraz@whatevermail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check mt-3 d-flex align-items-center ">
              <input
                className="form-check-input p-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label label_mar mx-2"
                htmlFor="flexCheckDefault"
              >
                Remember
              </label>
            </div>
            <button type="submit" className="btn btn-primary my-3 px-4 btn_me">
              Sign in
            </button>
            <p>
              <a href="https://www.memedroid.com/"><br/>
                Works in latest Chrome, Safari and Firefox. This is a clickable
                section that takes you to new page
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
