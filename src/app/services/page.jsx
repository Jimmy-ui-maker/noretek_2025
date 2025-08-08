// app/page.js

export default function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold">Welcome to My Page</h1>
        <p className="lead">Let&aposs build a Bootstrap version of the layout</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                This is some text within a Bootstrap card. You can use this area
                to describe the feature, service, or anything you want.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Another Card</h5>
              <p className="card-text">
                Bootstrap grid system makes it easy to build responsive layouts.
              </p>
              <a href="#" className="btn btn-secondary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
