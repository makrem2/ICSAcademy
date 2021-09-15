import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Header extends React.Component {
	render() {
		return (
			<div>
				<header class="navigation">
					<div class="header-top ">
						<div class="container">
							<div class="row justify-content-between align-items-center">
								<div class="col-lg-2 col-md-4">
									<div class="header-top-socials text-center text-lg-left text-md-left">
										<a href="https://www.facebook.com/icstartup" title="Like me on Facebook" target="_blank"><i class="ti-facebook"></i></a>
										<a href="https://twitter.com/icstartup" title="Follow me on Twitter" target="_blank"><i class="ti-twitter"></i></a>
										<a href="https://www.linkedin.com/company/icstartup/mycompany" title="Connect with me on LinkedIn" target="_blank"><i class="ti-linkedin"></i></a>
										<a href="https://www.instagram.com/international_coach_start_up" title="Follow me on Instagram" target="_blank"><i class="ti-instagram"></i></a>
									</div>
								</div>
								<div class="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
									<div class="header-top-info">
										<span> Tél: </span> <span> +216 52 303 273 </span>
										<a href="mailto:support@gmail.com" ><i class="fa fa-envelope mr-2"></i><span> hello@icstartup.academy</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav class="navbar navbar-expand-lg  py-4" id="navbar">
						<div class="container">
							<img src="Asset/images/logo.jpg" />
							<Link to="/" class="navbar-brand">ICS.<span>Academy</span>
							</Link>



							<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
								<span class="fa fa-bars"></span>
							</button>

							<div class="collapse navbar-collapse text-center" id="navbarsExample09">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item active">
										<Link to="/" class="nav-link"> ACCEUIL <span class="sr-only">(current)</span></Link>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">A PROPOS</a>
										<ul class="dropdown-menu" aria-labelledby="dropdown03">
											<li><Link to = "/about" class="dropdown-item">Notre Societé</Link></li>
											<li><Link to = "/pricing" class="dropdown-item" >Nos Prix</Link></li>
										</ul>
									</li>
									<li class="nav-item"><a class="nav-link" href="service.html">NOS FORMATIONS</a></li>
									<li class="nav-item"><a class="nav-link" href="project.html">EVENEMENTS</a></li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">INSCRIPTION</a>
									</li>
									<li class="nav-item"><a class="nav-link" href="">FORMATEURS</a></li>
									<li class="nav-item"><Link to ="/contact" class="nav-link" >CONTACT</Link></li>
								</ul>

								{/* <form class="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
			  <a href="contact.html" class="btn btn-solid-border btn-round-full">Get a Quote</a>
			</form> */}
							</div>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}


export default Header 
