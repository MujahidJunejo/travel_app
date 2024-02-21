import React from 'react'

function CustomerDetails() {
  return (
    <>
<div className="header">
			<div className="header-content">
				<nav className=" navbar-expand">
					<div className="collapse navbar-collapse justify-content-between">
						<div className="header-left">
							<div className="dashboard_bar">
								Guest Details
							</div>
						</div>
						<div className="nav-item d-flex align-items-center">
							<div className="input-group search-area">
								<input type="text" className="form-control" placeholder=""/>
								<span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
							</div>
						</div>
						<ul className="navbar-nav header-right">
							<li className="nav-item dropdown notification_dropdown">
								<a className="nav-link" href="javascript:void(0);">
								<svg xmlns="http://www.w3.org/2000/svg" width="26.309" height="23.678" viewBox="0 0 26.309 23.678">
								  <path id="Path_1955" data-name="Path 1955" d="M163.217,78.043a7.409,7.409,0,0,1,10.5-10.454l.506.506.507-.506a7.409,7.409,0,0,1,10.5,10.454L175.181,88.686a1.316,1.316,0,0,1-1.912,0Zm11.008,7.823,9.1-9.632.027-.027a4.779,4.779,0,1,0-6.759-6.757l-1.435,1.437a1.317,1.317,0,0,1-1.861,0l-1.437-1.437a4.778,4.778,0,0,0-6.758,6.757l.026.027Z" transform="translate(-161.07 -65.42)" fill="#135846" fill-rule="evenodd"/>
								</svg>
								</a>
							</li>	
							<li className="nav-item dropdown notification_dropdown">
								<a className="nav-link bell-link " href="javascript:void(0);">
								<svg xmlns="http://www.w3.org/2000/svg" width="26.667" height="24" viewBox="0 0 26.667 24">
								  <g id="_014-mail" data-name="014-mail" transform="translate(0 -21.833)">
									<path id="Path_1962" data-name="Path 1962" d="M26.373,26.526A6.667,6.667,0,0,0,20,21.833H6.667A6.667,6.667,0,0,0,.293,26.526,6.931,6.931,0,0,0,0,28.5V39.166a6.669,6.669,0,0,0,6.667,6.667H20a6.669,6.669,0,0,0,6.667-6.667V28.5A6.928,6.928,0,0,0,26.373,26.526ZM6.667,24.5H20a4.011,4.011,0,0,1,3.947,3.36L13.333,33.646,2.72,27.86A4.011,4.011,0,0,1,6.667,24.5ZM24,39.166a4.012,4.012,0,0,1-4,4H6.667a4.012,4.012,0,0,1-4-4V30.873L12.693,36.34a1.357,1.357,0,0,0,1.28,0L24,30.873Z" transform="translate(0 0)" fill="#135846"/>
								  </g>
								</svg>
									<span className="badge light text-white bg-primary rounded-circle">76</span>
								</a>
							</li>	
							<li className="nav-item dropdown notification_dropdown">
								<a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
									<svg xmlns="http://www.w3.org/2000/svg" width="19.375" height="24" viewBox="0 0 19.375 24">
									  <g id="_006-notification" data-name="006-notification" transform="translate(-341.252 -61.547)">
										<path id="Path_1954" data-name="Path 1954" d="M349.741,65.233V62.747a1.2,1.2,0,1,1,2.4,0v2.486a8.4,8.4,0,0,1,7.2,8.314v4.517l.971,1.942a3,3,0,0,1-2.683,4.342h-5.488a1.2,1.2,0,1,1-2.4,0h-5.488a3,3,0,0,1-2.683-4.342l.971-1.942V73.547a8.4,8.4,0,0,1,7.2-8.314Zm1.2,2.314a6,6,0,0,0-6,6v4.8a1.208,1.208,0,0,1-.127.536l-1.1,2.195a.6.6,0,0,0,.538.869h13.375a.6.6,0,0,0,.536-.869l-1.1-2.195a1.206,1.206,0,0,1-.126-.536v-4.8a6,6,0,0,0-6-6Z" transform="translate(0 0)" fill="#135846" fill-rule="evenodd"/>
									  </g>
									</svg>

									<span className="badge light text-white bg-primary rounded-circle">4</span>
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<div id="DZ_W_Notification1" className="widget-media dlab-scroll p-3" style={{height:'380px'}}>
										<ul className="timeline">
											<li>
												<div className="timeline-panel">
													<div className="media me-2">
														<img alt="image" width="50" src="images/avatar/1.jpg"/>
													</div>
													<div className="media-body">
														<h6 className="mb-1">Dr sultads Send you Photo</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media me-2 media-info">
														KG
													</div>
													<div className="media-body">
														<h6 className="mb-1">Resport created successfully</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media me-2 media-success">
														<i className="fa fa-home"></i>
													</div>
													<div className="media-body">
														<h6 className="mb-1">Reminder : Treatment Time!</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											 <li>
												<div className="timeline-panel">
													<div className="media me-2">
														<img alt="image" width="50" src="images/avatar/1.jpg"/>
													</div>
													<div className="media-body">
														<h6 className="mb-1">Dr sultads Send you Photo</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media me-2 media-danger">
														KG
													</div>
													<div className="media-body">
														<h6 className="mb-1">Resport created successfully</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media me-2 media-primary">
														<i className="fa fa-home"></i>
													</div>
													<div className="media-body">
														<h6 className="mb-1">Reminder : Treatment Time!</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<a className="all-notification" href="javascript:void(0);">See all notifications <i className="ti-arrow-end"></i></a>
								</div>
							</li>
							<li className="nav-item dropdown notification_dropdown">
								<a className="nav-link " href="javascript:void(0);" data-bs-toggle="dropdown">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21.6" viewBox="0 0 24 21.6">
									  <g id="_008-chat" data-name="008-chat" transform="translate(-250.397 -62.547)">
										<path id="Path_1956" data-name="Path 1956" d="M274.4,67.347a4.8,4.8,0,0,0-4.8-4.8H255.2a4.8,4.8,0,0,0-4.8,4.8v15.6a1.2,1.2,0,0,0,2.048.848l3.746-3.745a2.4,2.4,0,0,1,1.7-.7H269.6a4.8,4.8,0,0,0,4.8-4.8Zm-2.4,0a2.4,2.4,0,0,0-2.4-2.4H255.2a2.4,2.4,0,0,0-2.4,2.4v12.7l1.7-1.7a4.8,4.8,0,0,1,3.395-1.406H269.6a2.4,2.4,0,0,0,2.4-2.4Zm-15.6,7.2H266a1.2,1.2,0,1,0,0-2.4h-9.6a1.2,1.2,0,0,0,0,2.4Zm0-4.8h12a1.2,1.2,0,1,0,0-2.4h-12a1.2,1.2,0,0,0,0,2.4Z" fill="#135846" fill-rule="evenodd"/>
									  </g>
									</svg>
									<span className="badge light text-white bg-primary rounded-circle">15</span>
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<div id="DZ_W_TimeLine02" className="widget-timeline dlab-scroll style-1 ps ps--active-y p-3 height370">
									<ul className="timeline">
										<li>
											<div className="timeline-badge primary"></div>
											<a className="timeline-panel text-muted" href="javascript:void(0);">
												<span>10 minutes ago</span>
												<h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
											</a>
										</li>
										<li>
											<div className="timeline-badge info">
											</div>
											<a className="timeline-panel text-muted" href="javascript:void(0);">
												<span>20 minutes ago</span>
												<h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
												<p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
											</a>
										</li>
										<li>
											<div className="timeline-badge danger">
											</div>
											<a className="timeline-panel text-muted" href="javascript:void(0);">
												<span>30 minutes ago</span>
												<h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
											</a>
										</li>
										<li>
											<div className="timeline-badge success">
											</div>
											<a className="timeline-panel text-muted" href="javascript:void(0);">
												<span>15 minutes ago</span>
												<h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
											</a>
										</li>
										<li>
											<div className="timeline-badge warning">
											</div>
											<a className="timeline-panel text-muted" href="javascript:void(0);">
												<span>20 minutes ago</span>
												<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
											</a>
										</li>
										<li>
											<div className="timeline-badge dark">
											</div>
											<a className="timeline-panel text-muted" href="javascript:void(0);">
												<span>20 minutes ago</span>
												<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
											</a>
										</li>
									</ul>
								</div>
								</div>
							</li>
							<li className="nav-item dropdown header-profile">
								<a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
									<img src="images/profile/pic1.jpg" width="20" alt=""/>
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<a href="app-profile.html" className="dropdown-item ai-icon">
										<svg id="icon-user2" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
										<span className="ms-2">Profile </span>
									</a>
									<a href="email-inbox.html" className="dropdown-item ai-icon">
										<svg id="icon-inbox1" xmlns="http://www.w3.org/2000/svg" className="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
										<span className="ms-2">Inbox </span>
									</a>
									<a href="login.html" className="dropdown-item ai-icon">
										<svg  xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
										<span className="ms-2">Logout </span>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>

    	<div >
			
			<div className="container-fluid">
				<div className="row mt-4">
					<div className="col-xl-12">
						<div className="row">
							<div className="col-xl-12">
								<div className="card overflow-hidden">
									<div className="row m-0">
										<div className="col-xl-6 p-0">
											<div className="card-body">
												<div className="guest-profile">
													<div className="d-flex">
														<img src="images/profile/pic1.jpg" alt=""/>
														<div>
															<h2 className="font-w600">Roberto Mansini</h2>
															<span className="text-secondary">ID 1234124512551</span>
															<div className="call d-flex align-items-center"> 
															<a href="javascript:void(0);"><i className="fas fa-phone-alt text-secondary"></i></a>
																<button className="btn btn-secondary ms-3">
																	<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24.18" viewBox="0 0 24 24.18">
																	  <g id="_032-speech-bubble" data-name="032-speech-bubble" transform="translate(-1.63 0)">
																		<g id="Group_9" data-name="Group 9" transform="translate(1.63 0)">
																		  <path id="Path_118" data-name="Path 118" d="M22.193,3.6A12,12,0,0,0,1.636,12.361a11.434,11.434,0,0,0,.82,4.015,11.885,11.885,0,0,0,1.7,2.969l-.99,2.347a1.778,1.778,0,0,0,1.951,2.46l4.581-.792A12.013,12.013,0,0,0,22.193,3.6ZM12.749,16.8H9.61a.9.9,0,1,1,0-1.81h3.139a.911.911,0,0,1,.9.9A.893.893,0,0,1,12.749,16.8Zm4.892-3.676H9.61a.911.911,0,0,1-.9-.9.893.893,0,0,1,.9-.9h8.031a.9.9,0,1,1,0,1.81Zm0-3.7H9.61a.9.9,0,1,1,0-1.81h8.031a.911.911,0,0,1,.9.9A.93.93,0,0,1,17.641,9.421Z" transform="translate(-1.63 0)" fill="#fff"/>
																		</g>
																	  </g>
																	</svg>
																	Send Message
																</button>	
															</div>
														</div>
														<div className="dropdown dropend ms-auto">
															<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																	<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																	<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																</svg>

															</a>
															<div className="dropdown-menu">
																<a className="dropdown-item" href="javascript:void(0);">Edit</a>
																<a className="dropdown-item" href="javascript:void(0);">Delete</a>
															</div>
														</div>
													</div>
													<div className="d-flex">
														<div className="mt-4 check-status">
															<span className="d-block mb-2">Check In</span>	
															<span className="font-w500 fs-16">October 30th, 2021 | 08:23 AM</span>
														</div>
														<div className="mt-4">
															<span className="d-block mb-2">Check Out</span>	
															<span className="font-w500 fs-16">November 2th, 2021</span>
														</div>
													</div>
												</div>
												<div className="d-flex flex-wrap">
													<div className="mt-4 check-status">
														<span className="d-block mb-2">Room Info</span>	
														<h4 className="font-w500 fs-24">Deluxe Z - 002424</h4>
													</div>
													<div className="mt-4 ms-3">
														<span className="d-block mb-2 text-black">Price</span>	
														<span className="font-w500 fs-24 text-black">$145<small className="fs-14 ms-2 text-secondary">/night</small></span>
													</div>
												</div>
												<p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
												<div className="facilities">
													<div className="mb-3 ">
														<span className="d-block mb-3">Facilities</span>
														<a href="javascript:void(0);" className="btn btn-secondary light btn-lg">
														<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
															<g>
															<path  d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z" transform="translate(-2 -6)" fill="#135846"/>
															</g>
														</svg>
														3 Bed Space</a>
														<a href="javascript:void(0);" className="btn btn-secondary light btn-lg">
														<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="23.512" viewBox="0 0 20 23.512">
														  <g id="_010-security" data-name="010-security" transform="translate(-310.326 -159.324)">
															<path id="Path_1958" data-name="Path 1958" d="M330.326,165.226a2.952,2.952,0,0,0-1.71-2.8l-7.5-2.951a2.139,2.139,0,0,0-1.581,0l-7.5,2.951a2.951,2.951,0,0,0-1.709,2.8v5.318a10.445,10.445,0,0,0,4.372,8.772l5.142,3.372a.871.871,0,0,0,.971,0l5.143-3.372a10.448,10.448,0,0,0,4.372-8.772Zm-2,0a.591.591,0,0,0-.342-.561l-7.5-2.951a.432.432,0,0,0-.317,0l-7.5,2.951a.59.59,0,0,0-.341.561v5.318a7.985,7.985,0,0,0,3.343,6.707l4.657,3.054,4.656-3.054a7.986,7.986,0,0,0,3.344-6.707Zm-8.657,7.273,4.949-5.843a.9.9,0,0,1,1.415,0,1.338,1.338,0,0,1,0,1.67L320.376,175a.9.9,0,0,1-1.414,0l-2.829-3.338a1.337,1.337,0,0,1,0-1.669.9.9,0,0,1,1.414,0Z" transform="translate(0 0)" fill="#135846" fill-rule="evenodd"/>
														  </g>
														</svg>
														24 Hours Guard</a>
														<a href="javascript:void(0);" className="btn btn-secondary light btn-lg">
														<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="15.75" viewBox="0 0 20 15.75">
														  <g id="internet" transform="translate(0 -2.15)">
															<g id="Group_22" data-name="Group 22">
															  <path id="Path_1969" data-name="Path 1969" d="M18.3,7.6a11.709,11.709,0,0,0-16.6,0,.967.967,0,0,1-1.4,0,.967.967,0,0,1,0-1.4,13.641,13.641,0,0,1,19.4,0,.99.99,0,0,1-1.4,1.4Z" fill="#135846"/>
															</g>
															<g id="Group_23" data-name="Group 23">
															  <path id="Path_1970" data-name="Path 1970" d="M15.4,10.4a7.667,7.667,0,0,0-10.7,0A.99.99,0,0,1,3.3,9,9.418,9.418,0,0,1,16.8,9a.99.99,0,0,1-1.4,1.4Z" fill="#135846"/>
															</g>
															<g id="Group_24" data-name="Group 24">
															  <path id="Path_1971" data-name="Path 1971" d="M12.6,13.4a3.383,3.383,0,0,0-4.9,0,.967.967,0,0,1-1.4,0,1.087,1.087,0,0,1,0-1.5,5.159,5.159,0,0,1,7.7,0,1.088,1.088,0,0,1,0,1.5A.967.967,0,0,1,12.6,13.4Z" fill="#135846"/>
															</g>
															<circle id="Ellipse_10" data-name="Ellipse 10" cx="1.9" cy="1.9" r="1.9" transform="translate(8.2 14.1)" fill="#135846"/>
														  </g>
														</svg>
														Free Wifi</a>
													</div>	
													<a href="javascript:void(0);" className="btn btn-secondary light">2 Bathroom</a>
													<a href="javascript:void(0);" className="btn btn-secondary light">Air Conditioner</a>
													<a href="javascript:void(0);" className="btn btn-secondary light">Television</a>
												</div>
											</div>
										</div>
										<div className="col-xl-6 p-0">
											<div className="guest-carousel owl-carousel owl-carousel owl-loaded owl-drag owl-dot">
												<div className="item">
													<div className="rooms">
														<img src="images/gallery/hotel1.jpg" alt=""/>
														<div className="booked">
															<p className="fs-20 font-w500">BOOKED</p>
														</div>
														<div className="img-content">
															<h4 className="fs-24 font-w600 text-white">Bed Room</h4>
															<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci</p>	
														</div>
													</div>
												</div>
												<div className="item">
													<div className="rooms">
														<img src="images/gallery/hotel2.jpg" alt=""/>
														<div className="img-content">
															<h4 className="fs-24 font-w500 text-white">Bed Room</h4>
															<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci</p>	
														</div>
													</div>
												</div>
												<div className="item">
													<div className="rooms">
														<img src="images/gallery/hotel3.jpg" alt=""/>
														<div className="img-content">
															<h4 className="fs-24 font-w500 text-white">Bed Room</h4>
															<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci</p>	
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header border-0">
										<h4 className="fs-20">Purchase History</h4>
										<div className="newest ms-3">
											<select className="default-select">
												<option>Newest</option>
												<option>Oldest</option>
											</select>
										</div>	
									</div>
									<div className="card-body pt-0">
										<div className="row align-items-center">
											<div className="col-xl-4 col-sm-7">
												<div className="purchase-history d-flex align-items-center">
													<img src="images/gallery/hotel1.jpg" alt=""/>
													<div className="ms-3">
														<h4 className="guest-text font-w500">Deluxe A-91234</h4>
														<span className="fs-14 d-block mb-2 text-secondary">#000123456</span>
														<span className="fs-16 text-nowrap">Oct 30th 2020 09:21 AM</span>
													</div>
												</div>
											</div>
											<div className="col-xl-2 col-sm-5 col-6">
												<div className="ms-0 ms-sm-2">
													<span className="d-block">Check In</span>
													<span className="guest-text font-w500">Nov 2th, 2020</span>
													<span className="fs-14 d-block">9.46 PM</span>
												</div>
											</div>
											<div className="col-xl-2 col-sm-4 col-6">
												<div>
													<span className="d-block">Check Out</span>
													<span className="guest-text font-w500">Nov 2th, 2020</span>
													<span className="fs-14 d-block">9.46 PM</span>
												</div>
											</div>
											<div className="col-xl-2 col-sm-4 col-6">
												<div className="mt-sm-0 mt-3">
													<span className="d-block mb-2 text-black">Price</span>	
													<span className="font-w500 fs-24 text-black">$145<small className="fs-14 ms-2 text-secondary">/night</small></span>
												</div>
											</div>
											<div className="col-xl-2 col-sm-4 col-6">
												<div className="d-flex align-items-center mt-sm-0 mt-3">
													<a href="javascript:void(0);" className="btn btn-secondary light">View Notes</a>
													<div className="dropdown dropend ms-auto">
														<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
														</a>
														<div className="dropdown-menu">
															<a className="dropdown-item" href="javascript:void(0);">Edit</a>
															<a className="dropdown-item" href="javascript:void(0);">Delete</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="row align-items-center mt-5">
											<div className="col-xl-4 col-sm-7">
												<div className="purchase-history d-flex align-items-center">
													<img src="images/gallery/hotel2.jpg" alt=""/>
													<div className="ms-3">
														<h4 className="guest-text font-w500">Deluxe A-91234</h4>
														<span className="fs-14 d-block mb-2 text-secondary">#000123456</span>
														<span className="fs-16 text-nowrap">Oct 30th 2020 09:21 AM</span>
													</div>
												</div>
											</div>
											<div className="col-xl-2 col-sm-5 col-6">
												<div className="ms-2">
													<span className="d-block">Check In</span>
													<span className="guest-text font-w500">Nov 2th, 2020</span>
													<span className="fs-14 d-block">9.46 PM</span>
												</div>
											</div>
											<div className="col-xl-2 col-sm-4 col-6">
												<div className="mt-sm-0 mt-2">
													<span className="d-block">Check Out</span>
													<span className="guest-text font-w500">Nov 2th, 2020</span>
													<span className="fs-14 d-block">9.46 PM</span>
												</div>
											</div>
											<div className="col-xl-2 col-sm-4 col-6">
												<div className="mt-sm-0 mt-3">
													<span className="d-block mb-2 text-black">Price</span>	
													<span className="font-w500 fs-24 text-black">$145<small className="fs-14 ms-2 text-secondary">/night</small></span>
												</div>
											</div>
											<div className="col-xl-2 col-sm-4 col-6">
												<div className="d-flex align-items-center mt-sm-0 mt-3">
													<a href="javascript:void(0);" className="btn btn-secondary light">View Notes</a>
													<div className="dropdown dropend ms-auto">
														<a href="javascript:void(0);" className="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
														</a>
														<div className="dropdown-menu">
															<a className="dropdown-item" href="javascript:void(0);">Edit</a>
															<a className="dropdown-item" href="javascript:void(0);">Delete</a>
														</div>
													</div>
												</div>
											</div>
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

export default CustomerDetails