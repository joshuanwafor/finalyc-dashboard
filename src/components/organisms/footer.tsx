export function Footer() {
  return (
    <footer
      className=" text-white footer section pt-6 pt-md-8 pt-lg-10 pb-3 overflow-hidden bg-dark py-5"
      style={{}}
    >
      <div className="pattern pattern-soft top"></div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a className="footer-brand mr-lg-5 d-flex" href="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ujaymobile-01.appspot.com/o/logo.jpg?alt=media&token=3f2ef6f4-5221-4a3e-8160-d18d5c48b2c4"
                width={100}
              />
            </a>
            <p className="my-4 text-light">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              quae voluptate deserunt saepe iure numquam error unde dicta
              asperiores, in nam quisquam tempore provident consequatur atque
              qui et illo cum?{" "}
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <h6>Useful Links</h6>
            <p className="font-small">
              The latest Impact news, articles, and resources, sent straight to
              your inbox every month.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <h6>Subscribe</h6>
            <p className="font-small">
              The latest Impact news, articles, and resources, sent straight to
              your inbox every month.
            </p>
            <form action="#">
              <div className="form-row">
                <div className="col-8">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-secondary btn-block">
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
            <small className="mt-2 form-text">
              We’ll never share your details
            </small>
          </div>
        </div>
        <hr className="my-4 my-lg-5" />
        <div className="row">
          <div className="col pb-4 mb-md-0">
            <div className="d-flex text-center justify-content-center align-items-center">
              <p className="font-weight-normal mb-0">
                © <a href="#">Lab-One</a> <span className="current-year"></span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
