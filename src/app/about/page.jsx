import React from "react";

const AboutPage = () => {
  return (
    <>
      <main className="main2">
        <section className="section" id="datatable">
          <div className="container">
            <div className="pagetitle">
              <h1>ABOUT US</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">Page</li>
                  <li className="breadcrumb-item active">About</li>
                </ol>
              </nav>
            </div>
            <section id="about" className="about  min-vh-100 pb-4">
              <div className="container shadow justify-content-center align-items-center">
                <section>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos repellendus illo porro consequatur ipsa qui voluptas
                    doloremque sit aut architecto, officiis sapiente atque eum
                    odit possimus vel numquam ab nulla expedita totam obcaecati
                    delectus itaque minima nostrum? Qui, blanditiis consequatur!
                    <br />
                  </p>
                  <div className="col-12 ">
                    <img
                      src="/assets/slider.png"
                      className="vid-img img-fluid"
                    />
                  </div>

                  <h2 className=" my-3">2. Lorem, ipsum dolor.:</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sed laudantium, ab sequi ea, voluptate cupiditate quod
                    corporis unde et doloremque amet debitis necessitatibus
                    magnam voluptatem, veniam molestias eaque eveniet nostrum!
                  </p>
                  <div className="col-12 ">
                    <img
                      src="/assets/slider.png"
                      className="vid-img img-fluid"
                    />
                  </div>
                  <h2 className="">3. Lorem ipsum dolor sit amet.:</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed libero dicta quidem quia nesciunt laboriosam sapiente
                    eum quaerat maxime error!
                  </p>
                  <div className="col-12  ">
                    <img
                      src="/assets/slider.png"
                      className="vid-img img-fluid"
                    />
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
