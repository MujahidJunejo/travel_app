import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    
    <body className="vh-100">
    <div className="authincation h-100">
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
										<a href="index.html"><img src="images/logo-full.png" alt=""/></a>
									</div>
                                    <h4 className="text-center mb-4">Sign in your account</h4>
                                    <form action="https://travl.dexignlab.com/xhtml/index.html">
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Email</strong></label>
                                            <input type="email" className="form-control" value="hello@example.com"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Password</strong></label>
                                            <input type="password" className="form-control" value="Password"/>
                                        </div>
                                        <div className="row d-flex justify-content-between mt-4 mb-2">
                                            <div className="mb-3">
                                               <div className="form-check custom-checkbox ms-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1"/>
													<label className="form-check-label" for="basic_checkbox_1">Remember my preference</label>
												</div>
                                            </div>
                                            <div className="mb-3">
                                                <a href="page-forgot-password.html">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Don't have an account? <Link className="text-primary" to="/register">Sign up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
</body>
    </>
  )
}

export default Login