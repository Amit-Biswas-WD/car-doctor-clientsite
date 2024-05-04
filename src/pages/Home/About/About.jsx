import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2  shadow-2xl absolute top-1/2 right-4 border-8 border-white rounded-xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-5 text-[#FF3811]">About Us</h1>
          <h1 className="text-5xl font-bold mb-7">
            We are qualified & of experience in this field
          </h1>
          <p className="mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don,t look even slightly
            believable.
          </p>
          <p className="mb-7">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don,t look even slightly
            believable.
          </p>
          <button className="btn btn-active btn-secondary text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
