
import Navbar from "@/MainComponent/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section class="mainPage d-flex align-items-center">
        <div class="container">
          <div class="row uper">
            <div class="col-lg-6 d-flex flex-column justify-content-center text-start  order-2 order-lg-1 ">
              <h1 data-aos="fade-up">Power your home with confidence</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Trust Noretek for reliable gas distribution that keeps your home
                runnng smoothly,
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start ">
                  <a
                    href="/customer-signup"
                    class="btn-get-started scrollto mx-1 d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Sign Up</span>
                    <i class="bi bi-arrow-down"></i>
                  </a>
                  <a
                    href="/customer-signin"
                    class="btn-get-started scrollto mx-1 d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Sign In</span>
                    <i class="bi bi-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
