// All menu and html codes for pages are exporting from here

const navbar = () => {

	return `
    <div class="container">
    <div class="row v-center">
        <div class="header-item item-left">
            <div class="logo">
<a href="index.html">
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
                        <a href="index.html">WOMEN</a>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="showMore.html">MEN</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                            <div class="list-item text-center">
                                <a href="#">
                                <img src="https://cdn.modesens.com/product/44302588_4?w=400&" id="menuProductList">
                                <h4 class="title">Palm Angels</h4>
                                </a>
                            </div>
                            <div class="list-item text-center">
                                <a href="#">
                                <img src="https://cdn.modesens.com/availability/53783588?w=400&" id="menuProductList">
                                <h4 class="title">Green Single-breasted Faux-fur Jacket</h4>
                                </a>
                            </div>
                            <div class="list-item text-center">
                                <a href="#">
                                <img src="https://cdn.modesens.com/availability/53098350?w=400&" id="menuProductList">
                                <h4 class="title">Men's Skeleton Appliqu&eacute; Leather Low-top Sneakers In Orange</h4>
                                </a>
                            </div>
                            <div class="list-item text-center">
                                <a href="#">
                                <img src="https://cdn.modesens.com/product/34097035_17?w=400&" id="menuProductList">
                                <h4 class="title">ALEXANDER MCQUEEN</h4>
                               </a>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="beauty.html">BEAUTY</a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                          <div class="list-item">
                                <h4 class="title">Men's Fashion</h4>
                                <ul>
                                     <li><a href="#">VERSACE</a></li>
                                     <li><a href="#">VALENTINO</a></li>
                                     <li><a href="#">MARNI</a></li>
                                     <li><a href="#">AMIRI</a></li>
                                     <li><a href="#">ALEXANDER MCQUEEN</a></li>
                                </ul>
                                <h4 class="title">Beauty</h4>
                                <ul>
                                     <li><a href="#">TOM FORD</a></li>
                                     <li><a href="#">MAISON FRANCIS KURKDJIAN
                                    </a></li>
                                     <li><a href="#">GUCCI</a></li>
                                </ul>
                          </div>
                          <div class="list-item">
                              <h4 class="title">Women's Fashion</h4>
                              <ul>
                                     <li><a href="#">GUCCI</a></li>
                                     <li><a href="#">PRADA</a></li>
                                     <li><a href="#">LOEWE</a></li>
                                     <li><a href="#">FENDI</a></li>
                                </ul>
                                <h4 class="title">KIDS</h4>
                              <ul>
                                     <li><a href="#">10 to 12 Years</a></li>
                                     <li><a href="#">7 to 6 Years</a></li>
                                     <li><a href="#">Below 5 Years</a></li>
                                     <li><a href="#">New Born</a></li>
                                </ul>
                          </div>
                          <div class="list-item">
                              <h4 class="title">Home</h4>
                              <ul>
                                     <li><a href="#">Couch</a></li>
                                     <li><a href="#">Gaming Chair</a></li>
                                     <li><a href="#">Dining Table</a></li>
                                </ul>
                          </div>
                          <div class="list-item">
                               <img src="https://media.neimanmarcus.com/f_auto,q_auto:good,ar_2:3,c_fill,dpr_1.5,w_380/01/nm_4347143_100324_k" alt="shop">
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

const productcarousel1 = () =>{
	return `
	<div class="scroll-arrow" id="scroll-leftSpeacialOffers">
			&#8592;
		</div>
		<ul id="specialProductsList">
			<li id="imgCr"><img style="width: 300px;" src="https://cdn.modesens.com/banner/20220926-modesens-LordTaylor-364x484.jpg" />
				<h3>Lord & Taylor</h3>
				<h4>REIMAGINED</h4>
				<button>SHOP NOW</button>
			</li>
			<li id="imgCr"><img style="width: 300px;" src="https://cdn.modesens.com/banner/20220926-modesens-Cettire-364x484.gif" />
				<h3>Up to 60% off at Cettire</h3>
				<h4>Free Express shipping for orders over $250</h4>
				<button>SHOP NOW</button>
			</li>
			<li id="imgCr"><img style="width: 300px;" src="https://cdn.modesens.com/banner/20220906-modesens-Sale-364x484.jpg" />
				<h3>New To Sale</h3>
				<h4>Fresh Cut</h4>
				<button>SHOP NOW</button>
			</li>
			<li id="imgCr"><img style="width: 300px;" src="https://cdn.modesens.com/banner/20220923-modesens-blog-364x484.jpg" />
				<h3>Hey Young World</h3>
				<h4>Blog By SSENSE</h4>
				<button>READ NOW</button>
			</li>
			<li id="imgCr"><img style="width: 300px;" src="https://cdn.modesens.com/banner/20220922-modesens-Tweed-364x484-M.jpg" />
				<h3>Queenly Tweed</h3>
				<h4>Commemorate this iconic style</h4>
				<button>SHOP NOW</button>
			</li>
			<li id="imgCr"><img style="width: 300px;" src="https://cdn.modesens.com/banner/20220922-modesens-Pajamas-364x484-M.jpg" />
				<h3>Double Trouble</h3>
				<h4>Pajamas for day or night</h4>
				<button>SHOP NOW</button>
			</li>
			<li id="imgCr"><img style="width: 300px;" src="https://cdn.modesens.com/banner/20220926-modesens-LordTaylor-364x484.jpg" />
				<h3>Lord & Taylor</h3>
				<h4>REIMAGINED</h4>
				<button>SHOP NOW</button>
			</li>
		
		</ul>
		<div class="scroll-arrow" id="scroll-rightSpeacialOffers">
			&#8594;
		</div>`
}

export { navbar, carouserCode, carouselMainCode,productcarousel1 };