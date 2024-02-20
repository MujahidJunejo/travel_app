import React from 'react'

function GuestList() {
  return (
    <>
    <div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center flex-wrap">
					<div className="card-action coin-tabs mb-2">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-bs-toggle="tab" href="#AllGuest">All Guest</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#Pending">Pending</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#Booked">Booked</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#Canceled">Canceled</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#Refund">Refund</a>
							</li>
						</ul>
					</div>
					<div className="d-flex align-items-center mb-2 flex-wrap"> 
						<div className="guest-calendar">
							<div id="reportrange" className="pull-right reportrange" style={{width: '100%'}}>
								<span></span><b className="caret"></b>
								<i className="fas fa-chevron-down ms-3"></i>
							</div>
						</div>
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
									<div className="tab-pane active show" id="AllGuest">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover default-table table-responsive-lg" id="guestTable-all">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll" />
															</div>
														</th>
														<th>Guest</th>
														<th>Order Date</th>
														<th>Check In</th>
														<th>Check Out</th>
														<th>Special Request</th>
														<th>Room Type</th>
														<th className="text-center">Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/1.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Cahyadi Purnomo</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/1.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Cahyadi Purnomo</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Angela Smith</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/3.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Hendric Suratman</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/4.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Jajang Lawrence</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/5.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Kevin Stuart</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/6.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Steven</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/7.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Samantha</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
									<div className="tab-pane" id="Pending">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all1">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll1" />
															</div>
														</th>
														<th>Guest</th>
														<th>Order Date</th>
														<th>Check In</th>
														<th>Check Out</th>
														<th>Special Request</th>
														<th>Room Type</th>
														<th className="text-center">Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Cahyadi Purnomo</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/1.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Cahyadi Purnomo</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Angela Smith</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/3.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Hendric Suratman</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/4.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Jajang Lawrence</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
									<div className="tab-pane" id="Booked">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all2">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll3" />
															</div>
														</th>
														<th>Guest</th>
														<th>Order Date</th>
														<th>Check In</th>
														<th>Check Out</th>
														<th>Special Request</th>
														<th>Room Type</th>
														<th className="text-center">Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/1.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Cahyadi Purnomo</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/1.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Cahyadi Purnomo</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Angela Smith</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
									<div className="tab-pane" id="Canceled">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all3">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll4" />
															</div>
														</th>
														<th>Guest</th>
														<th>Order Date</th>
														<th>Check In</th>
														<th>Check Out</th>
														<th>Special Request</th>
														<th>Room Type</th>
														<th className="text-center">Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Angela Smith</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
									<div className="tab-pane" id="Refund">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all4">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll5" />
															</div>
														</th>
														<th>Guest</th>
														<th>Order Date</th>
														<th>Check In</th>
														<th>Check Out</th>
														<th>Special Request</th>
														<th>Room Type</th>
														<th className="text-center">Status</th>
														<th className="bg-none"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Angela Smith</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
															  <input className="form-check-input" type="checkbox" value="" />
															</div>
														</td>
														<td>
															<div className="concierge-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/avatar/2.jpg" alt="" />
																<div>
																	<h5 className="fs-16 mb-0 text-nowrap"><a className="text-black" href="javascript:void(0);">Angela Smith</a></h5>
																	<span className="text-primary fs-14">#EMP-00025</span>
																</div>
															</div>
														</td>
														<td className="text-nowrap">
															<span>Oct 30th 2020 09:21 AM</span>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 2th, 2020</h5>
																<span>9.46 PM</span>
															</div>
														</td>
														<td>
															<div>
																<h5 className="text-nowrap">Nov 4th, 2020</h5>
																<span>6.12 PM</span>
															</div>
														</td>
														<td className="request">
															<a href="javascript:void(0);" className="btn  btn-sm">View Notes</a>
														</td>
														<td>
															<span className="font-w500">Deluxe A - 02</span>
														</td>
														<td>
															<div className="request">
																<a href="javascript:void(0);" className="btn btn-md text-primary">Refund</a>
															</div>
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
    
    </>
  )
}

export default GuestList