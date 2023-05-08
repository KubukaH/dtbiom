import musiclogo from "../assets/imgs/music-logo.webp";

export function MainFooter() {
  const mul = new URL(musiclogo, import.meta.url);

  return (
    <div className="mb-16 footer-widget">
      <div className="container ml-auto mr-auto pl-5 pr-5">
        <div className="row">
          <div className="w-full">
            <div className="items-end justify-between block mb-8 footer-logo-support md:flex">
              <div className="flex items-end footer-logo">
                <img src={mul} alt="Logo"/>
              </div>
                          
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
            <div className="mb-8 footer-link">
              <h6 className="footer-title">The Band</h6>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="mb-8 footer-link">
              <h6 className="footer-title">Product & Services</h6>
              <ul>
                <li><a href="#">Products</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/4">
            <div className="mb-8 footer-link">
              <h6 className="footer-title">Help & Support</h6>
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-7/12 md:w-1/2 lg:w-1/3">
            <div className="mb-8 footer-newsletter">
              <h6 className="footer-title">Please like and share!</h6>
                <div className="newsletter">
                    <input type="text" placeholder="Your Email" className="w-full py-3 pl-6 pr-12 duration-300 bg-gray-200 border border-gray-200 rounded-full focus:border-blue-600 focus:outline-none"/>
                    <button type="submit" className="absolute top-0 right-0 mt-3 mr-6 text-xl text-blue-600">
                      <i className="lni-angle-double-right"></i>
                    </button>
                  <iframe title="facebook-follow" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FDTBiOMudimba&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=638808601011953" width="450" height="35" style={{ border: 0, overflow: 'hidden' }} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                  <a href="https://twitter.com/MudimbaMape?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @MudimbaMape</a>
                </div>
                <p className="font-medium text-gray-900 mt-3">Your support of our Music is greatly appreciated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}