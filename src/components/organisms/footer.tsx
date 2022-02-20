export function Footer() {
  return (
    <footer
      className=" text-white footer section pt-6 pt-md-8 pt-lg-10 pb-3 overflow-hidden bg-dark py-5"
      style={{}}
    >
      <div className="pattern pattern-soft top"></div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <a className="footer-brand mr-lg-5 d-flex" href="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ujaymobile-01.appspot.com/o/logo.jpg?alt=media&token=3f2ef6f4-5221-4a3e-8160-d18d5c48b2c4"
                width={100}
              />
            </a>
            <p className="my-2 text-muted">
              {" "}
              An online marketplace for academic works.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 text-muted">
            {/* <h6>Subscribe</h6> */}
            <p>2022 © mypapers.shop. All rights reserved MyPapers ™</p>
            <a href="http://mypapers.shop/">Privacy Policy </a> /{" "}
            <a href="http://mypapers.shop/">Terms and Conditions </a>/{" "}
            <a href="http://mypapers.shop/">About </a>
            <p>Website is owned an operated by Lab-One</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h6>Usefull Links</h6>
            <div className="text-decoration-none">
              <div>
                {" "}
                <a
                  href="http://mypapers.shop/"
                  className="text-decoration-none text-muted"
                >
                  Marketplace
                </a>
              </div>
              <div>
                <a
                  href="http://mypapers.shop/departments"
                  className="text-decoration-none text-muted"
                >
                  Subjects
                </a>
              </div>
              <div>
                <a
                  href="http://mypapers.shop/about"
                  className="text-decoration-none text-muted"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
