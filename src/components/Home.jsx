import { useState, useEffect, useRef } from "react";
import { Link, useLocation} from "react-router-dom";
import TypingEffect from "./utils/TypingEffect";

const Home = (props) => {

  props.setIsCheckout(false);
  const [isActive, setIsActive] = useState(null);
  const {hash} = useLocation()
  const scrollToRef = useRef(null);

  useEffect(() => {
    if (hash === "#faq") {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  const data = [
    {
      _id: "64c2ccafb42a1433792a2923",
      name: "Rubber Plant 'Variegated'",
      price: 200,
      quantity: 1,
      description: "19cm",
      imageUrl:
        "https://ik.imagekit.io/fldpkglpn/evergreen/Rubber_Plant__Variegated_",
      __v: 0,
    },
    {
      _id: "64c2ce9db42a1433792a2928",
      name: "Rubber Plant 'Tineke'",
      price: 200,
      quantity: 1,
      description: "19",
      imageUrl:
        "https://ik.imagekit.io/fldpkglpn/evergreen/Rubber_Plant__Tineke_",
      __v: 0,
    },
    {
      _id: "64c2cf5fb42a1433792a292a",
      name: "Zamioculcas zamiifolia 'Zz plant'",
      price: 300,
      quantity: 1,
      description: "25cm",
      imageUrl:
        "https://ik.imagekit.io/fldpkglpn/evergreen/Zamioculcas_zamiifolia__Zz_plant_",
      __v: 0,
    },

    {
      _id: "64c2d081b42a1433792a2930",
      name: "Rubber Plant ' burgandy'",
      price: 300,
      quantity: 1,
      description: "19cm",
      imageUrl:
        "https://ik.imagekit.io/fldpkglpn/evergreen/Rubber_Plant___burgandy_",
      __v: 0,
    },
  ];

  const handleQFA = (e) => {
    setIsActive(e.target.id);
  };
  return (
    <>
      <section className="bg-stone-100 md:grid md:grid-cols-2 md:grid-rows-1 md:mb-6">
        <img
          className="md:col-start-2 md:justify-self-end"
          src="/images/long5.jpg"
          alt="plant as a center peice"
        />

        <article className="px-4 md:w-[45vw] md:col-start-1 md:row-start-1 md:self-center md:justify-self-end">
          <h1 className="text-2xl my-4 text-center font-bold h-20">
            Providing Warmth and Life to{" "}
            <TypingEffect text="Your Home" typingSpeed={350} />{" "}
          </h1>
          <p className="text-justify">
            Evergreen Pasture has a variety of houseplants that are great for
            the aesthetics of your house. The plants are of the highest quality
            and easy to maintain.
          </p>
          <Link
            to="/products"
            className="block border border-black text-center py-2 md:py-4 my-4 font-bold focus:bg-black focus:text-white hover:bg-black hover:text-white"
          >
            Shop For Plants
          </Link>
          <Link
            to="/ebook"
            className="block border border-black text-center py-2 md:py-4 my-4 md:my-0 font-bold focus:bg-black focus:text-white hover:bg-black hover:text-white"
          >
            Buy E-book
          </Link>
        </article>
      </section>

      <section className="px-4 text-center my-4 md:my-0 md:grid ">
        <h2 className="text-xl font-bold">Why Choose Us</h2>
        <article className="md:grid md:grid-cols-3 md:w-4/5 md:justify-self-center md:gap-6">
          <div className="grid">
            <img
              className="w-28 justify-self-center my-2"
              src="/assets/quality.svg"
              alt=""
            />
            <h3 className="font-bold my-2">Quality</h3>
            <p className="md:text-justify">
              We source our plants from the best growers, to ensure that you get
              nothing but the best.
            </p>
          </div>
          <div className="grid">
            <img
              className="w-28 justify-self-center my-2"
              src="/assets/payment.svg"
              alt=""
            />
            <h3 className="font-bold my-2">Payment Options</h3>
            <p className="md:text-justify">
              We accept multiple payments options on our site through payfast,
              so that you can choose one that's convinient for you.
            </p>
          </div>
          <div className="grid">
            <img
              className="w-28 justify-self-center my-2"
              src="/assets/care.svg"
              alt=""
            />
            <h3 className="font-bold my-2"> Detailed Care Plan</h3>
            <p className="mb-4 md:text-justify">
              We'll include a detailed instructions on how you should best take
              care of your plants.
            </p>
          </div>
        </article>
      </section>

      <div className="grid my-4">
        <h4 className="px-4 text-xl font-bold my-4 md:text-center">
          View Our Cateloge
        </h4>
        <section className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 no-scrollbar px-4 md:justify-self-center">
          {data.map((entry) => (
            <article
              key={entry.name}
              className="bg-stone-100 flex-none w-[230px] snap-always snap-center "
            >
              <img src={entry.imageUrl} alt={entry.name} />
              <p className="text-center py-2">{entry.name}</p>
            </article>
          ))}
        </section>
        <Link
          to="/products"
          className="w-[90vw] md:w-2/5 justify-self-center block border border-black text-center py-2 my-4 font-bold focus:bg-black focus:text-white hover:bg-black hover:text-white"
        >
          View Full Cateloge
        </Link>
      </div>
      <section className="px-4 md:grid" id="faq"  >
        <h4 className="text-xl font-bold my-4 md:text-center">
          Frequently Asked Questions
        </h4>
        <article className="md:w-3/5 md:justify-self-center">
          <div
            className="px-4 py-4 border-2 rounded my-2 hover:bg-black hover:text-white "
            id="delivery"
          >
            <h5 className="font-bold py-2" id="delivery">
              How does delivery Work?
            </h5>
            <p
              className={
                isActive === "delivery"
                  ? `border-t-2 py-2 border-black`
                  : `hidden`
              }
              id="delivery"
            >
              We offer 2 options, Delivery around the Gauteng province and
              collection around Joburg.
            </p>
          </div>
          <div
            className="px-4 py-4 border-2 rounded my-2 hover:bg-black hover:text-white "
            id="stock"
          >
            <h5 className="font-bold py-2" id="stock">
              Do you keep stock of all your Products?
            </h5>
            <p
              className={
                isActive === "stock" ? `border-t-2 py-2 border-black` : `hidden`
              }
              id="stock"
            >
              Stock may not always be availeble but if something is out of stock
              it will be indicated on the shopping section.
            </p>
          </div>
          <div
            className="px-4 py-4 border-2 rounded my-2 hover:bg-black hover:text-white "
            id="pay"
            onClick={handleQFA} ref={scrollToRef}
          >
            <h5 className="font-bold py-2" id="pay">
              How do i pay for my order?
            </h5>
            <p
              className={
                isActive === "pay" ? `border-t-2 py-2 border-black` : `hidden`
              }
              id="pay"
            >
              We accept multiple mayments options on our site through payfast,
              so that you can choose one that's convinient for you.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
