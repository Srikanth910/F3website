import React, { Component } from 'react'
// import './Home.css' 
import './main.css';
import { Link  ,withRouter } from 'react-router-dom';
import $ from 'jquery';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import Modelpopup from './HocModel/Modelpopup';
import Footer from './SubCompoents/Footer';


 


class Home extends Component {

	constructor(props) {
		super(props)

		this.state = {
			user:this.props.loggedIn,
			message: [],
			error: [],
			matchdata:'',
			Name: 'Login',
			modalopen:''
			// register data :-
			



			}

		
		
	}


	componentDidMount() {

		$(function () {
			'use strict';

			$('[data-toggle="offcanvas"]').on('click', function () {
				$('.offcanvas-collapse1').toggleClass('open')
			})
		});
		$(function() {
            $( 'ul.nav li' ).on( 'click', function() {
                  $( this ).parent().find( 'li.active' ).removeClass( 'active' );
                  $( this ).addClass( 'active' );
            });
      });	
	}
	
	// openModal=(e)=> {   
	// 	console.log('hello')
	// 	 e.preventDefault();
	// 	 this.setState({modalopen: true});
	//    }
 
	//  closeModal=(e)=> {
		
		 
	// 	 this.setState({modalopen: false});
	//    }

	handleDeposite=()=>{
		console.log('consloecaled',)
		
		if(this.state.user===false){
			this.props.history.push("/");
			
		}else{
		this.props.history.push('/Deposit')
		}
	}
	render() {
		console.log('props data.',this.props.Loggeruser)
	
		//  const isEnabledRegister= username.length > 3 && password.length > 3 && email.length > 3  && currency.length > 0  &&Conform_password.length>0
		//                               first_name.length>3 &&pincode.length>3&& date_of_birth>4 && city.length>0 && state.length>3 && phone_number.length> 10&&  address.length >3
		
		
		return (
			<div>

				 <header class="mt-2 mt-sm-4 fixed-top">
					<div class="container-fluid px-0 text-center">
						
						
						<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>


						{/* <Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Logout</Link> */}
						
						
						{/* <FormModel open={this.state.modalopen} close={this.closeModal}/> */}
						
						<nav class="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
							<Link Link to={'/'} className="navbar-brand">
								<img src={process.env.PUBLIC_URL + "/logo.png"} className="d-none d-sm-none d-md-block" alt="Fantastic 3" />
								<img src={process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3" />

							</Link>
							<button class="navbar-toggler" type="button" data-toggle="offcanvas">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
								<ul class="navbar-nav mr-5 ml-auto">
									<li className="nav-item active">
										<Link className="nav-link active" Link to={'/'}>Home</Link>
									</li>
									<li className="nav-item">

										<Link className="nav-link " Link to={'/About'}>About Us</Link>
									</li>
								</ul>
								<ul className="navbar-nav ml-5 mr-auto">
									<li className="nav-item">

										<Link className="nav-link " Link to={'/LiveCasino'}>Live Casino</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link " Link to={'/FAq'}>Faq</Link>
									</li>

								</ul>
							</div>
						</nav>
					</div>
				</header> 

			
 
          {/* <Navbar history={this.props.push}/> */}



				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item first active text-center">
							<div className="carousel-caption">
								<h1>Live Dealer Game</h1>
								<Link to={'/Deposit'} className="btn-dark"   onClick={this.handleDeposite}>Deposit</Link>


							</div>
						</div>
					</div>
				</div>

				<section class="grass-bg">
					<div class="scattered-dice">
						<div class="container text-center">
							<div class="col-12 col-md-5 col-lg-4 dark-gray-bg block px-4 mx-auto position-relative">
								<h1>Fantastic 3</h1>
								<p class="px-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
								<div class="coin-stack"></div>
							</div>
						</div>
					</div>
				</section>
				<section class="text-center yellow-bg">
					<div class="block round-bg pb-3">
						<div class="container text-center pb-5 px-0">
							<div class="table-bg mt-5 mb-0 mb-sm-5 mx-3 mx-sm-0">
								<div class="tips tip1">Lorem ipsum dolor sit	 amet consectetur adipiscing elit.</div>
								<div class="tips tip2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
								<div class="tips tip3">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
								<div class="tips tip4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
								<div class="tips tip5">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
								<div class="tips tip6">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
							</div>
						</div>
					</div>
					<Link className="btn-primary" Link to={'/Mybets'}>Go for it</Link>
				</section>
    <Footer/>
			</div>
		)
	}
}


export default Modelpopup (withRouter(Home))