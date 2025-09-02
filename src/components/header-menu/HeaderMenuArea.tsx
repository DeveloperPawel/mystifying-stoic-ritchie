import Link from "next/link";
import React from "react";

const HeaderMenuArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Header One</h6>
					</div>
				</div>

				<div className="header-demo-bg shadow-sm">
					<div className="container">
						{/* <!-- # Header One Layout Start --> */}
						{/* <!-- # Copy the code from here ... --> */}
						<div className="header-content position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Navbar Toggler --> */}
							<div className="navbar--toggler" id="affanNavbarToggler">
								<span className="d-block"></span>
								<span className="d-block"></span>
								<span className="d-block"></span>
							</div>

							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- Settings --> */}
							<div className="setting-wrapper">
								<div className="setting-trigger-btn" id="settingTriggerBtn2">
									<i className="bi bi-gear"></i>
									<span></span>
								</div>
							</div>
						</div>
						{/* <!-- # Header One Layout End --> */}
					</div>
				</div>

				{/* <!-- Header Two --> */}

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Header Two</h6>
					</div>
				</div>

				<div className="header-demo-bg shadow-sm">
					<div className="container">
						{/* <!-- # Header Two Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-two position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							<div className="navbar-content-wrapper d-flex align-items-center">
								{/* <!-- Search --> */}
								<div className="search-wrapper me-2">
									<a className="search-trigger-btn" href="#">
										<i className="bi bi-search"></i>
									</a>
								</div>

								{/* <!-- Navbar Toggler --> */}
								<div
									className="navbar--toggler"
									id="affanNavbarToggler3"
									data-bs-toggle="offcanvas"
									data-bs-target="#affanOffcanvas"
									aria-controls="affanOffcanvas"
								>
									<div className="span-wrap">
										<span className="d-block"></span>
										<span className="d-block"></span>
										<span className="d-block"></span>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- # Header Two Layout End --> */}
					</div>
				</div>

				{/* <!-- Header Three --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Header Three</h6>
					</div>
				</div>

				<div className="header-demo-bg shadow-sm">
					<div className="container">
						{/* <!-- # Header Three Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-three position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Navbar Toggler --> */}
							<div
								className="navbar--toggler"
								id="affanNavbarToggler4"
								data-bs-toggle="offcanvas"
								data-bs-target="#affanOffcanvas"
								aria-controls="affanOffcanvas"
							>
								<div className="span-wrap">
									<span className="d-block"></span>
									<span className="d-block"></span>
									<span className="d-block"></span>
								</div>
							</div>

							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- User Profile --> */}
							<div className="user-profile-wrapper">
								<a className="user-profile-trigger-btn" href="#">
									<img src="/assets/img/bg-img/2.jpg" alt="" />
								</a>
							</div>
						</div>
						{/* <!-- # Header Three Layout End --> */}
					</div>
				</div>

				{/* <!-- Header Four --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Header Four</h6>
					</div>
				</div>

				<div className="header-demo-bg shadow-sm">
					<div className="container">
						{/* <!-- # Header Four Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-four position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Navbar Toggler --> */}
							<div
								className="navbar--toggler"
								id="affanNavbarToggler5"
								data-bs-toggle="offcanvas"
								data-bs-target="#affanOffcanvas"
								aria-controls="affanOffcanvas"
							>
								<span className="d-block"></span>
								<span className="d-block"></span>
								<span className="d-block"></span>
							</div>

							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- User Profile --> */}
							<div className="user-profile-wrapper">
								<a className="user-profile-trigger-btn" href="#">
									<img src="/assets/img/bg-img/20.jpg" alt="" />
								</a>
							</div>
						</div>
						{/* <!-- # Header Four Layout End --> */}
					</div>
				</div>

				{/* <!-- Header Five --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Header Five</h6>
					</div>
				</div>

				<div className="header-demo-bg shadow-sm">
					<div className="container">
						{/* <!-- # Header Five Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- Navbar Toggler --> */}
							<div
								className="navbar--toggler"
								id="affanNavbarToggler6"
								data-bs-toggle="offcanvas"
								data-bs-target="#affanOffcanvas"
								aria-controls="affanOffcanvas"
							>
								<span className="d-block"></span>
								<span className="d-block"></span>
								<span className="d-block"></span>
							</div>
						</div>
						{/* <!-- # Header Five Layout End --> */}
					</div>
				</div>

				{/* <!-- Header Six --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Header Six</h6>
					</div>
				</div>

				<div className="header-demo-bg shadow-sm">
					<div className="container">
						{/* <!-- # Header Six Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-six position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Search --> */}
							<div className="search-wrapper">
								<a className="search-trigger-btn" href="#">
									<i className="bi bi-search"></i>
								</a>
							</div>

							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- Navbar Toggler --> */}
							<div
								className="navbar--toggler"
								id="affanNavbarToggler7"
								data-bs-toggle="offcanvas"
								data-bs-target="#affanOffcanvas"
								aria-controls="affanOffcanvas"
							>
								<span className="d-block"></span>
								<span className="d-block"></span>
								<span className="d-block"></span>
							</div>
						</div>
						{/* <!-- # Header Six Layout End --> */}
					</div>
				</div>

				{/* <!-- Header Colorful --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Colorful Header</h6>
					</div>
				</div>

				<div className="header-demo-bg bg-primary shadow-sm">
					<div className="container">
						{/* <!-- # Header Two Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-two position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo-dark.png" alt="" />
								</Link>
							</div>

							<div className="navbar-content-wrapper d-flex align-items-center">
								{/* <!-- Search --> */}
								<div className="search-wrapper me-2">
									<a className="search-trigger-btn" href="#">
										<i className="bi bi-search"></i>
									</a>
								</div>

								{/* <!-- Navbar Toggler --> */}
								<div className="navbar--toggler" id="affanNavbarToggler8">
									<div className="span-wrap">
										<span className="d-block"></span>
										<span className="d-block"></span>
										<span className="d-block"></span>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- # Header Two Layout End --> */}
					</div>
				</div>

				<div className="bg-success shadow-sm mt-3">
					<div className="container">
						{/* <!-- # Header Four Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-four position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Navbar Toggler --> */}
							<div
								className="navbar--toggler"
								id="affanNavbarToggler9"
								data-bs-toggle="offcanvas"
								data-bs-target="#affanOffcanvas"
								aria-controls="affanOffcanvas"
							>
								<span className="d-block"></span>
								<span className="d-block"></span>
								<span className="d-block"></span>
							</div>

							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- User Profile --> */}
							<div className="user-profile-wrapper">
								<a className="user-profile-trigger-btn" href="#">
									<img src="/assets/img/bg-img/20.jpg" alt="" />
								</a>
							</div>
						</div>
						{/* <!-- # Header Four Layout End --> */}
					</div>
				</div>

				<div className="bg-danger shadow-sm mt-3">
					<div className="container">
						{/* <!-- # Header Five Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- Navbar Toggler --> */}
							<div
								className="navbar--toggler"
								id="affanNavbarToggler10"
								data-bs-toggle="offcanvas"
								data-bs-target="#affanOffcanvas"
								aria-controls="affanOffcanvas"
							>
								<span className="d-block"></span>
								<span className="d-block"></span>
								<span className="d-block"></span>
							</div>
						</div>
						{/* <!-- # Header Five Layout End --> */}
					</div>
				</div>

				<div className="bg-info shadow-sm mt-3">
					<div className="container">
						{/* <!-- # Header Six Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-six position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Search --> */}
							<div className="search-wrapper">
								<a className="search-trigger-btn" href="#">
									<i className="bi bi-search"></i>
								</a>
							</div>

							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							{/* <!-- Navbar Toggler --> */}
							<div
								className="navbar--toggler"
								id="affanNavbarToggler11"
								data-bs-toggle="offcanvas"
								data-bs-target="#affanOffcanvas"
								aria-controls="affanOffcanvas"
							>
								<span className="d-block"></span>
								<span className="d-block"></span>
								<span className="d-block"></span>
							</div>
						</div>
						{/* <!-- # Header Six Layout End --> */}
					</div>
				</div>

				<div className="bg-warning shadow-sm mt-3">
					<div className="container">
						{/* <!-- # Header Two Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-two position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo.png" alt="" />
								</Link>
							</div>

							<div className="navbar-content-wrapper d-flex align-items-center">
								{/* <!-- Search --> */}
								<div className="search-wrapper me-2">
									<a className="search-trigger-btn" href="#">
										<i className="bi bi-search"></i>
									</a>
								</div>

								{/* <!-- Navbar Toggler --> */}
								<div
									className="navbar--toggler"
									id="affanNavbarToggler12"
									data-bs-toggle="offcanvas"
									data-bs-target="#affanOffcanvas"
									aria-controls="affanOffcanvas"
								>
									<div className="span-wrap">
										<span className="d-block"></span>
										<span className="d-block"></span>
										<span className="d-block"></span>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- # Header Two Layout End --> */}
					</div>
				</div>

				<div className="bg-dark shadow-sm mt-3">
					<div className="container">
						{/* <!-- # Header Three Layout --> */}
						{/* <!-- # Copy the code from here ... --> */}
						{/* <!-- Header Content --> */}
						<div className="header-content header-style-three position-relative d-flex align-items-center justify-content-between">
							{/* <!-- Navbar Toggler --> */}
							<div className="navbar--toggler" id="affanNavbarToggler13">
								<div className="span-wrap">
									<span className="d-block"></span>
									<span className="d-block"></span>
									<span className="d-block"></span>
								</div>
							</div>

							{/* <!-- Logo Wrapper --> */}
							<div className="logo-wrapper">
								<Link href="/home">
									<img src="/assets/img/core-img/logo-dark.png" alt="" />
								</Link>
							</div>

							{/* <!-- User Profile --> */}
							<div className="user-profile-wrapper">
								<a className="user-profile-trigger-btn" href="#">
									<img src="/assets/img/bg-img/2.jpg" alt="" />
								</a>
							</div>
						</div>
						{/* <!-- # Header Three Layout End --> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderMenuArea;
