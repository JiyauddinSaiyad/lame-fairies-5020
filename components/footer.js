const footer = ()=>{
    return `
    <div id="botsec">
    <div>
      <h2>Download the ModeSens App</h2>
      <p>A seamless experience that takes your style to the next level.</p>
      <br />
      <button>DOWNLOAD NOW</button>
      <br /><br />
      <img
        src="https://cdn.modesens.com/static/img/20220826appdownload_en.svg"
        alt=""
      />
    </div>
    <div>
      <h2>Install the ModeSens Browser Extension</h2>
      <p>Get timely, accurate product information every time you browse.</p>
      <br />
      <button>INSTALL NOW</button>
      <br /><br />
      <img
        src="https://cdn.modesens.com/static/img/20211109downloadright.png"
        alt=""
      />
    </div>
  </div>

  <!-- footer -->
  <div id="foot">
    <hr />
    <br />
    <div class="foot1">
      <div>
        <h3>CUSTOMER CARE</h3>
        <a href="https://modesens.com/protection/">Shopper Protection</a>
        <a href="https://modesens.com/loyalty/">Loyalty Program</a>
        <a href="https://modesens.com/faq/">Help Center</a>
        <a href="https://modesens.com/size-guide/">Size Guides</a>
        <a id="contactPopup">Contact Us / Feedback</a>
        <a href="https://modesens.com/faq/#shipping-return"
          >Shipping / Returns</a
        >
      </div>
      <div>
        <h3>INFORMATION</h3>
        <a href="https://modesens.com/about/">About Us </a>
        <a href="https://modesens.com/influencer/">Influencer Program</a>
        <a href="https://modesens.com/stores/">Partner Stores </a>
        <a href="https://modesens.com/fashion-sitemap/">Sitemap</a>
      </div>
      <div>
        <h3>LEGAL</h3>
        <a href="https://modesens.com/legal/">Terms Of Use</a>
        <a href="https://modesens.com/disclosure/">Disclosure</a>
        <a href="https://modesens.com/privacy/">Privacy Policy</a>
        <a href="https://modesens.com/community-guidelines/"
          >Community Guidelines</a
        >
      </div>
      <div id="imgs">
        <h3>CONNECT WITH US</h3>
        <a
          href="https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/"
          ><img
            src="https://cdn.modesens.com/static/img/20220815download_ios.svg"
            alt=""
        /></a>
        <a
          href="https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/"
          ><img
            src="https://cdn.modesens.com/static/img/20220815download_android.svg"
            alt=""
        /></a>
        <a
          href="https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/"
          ><img
            src="https://cdn.modesens.com/static/img/20220815down_chromestrore.svg"
            alt=""
        /></a>
      </div>
      <div>
        <h3>NEWSLETTER SIGN UP</h3>
        <input class="in1" type="text" placeholder="Email Address" />
        <hr />
        <input type="checkbox" name="Women's" value="Women's" />
        <label class="in2" for="Men's">Women's</label>
        <input class="in2" type="checkbox" name="Men's" value="Men's" />
        <label class="in2" for="Men's">Men's</label>
        <br /><br />
        <button>SUBMIT</button>
      </div>
    </div>
    <br />
    <p>
      When you follow our links to visit a brand or retailer’s website or make
      a purchase, ModeSens may earn a commission.
    </p>
    <br />
    <hr />
    <br />
    <div class="foot2">
      <div>
        <img
          src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
          alt=""
          width="9%"
        />
        <p>© 2022, ModeSens Inc</p>
      </div>
      <div>
        <a href="https://www.pinterest.com/modesens/"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Pinterest.svg"
            alt=""
            width="80%"
        /></a>
        <a href="https://twitter.com/modesens"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Twitter.svg"
            alt=""
            width="80%"
        /></a>
        <a href="https://www.instagram.com/modesens/"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Ins.svg"
            alt=""
            width="80%"
        /></a>
        <a href="https://www.facebook.com/modesens"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Facebook.svg"
            alt=""
            width="80%"
        /></a>
        <a href="https://weibo.com/modesens"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Weibo.svg"
            alt=""
            width="80%"
        /></a>
        <a href="javascript:;"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Wechat.svg"
            alt=""
            width="80%"
        /></a>
        <a href="https://www.reddit.com/r/ModeSens/"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Reddit.svg"
            alt=""
            width="80%"
        /></a>
        <a href="https://discord.gg/PrKjVdQnX3"
          ><img
            src="https://cdn.modesens.com/static/img/20220726Discord.svg"
            alt=""
            width="80%"
        /></a>
        <a
          href="https://www.xiaohongshu.com/user/profile/587353c96a6a69458be27702?xhsshare=CopyLink&appuid=570c941f1c07df69bddebe37&apptime=1658995084"
          ><img
            src="https://cdn.modesens.com/static/img/20220811Xiaohongshu.svg"
            alt=""
            width="80%"
        /></a>
      </div>
    </div>
  </div>
    `
}

const conPOPUP=()=>{
  return ` <div class="overlay"></div>
  <div class="content">
    <div class="close-btn">&times;</div>
    <h2>CONTACT US</h1>  
    <h4>Our team is happy to assist with any inquiry. To better serve you, please determine the correct next step below.</h4>

    <h4>Are you a customer with a question about shopping on ModeSens? Visit our <a href=""> Help Center</a> where you can find frequently asked questions.</h4>

    <h4>If you need assistance please email us at <a href="">info@modesens.com.</a> If you would like to schedule a time to speak to us please use the link below.</h4>

    <h3 style="text-decoration: underline">SCHEDULE</h3>

    <h4>Are you a store or designer interested in becoming a ModeSens partner? Submit your request <a href="">here.</a></h4>

    <h4>For any media inquiries please contact <a href="">press@modesens.com.</a></h4>

    <div style="line-height: 5px;">
      <h4>ModeSens Inc.</h4>
      <h4>5900 Balcones Drive, Ste 100</h4>
      <h4>Austin, TX 78731</h4>
    </div>
    <hr>
    <button id="clsPOP" id="close" style="margin-left: 460px;">CLOSE</button>
  </div>
  `
}

const Trending = () =>{
  return `
  <div id="trending-top">
  <button>Trending Now</button>
  <hr>
</div>
<div id="trending">
  
</div>
<div id="showMore">
  <button id="showMoreBtn">SHOP MORE</button>
</div>`
};

export {footer,conPOPUP,Trending}