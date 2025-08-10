import Link from "next/link";

export default function AboutUS() {
  return (
    <section className=" homeAbout min-vh-100 section-bg pb-4">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title ">
          <h2 className=" text-center fw-bold  ">About Us</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-12 d-flex flex-column justify-content-center text-center   ">
            <p className=" text">
              At Noretek, we believe that every home deserves the warmth and
              comfort of reliable energy. As your trusted partner in gas
              distribution, we are dedicated to powering your life with
              efficiency and care.
            </p>
            <p className="text">
              We take pride in being more than a service provider; we are a part
              of your journey, ensuring that you have the energy you need to
              create cherished moments with your loved ones.
            </p>
            <p className="text">
              With Noretek, you can trust that were not just fueling your
              home—were fueling your dreams.
            </p>
          </div>
          <div class="col-lg-12 d-flex flex-column bg-primary justify-content-center    ">
            <h2 className=" text-light mt-3">How to Register with Noretek</h2>
            <div className="">
              <div className=" d-flex  align-items-lg-start  ">
                <div className=" round  ">1</div>
                <div>
                  <h3 className=" round-2">Step 1</h3>
                  <p>
                    Open your web browser and go to the official Noretek
                    homepage at
                    <span className="underline">www.noretek.com</span>.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-lg-start">
                <div className=" round">2</div>
                <div>
                  <h3 className="round-2">Step 2</h3>
                  <p>
                    Click on the "Register" or "Create Account" button to
                    complete the process.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-lg-start">
                <div className="round">3</div>
                <div>
                  <h3 className="round-2">Step 3</h3>
                  <p>Fill Out the Registration Form</p>
                </div>
              </div>
              <div className="d-flex align-items-lg-start">
                <div className="round">4</div>
                <div>
                  <h3 className="round-2">Step 4</h3>
                  <p>Verify Your Email or Phone Number</p>
                </div>
              </div>
              <div className="d-flex align-items-lg-start">
                <div className="round">5</div>
                <div>
                  <h3 className="round-2">Step 5</h3>
                  <p>
                    Check your email inbox for a verification email from
                    Noretek. Click the link in the email to verify your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
