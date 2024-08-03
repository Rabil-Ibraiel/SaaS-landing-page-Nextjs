import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
    },
    {
      title: "Pro",
      monthlyPrice: 9,
      buttonText: "Sign up now",
      popular: true,
      inverse: true,
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
      ],
    },
    {
      title: "Business",
      monthlyPrice: 19,
      buttonText: "Sign up now",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ];
  return (
    <section className="overflow-x-clip pt-8 pb-20 md:pt-5 md:pb-10 bg-white">
      <div className="container">
        <div>
          <div className="text-center">
            <span className="feature">Get best offers</span>
            <h1 className="title">Pricing</h1>
            <p className="hidden md:block description">
              Free forever. Upgrade for unlimited tasks, better security, and
              exclusive features.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between lg:items-end gap-8 mt-24">
            {pricingTiers.map((item, index) => (
              <div
                className={`shadow-md w-full max-w-[350px]  lg:max-w-[400px] px-8 pt-4 pb-12 rounded-lg h-full ${
                  index === 1 ? "bg-black text-white" : "bg-white"
                } flex flex-col gap-8`}
              >
                <div className="flex items-center justify-between w-full font-bold">
                  <span
                    className={index === 1 ? "text-white/60" : "text-black/60"}
                  >
                    {item.title}
                  </span>
                  <span className="border-2 border-white/20 rounded-xl py-1 px-2">
                    {index === 1 && "Most Popular"}
                  </span>
                </div>
                <h3>
                  <span className="font-bold text-3xl">
                    ${item.monthlyPrice}
                  </span>
                  /month
                </h3>
                <button
                  className={`btn ${
                    index === 1 ? "bg-white text-black" : "btn-primary"
                  }   flex items-center justify-center`}
                >
                  {item.buttonText}
                </button>

                <ul className="flex flex-col gap-4">
                  {item.features.map((item) => (
                    <li className="flex items-center gap-2">
                      <FaCheck /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
