import React from 'react'

function Employees() {
  return (
    <>
    <div className="content-body">
			
			<div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center flex-wrap">
					<div className="card-action coin-tabs mb-3">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-bs-toggle="tab" href="#AllEmployee">All Employee</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#ActiveEmployee">Active Employee</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#InactiveEmployee">Inactive Employee</a>
							</li>
						</ul>
					</div>
					<div className="d-flex align-items-center mb-3"> 
						<a href="javascript:void(0);" className="btn btn-secondary">+ New Employee</a>
						<div className="newest ms-3">
							<select className="default-select">
								<option>Newest</option>
								<option>Oldest</option>
							</select>
						</div>	
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body p-0">
								<div className="tab-content">	
									<div className="tab-pane active show" id="AllEmployee">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll"/>
															</div>
														</th>
														<th>Name</th>
														<th>Job Desk</th>
														<th>Schedule</th>
														<th>Contact</th>
														<th>Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/pic1.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">James Sitepu</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-success">ACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/1.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Louis Humbs</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Offer restaurant and activity recommendations and assist guests in arranging transportation</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-success">ACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Jackson Marquez</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-danger">INACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/3.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Samantha William</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Anticipate guests needs in order to accommodate them and provide an exceptional guest experience</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-success">ACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/4.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">David Here</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-danger">INACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/3.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Elina Moss</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Offer restaurant and activity recommendations and assist guests in arranging transportation</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-success">ACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>	
									</div>
									<div className="tab-pane" id="ActiveEmployee">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all2">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll1"/>
															</div>
														</th>
														<th>Name</th>
														<th>Job Desk</th>
														<th>Schedule</th>
														<th>Contact</th>
														<th>Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/pic1.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">James Sitepu</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-success">ACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/1.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Louis Humbs</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Offer restaurant and activity recommendations and assist guests in arranging transportation</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-success">ACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Jackson Marquez</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-danger">INACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>		
									</div>
									<div className="tab-pane" id="InactiveEmployee">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all3">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll2"/>
															</div>
														</th>
														<th>Name</th>
														<th>Job Desk</th>
														<th>Schedule</th>
														<th>Contact</th>
														<th>Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/pic1.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">James Sitepu</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-success">ACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value=""/>
															</div>
														</td>
														<td>
															<div className="concierge-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt=""/>
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Jackson Marquez</a></h5>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																</div>
															</div>
														</td>
														<td className="job-desk3">
															<p className="mb-0">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</p>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Monday, Friday</h5>
																<span className="tex-secondary text-nowrap">Check schedule</span>
															</div>
														</td>
														<td>
															<div>
																
																<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
															</div>
														</td>
														<td>
															<span  className="font-w600 text-danger">INACTIVE</span>
														</td>
														<td>
															<div className="dropdown dropend">
																<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																		<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																	</svg>
																</a>
																<div className="dropdown-menu">
																	<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>		
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default Employees