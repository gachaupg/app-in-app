/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import {
  ArticlesSection,
  CTA,
  ContactUs,
  FAQ,
  HeroSection,
  SetupProcess,
} from "./sections";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const users = JSON.parse(localStorage.getItem("profile"));
const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log('====================================');
  console.log('logged in usersss',users);
  console.log('====================================');
  useEffect(() => {
    if (user?.access) {
      navigate("/dashboard");
    }else{
      navigate("/")
    }
  }, [user]);
  return (
    <section className="bg-dark text-white">
      <HeroSection />
      <SetupProcess />
      <ContactUs />
      <ArticlesSection />
      <CTA />
      <FAQ />
    </section>
  );
};

export default HomePage;
