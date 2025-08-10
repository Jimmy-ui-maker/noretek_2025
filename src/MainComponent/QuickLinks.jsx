import Link from "next/link";

export default function QuickLinks() {
  const fScience = [
    {
      name: "Admin Dashboard",
      routes: "/admin_dashboard",
    },

    {
      name: "Customer Dashboard",
      routes: "/customer_dashboard",
    },

    {
      name: "Services",
      routes: "/services",
    },
    {
      name: "Create Account",
      routes: "/create-account",
    },
    {
      name: "Customer Support",
      routes: "/customer-support",
    },
    {
      name: "Customer Support Landing",
      routes: "/customer-support-landing",
    },
  ];
  return (
    <section id="placement" className="cardList min-vh-100 section-bg pb-4">
      <div className="container" data-aos="fade-up">
        <div className="section-title ">
          <h2 className=" text-center fw-bold  text-uppercase">
            Here are Quick Links.
          </h2>
          <p className=" text-center ">
            You can use this links to explore hidden route for now.
          </p>
        </div>

        <div className="row g-4  align-items-center text-center">
          {fScience.map((fs) => (
            <div
              key={fs.id}
              className="col-lg-6 col-12 "
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="card stateBody  border-0">
                <Link className=" p-3 text-decoration-none" href={fs.routes}>
                  {fs.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
