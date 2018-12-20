import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import '../../styles/navbar.css';

export default class Navbar extends Component {
	componentDidMount() {
		M.Sidenav.init(this.sidenav);
	}

	render() {
		return (
			<div className="navbar-fixed">
				<nav className="nav-extended" id="nav-container">
					<div className="nav-wrapper">
						<a className="brand-logo">Yanlin Zhu</a>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="#about-container">About</a></li>
							<li><a href="#portfolio-conatiner">Portfolio</a></li>
							<li><a href="#footer-container">Contact</a></li>
						</ul>
					</div>
				</nav>
				<ul className="sidenav" id="mobile-demo" ref={(sidenav) => {this.sidenav = sidenav}}>
					<li><a href="#about-container">About</a></li>
					<li><a href="#portfolio-conatiner">Portfolio</a></li>
					<li><a href="#footer-container">Contact</a></li>
				</ul>
			</div>
		);
	}
}