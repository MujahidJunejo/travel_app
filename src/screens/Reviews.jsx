import React from 'react'

function Reviews() {
  return (
    <>
    <div >
			
			<div className="container-fluid">
				<div className="row mt-4">
					<div className="col-xl-12">
						<div className="row">
							<div className="col-xl-12">
								<div>
									<div className="reviews-slider owl-carousel owl-carousel owl-loaded owl-drag">
										<div className="items">
											<div className="customers review-slider">
												<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
												<div className="d-flex justify-content-between align-items-center mt-5">
													<div className="customer-profile d-flex ">
													<img src="images/users/user5.jpg" alt=""/>
													<div className="ms-3">
														<h5 className="mb-0"><a href="javascript:void(0);">Kusnaidi Anderson</a></h5>
														<span>4m ago</span>
													</div>
													</div>
													<div className="customer-button text-nowrap">
														<a href="javascript:void(0);"><i className="far fa-check-circle text-success"></i></a>
														<a href="javascript:void(0);"><i className="far fa-times-circle text-danger"></i></a>
													</div>
												</div>
											</div>
										</div>
										<div className="items">
											<div className="customers review-slider">
												<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
												<div className="d-flex justify-content-between align-items-center mt-5">
													<div className="customer-profile d-flex ">
													<img src="images/users/user6.jpg" alt=""/>
													<div className="ms-3">
														<h5 className="mb-0"><a href="javascript:void(0);">Kusnaidi Anderson</a></h5>
														<span>4m ago</span>
													</div>
													</div>
													<div className="customer-button text-nowrap">
														<a href="javascript:void(0);"><i className="far fa-check-circle text-success"></i></a>
														<a href="javascript:void(0);"><i className="far fa-times-circle text-danger"></i></a>
													</div>
												</div>
											</div>
										</div>
										<div className="items">
											<div className="customers review-slider">
												<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
												<div className="d-flex justify-content-between align-items-center mt-5">
													<div className="customer-profile d-flex ">
													<img src="images/users/user7.jpg" alt=""/>
													<div className="ms-3">
														<h5 className="mb-0"><a href="javascript:void(0);">Kusnaidi Anderson</a></h5>
														<span>4m ago</span>
													</div>
													</div>
													<div className="customer-button text-nowrap">
														<a href="javascript:void(0);"><i className="far fa-check-circle text-success"></i></a>
														<a href="javascript:void(0);"><i className="far fa-times-circle text-danger"></i></a>
													</div>
												</div>
											</div>
										</div>
										<div className="items">
											<div className="customers review-slider">
												<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
												<div className="d-flex justify-content-between align-items-center mt-5">
													<div className="customer-profile d-flex ">
													<img src="images/users/user5.jpg" alt=""/>
													<div className="ms-3">
														<h5 className="mb-0"><a href="javascript:void(0);">Kusnaidi Anderson</a></h5>
														<span>4m ago</span>
													</div>
													</div>
													<div className="customer-button text-nowrap">
														<a href="javascript:void(0);"><i className="far fa-check-circle text-success"></i></a>
														<a href="javascript:void(0);"><i className="far fa-times-circle text-danger"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="my-4 d-flex justify-content-between align-items-center flex-wrap">
								<div className="card-action coin-tabs mb-4">
									<ul className="nav nav-tabs" role="tablist">
										<li className="nav-item">
											<a className="nav-link active" data-bs-toggle="tab" href="#AllCustomerReviews">All Customer Reviews</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-bs-toggle="tab" href="#Published">Published</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-bs-toggle="tab" href="#InactiveEmployee">Archived</a>
										</li>
									</ul>
								</div>
								<div className="newest mb-4">
									<select className="default-select">
										<option>Newest</option>
										<option>Oldest</option>
									</select>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body p-0">
										<div className="tab-content">	
											<div className="tab-pane active show" id="AllCustomerReviews">
												<div className="table-responsive">
													<table className="table card-table display mb-4 shadow-hover table-responsive-lg review-tbl" id="guestTable-all">
														<thead>
															<tr>
																<th className="bg-none">
																	<div className="form-check style-1">
																	  <input className="form-check-input" type="checkbox" value="" id="checkAll"/>
																	</div>
																</th>
																<th>Order ID</th>
																<th>Date</th>
																<th>Customer</th>
																<th className="text-center">Comment</th>
																<th className="text-center">Action</th>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
																	</div>
																</td>
															</tr>	
														</tbody>
													</table>	
												</div>	
											</div>	
											<div className="tab-pane" id="Published">
												<div className="table-responsive">
													<table className="table card-table display mb-4 shadow-hover table-responsive-lg review-tbl" id="guestTable-all1">
														<thead>
															<tr>
																<th className="bg-none">
																	<div className="form-check style-1">
																	  <input className="form-check-input" type="checkbox" value="" id="checkAll"/>
																	</div>
																</th>
																<th>Order ID</th>
																<th>Date</th>
																<th>Customer</th>
																<th className="text-center">Comment</th>
																<th className="text-center">Action</th>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
																	</div>
																</td>
															</tr>	
														</tbody>	
													</table>	
												</div>
											</div>
											<div className="tab-pane" id="InactiveEmployee">
												<div className="table-responsive">
													<table className="table card-table display mb-4 shadow-hover table-responsive-lg review-tbl" id="guestTable-all2">
														<thead>
															<tr>
																<th className="bg-none">
																	<div className="form-check style-1">
																	  <input className="form-check-input" type="checkbox" value="" id="checkAll"/>
																	</div>
																</th>
																<th>Order ID</th>
																<th>Date</th>
																<th>Customer</th>
																<th className="text-center">Comment</th>
																<th className="text-center">Action</th>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
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
																	<span>#000123456</span>
																</td>
																<td>
																	<span className="text-nowrap">Nov 21th 2020 09:21 AM</span>
																</td>
																<td>
																	<span className="text-nowrap">James Sitepu</span>
																</td>
																<td className="job-desk1">
																	<span>
																		<ul className="stars">
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																			<li><a href="javascript:void(0);"><i className="fas fa-star text-secondary"></i></a></li>
																		</ul>
																	</span>
																	<span>
																		<p className="fs-16">
																			We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																		</p>
																	</span>
																</td>
																<td>
																	<div className="d-flex">
																		<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																		<span   className="text-danger fs-14 font-w500" >Archive</span>
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
			</div>
		</div>
    </>
  )
}

export default Reviews