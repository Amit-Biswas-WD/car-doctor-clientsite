// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// Day ---> Don,t Repeat yourself
const Services = () => {
  const services = useServices();
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("https://car-doctor-server-amit44777-amit6.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  return (
    <div className="mt-20">
      <div className="text-center space-y-5">
        <h1 className="text-2xl font-bold">Service</h1>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <div className="flex justify-center">
          <p className="text-base max-w-[717px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don,t look even slightly
            believable.
          </p>
        </div>
      </div>
      <p>Services: {services.length}</p>
      <div className="grid gap-6 md:grid-cols-3 grid-cols-1 mt-14">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
