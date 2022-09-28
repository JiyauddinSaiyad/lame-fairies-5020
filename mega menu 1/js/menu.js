// All menu and html codes for pages are exporting from here

const navbar = () => {

	return `
    <div class="container">
 		<div class="row v-center">
 			<div class="header-item item-left">
 				<div class="logo">
	<a href="#">
	<img src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="" srcset="">
	</a>
 				</div>
 			</div>
 			<!-- menu start here -->
 			<div class="header-item item-center">
 				<div class="menu-overlay">
 				</div>
 				<nav class="menu">
 					<div class="mobile-menu-head">
 						<div class="go-back"><i class="fa fa-angle-left"></i></div>
 						<div class="current-menu-title"></div>
 						<div class="mobile-menu-close">&times;</div>
 					</div>
 					<ul class="menu-main">
 						<li>
 							<a href="#">WOMEN</a>
 						</li>
 						<li class="menu-item-has-children">
 							<a href="#">MEN</a>
 							<div class="sub-menu mega-menu mega-menu-column-4">
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="img/p1.jpg" alt="new Product">
 									<h4 class="title">Product 1</h4>
 									</a>
 								</div>
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="img/p2.jpg" alt="new Product">
 									<h4 class="title">Product 2</h4>
 									</a>
 								</div>
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="img/p3.jpg" alt="new Product">
 									<h4 class="title">Product 3</h4>
 									</a>
 								</div>
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="img/p4.jpg" alt="new Product">
 									<h4 class="title">Product 4</h4>
 								   </a>
 								</div>
 							</div>
 						</li>
 						<li class="menu-item-has-children">
 							<a href="#">BEAUTY</a>
 							<div class="sub-menu mega-menu mega-menu-column-4">
                               <div class="list-item">
                               	  <h4 class="title">Men's Fashion</h4>
                               	  <ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               	  <h4 class="title">Beauty</h4>
                               	  <ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div class="list-item">
                               	<h4 class="title">Women's Fashion</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               	  <h4 class="title">Furniture</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div class="list-item">
                               	<h4 class="title">Home, Kitchen</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div class="list-item">
                               	 <img src="img/shop1.jpg" alt="shop">
                               </div>
 							</div>
 						</li>
 						<li class="menu-item-has-children">
 							<a href="#">KIDS</a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#">Standard Layout</a></li>
 									<li><a href="#">Grid Layout</a></li>
 									<li><a href="#">single Post Layout</a></li>
 								</ul>
 							</div>
 						</li>
 						<li class="menu-item-has-children">
 							<a href="#">HOME</a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#">Login</a></li>
 									<li><a href="#">Register</a></li>
 									<li><a href="#">Faq</a></li>
 									<li><a href="#">404 Page</a></li>
 								</ul>
 							</div>
 						</li>
 						<li>
 							<a href="#">DESIGNER</a>
 						</li>
						 <li>
						 <a href="#">COMMUNITY</a>
					 </li>
					 <li>
 							<a href="#">WHY MODESENS</a>
 						</li>
						 <li>
						 <a href="#">COUPONS</a>
					 </li>
 					</ul>
 				</nav>
 			</div>
 			<!-- menu end here -->
 			<div class="header-item item-right">
			 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
			 <div id="wrap">
			 <form id="searchForm" autocomplete="on">
			 <input id="search" name="search" type="text" placeholder="Search"><input id="search_submit" value="Rechercher" type="submit">
			 </form>
		   </div>

 				<a href="#"><i class="far fa-heart"></i></a>
 				<a href="#"><i class="fas fa-shopping-cart"></i></a>
 				<!-- mobile menu trigger -->
 				<div class="mobile-menu-trigger">
 					<span></span>
 				</div>
 			</div>
 		</div>
 	</div>
    `
}

const carouserCode = () => {
	return `
	<div class="scroll-arrow" id="scroll-left2">
				&#8592;
			</div>
			<ul id="imgList2">
				<li id="imgCr"><img src="img/brands01.png" />
				</li>
				<li id="imgCr"><img src="img/brands02.png" />
				</li>
				<li id="imgCr"><img src="img/brands03.png" />
				</li>
			</ul>
			<div class="scroll-arrow" id="scroll-right2">
				&#8594;
			</div>
	`
}

const carouselMainCode = () => {

	return `
	<div class="scroll-arrow" id="scroll-left">
				&#8592;
			</div>
			<ul id="imgList">
				<li id="imgCr"><img
						src="https://modesens.com/banner/13568/getimg/?img=%2Fbanner%2F20220927-modesens-NAP-1140x400-F-EN.jpg" />
				</li>
				<li id="imgCr"><img
						src="https://modesens.com/banner/13566/getimg/?img=%2Fbanner%2F20220927-modesens-SSENSE-1140x400-F-EN.jpg" />
				</li>
				<li id="imgCr"><img
						src="https://modesens.com/banner/13568/getimg/?img=%2Fbanner%2F20220927-modesens-NAP-1140x400-F-EN.jpg" />
				</li>
				<li id="imgCr"><img
						src="https://modesens.com/banner/13566/getimg/?img=%2Fbanner%2F20220927-modesens-SSENSE-1140x400-F-EN.jpg" />
				</li>
				<li id="imgCr"><img
						src="https://modesens.com/banner/13568/getimg/?img=%2Fbanner%2F20220927-modesens-NAP-1140x400-F-EN.jpg" />
				</li>
				<li id="imgCr"><img
						src="https://modesens.com/banner/13566/getimg/?img=%2Fbanner%2F20220927-modesens-SSENSE-1140x400-F-EN.jpg" />
				</li>
			</ul>
			<div class="scroll-arrow" id="scroll-right">
				&#8594;
			</div>
		</section>
	`
}


export { navbar, carouserCode, carouselMainCode };