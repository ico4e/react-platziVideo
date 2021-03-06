import React, { Component } from 'react';
import './Header.css';

// Static Files- Imgs
import logo from '../../static/img/logo-platzi-video-BW2.png';
import user from '../../static/img/user-icon.png';

export default class Header extends Component {
	render() {
		return (
			<header className='header'>
				<img className='header__img' src={logo} alt='Platzi Video' />
				<div className='header__menu'>
					<div className='header__menu--profile'>
						<img src={user} alt='' />
						<p>Perfil</p>
					</div>
					<ul>
						<li>
							<a href='/'>Cuenta</a>
						</li>
						<li>
							<a href='/'>Cerrar Sesión</a>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}
