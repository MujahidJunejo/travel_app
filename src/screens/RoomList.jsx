import React from 'react'

function RoomList() {
  return (
    <>
    <div className="content-body">
			
			<div className="container-fluid">
				<div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
					<div className="card-action coin-tabs mb-2">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-bs-toggle="tab" href="#AllRooms">All Rooms</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#ActiveEmployee">Active Employee</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#InactiveEmployee">Inactive Employee</a>
							</li>
						</ul>
					</div>
					<div className="d-flex align-items-center mb-2"> 
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
									<div className="tab-pane fade active show" id="AllRooms">
										<div className="table-responsive">
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all3">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll3"/>
															</div>
														</th>
														<th>Room Name</th>
														<th>Bed Type</th>
														<th>Room Floor</th>
														<th>Facilities</th>
														<th>Rate</th>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room4.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-success btn-md">ACTIVE</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room5.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room6.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div className="">
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-success btn-md">ACTIVE</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room7.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div className="">
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room6.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-success btn-md">ACTIVE</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room7.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div className="">
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all1">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll1"/>
															</div>
														</th>
														<th>Room Name</th>
														<th>Bed Type</th>
														<th>Room Floor</th>
														<th>Facilities</th>
														<th>Rate</th>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room7.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room6.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-success btn-md">ACTIVE</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room7.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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
											<table className="table card-table display mb-4 shadow-hover table-responsive-lg" id="guestTable-all2">
												<thead>
													<tr>
														<th className="bg-none">
															<div className="form-check style-1">
															  <input className="form-check-input" type="checkbox" value="" id="checkAll2"/>
															</div>
														</th>
														<th>Room Name</th>
														<th>Bed Type</th>
														<th>Room Floor</th>
														<th>Facilities</th>
														<th>Rate</th>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room7.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room6.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-success btn-md">ACTIVE</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room7.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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
															<div className="room-list-bx d-flex align-items-center">
																<img className="me-3 rounded" src="images/room/room7.jpg" alt=""/>
																<div>
																	<span className=" text-secondary fs-14 d-block">#12341225</span>
																	<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
																</div>
															</div>
														</td>
														<td className="">
															<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
														</td>
														<td>
															<div>
																
																<span className="fs-16 font-w500">Floor A-1</span>
															</div>
														</td>
														<td className="facility">
															<div>
																<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
															</div>
														</td>
														<td>
															<div className="">
																<span className="mb-2">Price</span>	
																<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
															</div>
														</td>
														<td>
															<a href="javascript:void(0);" className="btn btn-danger btn-md">BOOKED</a>
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

export default RoomList