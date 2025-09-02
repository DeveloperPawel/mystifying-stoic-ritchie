import React from "react";

const TypographyArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Headings</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<h1>h1. Bootstrap heading</h1>
							<h2>h2. Bootstrap heading</h2>
							<h3>h3. Bootstrap heading</h3>
							<h4>h4. Bootstrap heading</h4>
							<h5>h5. Bootstrap heading</h5>
							<h6 className="mb-0">h6. Bootstrap heading</h6>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Customizing headings</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<h3 className="mb-0">
								Fancy display heading 
								<span className="text-primary"> with faded primary text</span>
							</h3>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Display headings</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<h1 className="display-1">Display One</h1>
							<h1 className="display-2">Display Two</h1>
							<h1 className="display-3">Display Three</h1>
							<h1 className="display-4">Display Four</h1>
							<h1 className="display-5">Display Five</h1>
							<h1 className="display-6 mb-0">Display Six</h1>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Leading text</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<p className="lead mb-0">
								It is very nicely designed with modern features & coded with the
								latest technology.
							</p>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Inline text elements</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<p>
								You can use the mark tag to
								<mark>highlight</mark>text.
							</p>
							<p>
								<del>
									This line of text is meant to be treated as deleted text.
								</del>
							</p>
							<p>
								<s>
									This line of text is meant to be treated as no longer
									accurate.
								</s>
							</p>
							<p>
								<ins>
									This line of text is meant to be treated as an addition to the
									document.
								</ins>
							</p>
							<p>
								<u>This line of text will render as underlined</u>
							</p>
							<p>
								<small>
									This line of text is meant to be treated as fine print.
								</small>
							</p>
							<p>
								<strong>This line rendered as bold text.</strong>
							</p>
							<p className="mb-0">
								<em>This line rendered as italicized text.</em>
							</p>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Unstyled list</h6>
					</div>
				</div>

				<div className="container rk_style_unstyled">
					<div className="card">
						<div className="card-body direction-rtl">
							<ul className="list-unstyled ps-3">
								<li>Unstyled list 1</li>
								<li>Unstyled list 2</li>
								<li>Unstyled list 3</li>
								<li>Unstyled list 4</li>
								<li>Unstyled list 5</li>
								<li>
									Unstyled list 6
									<ul>
										<li>Unstyled list 6.1</li>
										<li>Unstyled list 6.2</li>
										<li>Unstyled list 6.3</li>
									</ul>
								</li>
								<li>Unstyled list 7</li>
								<li>Unstyled list 8</li>
								<li>Unstyled list 9</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TypographyArea;
