import React from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  let navigate = useNavigate();
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleCheckLogin = async e => {
    e.preventDefault();
    const responce = await fetch('http://localhost:3001/task_form/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
      }),
    });
    const json = await responce.json();
    console.log(json);
    console.log('login');
  };
  const handleNavigate = () => {
    navigate('/signin');
  };

  return (
    <div className="container ">
      <div className="container-sm card_mine">
        <div className=" ">
          <form onSubmit={handleCheckLogin}>
            <h3 className="">Sign Up</h3>
            <p className="inline text-align-center">
              Build a Sign Up Page to display your commands on bootstrap
              <span className="text-success"> :text with green color </span>
              pseudo-element
            </p>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
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
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check mt-3 d-flex align-items-center ">
              <input
                className="form-check-input p-2"
                type="checkbox"
                id="flexCheckDefault"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label
                className="form-check-label label_mar mx-2"
                htmlFor="flexCheckDefault"
              >
                Remember
              </label>
            </div>
            <button type="submit" className="btn btn-primary my-3 px-4 btn_me">
              Sign Up
            </button>
            <label
              style={{ cursor: 'pointer' }}
              htmlFor=""
              onClick={handleNavigate}
            >
              Already Signed Up
            </label>
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

export default SignUp;
