import { FacebookIcon, InstagramIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const AboutUs = () => {
  const navLinks = ["About Us", "Location", "Contact Us"];
  const teamMembers = [
    {
      image: "https://c.animaapp.com/yMVoIfDr/img/image@2x.png",
      alt: "Team member",
    },
    {
      image: "https://c.animaapp.com/yMVoIfDr/img/mask-group@2x.png",
      alt: "Team member",
    },
    {
      image: "https://c.animaapp.com/yMVoIfDr/img/mask-group-1@2x.png",
      alt: "Team member",
    },
    {
      image: "https://c.animaapp.com/yMVoIfDr/img/mask-group-2@2x.png",
      alt: "Team member",
    },
  ];

  const featureCards = [
    {
      title: "FRESH\nINGREDIENTS",
      background: "https://c.animaapp.com/yMVoIfDr/img/fresh@2x.png",
    },
    {
      title: "BEST\nSERVICES",
      background: "https://c.animaapp.com/yMVoIfDr/img/best@2x.png",
    },
    {
      title: "AFFORDABLE\nPRICES",
      background: "https://c.animaapp.com/yMVoIfDr/img/affordable@2x.png",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        <header className="w-full h-[230px] relative bg-[#8f000c]">
          <div className="w-full h-[53px] bg-[#310004]">
            <div className="flex items-center gap-[9px] absolute top-[22px] right-[311px]">
              <div className="flex w-4 h-4 items-center justify-center p-0.5 bg-[#ed0b14] rounded-sm">
                <PhoneIcon className="w-3 h-3 text-white" />
              </div>
              <a
                className="text-white text-xs"
                href="https://www.google.com/search?sca_esv=b732657094e5cdfe&cs=1&hl=en&q=babai+bandi"
                rel="noopener noreferrer"
                target="_blank"
              >
                +1 940-629-5571
              </a>
              <FacebookIcon className="w-[13px] h-[13px] text-white" />
              <InstagramIcon className="w-3 h-3 text-white" />
              <div className="w-2.5 h-2.5 bg-[url(https://c.animaapp.com/yMVoIfDr/img/clip-path-group@2x.png)] bg-[100%_100%]" />
            </div>
          </div>
          <img
            className="absolute w-[198px] h-[230px] top-0 left-[125px] object-cover"
            alt="Logo"
            src="https://c.animaapp.com/yMVoIfDr/img/logo@2x.png"
          />
          <nav className="flex items-center gap-11 absolute top-[118px] left-[779px] text-white text-lg">
            {navLinks.map((link, index) => (
              <span key={index} className="px-4">{link}</span>
            ))}
            <div className="relative w-36 h-12 bg-[#ed0b14] flex items-center justify-center">
              <span>Catering</span>
            </div>
          </nav>
        </header>

        <section className="w-[1194px] h-[752px] mt-[110px] mx-auto relative">
          <div className="absolute w-[81px] h-[84px] top-0 right-0 bg-[#ed0b14]" />
          <div className="absolute w-[82px] h-[79px] bottom-0 left-1/2 -translate-x-1/2 bg-[#ed0b14]" />
          <div className="flex flex-col w-[605px] items-start gap-8 absolute top-[47px] left-0">
            <h1 className="text-[90px] font-bold text-[#9c9c9c] tracking-widest uppercase">About Us</h1>
            <h2 className="text-[#8f000c] text-[23px] font-bold tracking-[2.07px]">How it started!</h2>
            <p className="w-[536px] text-black text-[17px] text-justify leading-[30px]">
              Fusce felis semper sed tristique etm velit nes vitae tempor. [...] consectetur, adipisci velit.
            </p>
          </div>
          <img
            className="w-[595px] h-[729px] top-1 right-0 absolute object-cover"
            alt="About image"
            src="https://c.animaapp.com/yMVoIfDr/img/abt-image-1.png"
          />
        </section>

        <section className="flex flex-col gap-12 mt-[71px] mx-auto">
          <div className="flex gap-[52px] mx-auto">
            <img className="w-[566px] h-[428px] object-cover" alt="img1" src="https://c.animaapp.com/yMVoIfDr/img/abt-image-2.png" />
            <img className="w-[566px] h-[428px] object-cover" alt="img2" src="https://c.animaapp.com/yMVoIfDr/img/abt-image-3.png" />
          </div>
          <div className="w-[1190px] mx-auto text-[17px] text-black leading-[30px] text-justify">
            Semper sed tristique etm velit nes vitae tempor. [...] consectetur.
          </div>
        </section>

        <section className="flex justify-center gap-[50px] mt-[70px] mx-auto">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-[364px] h-[219px] border-none rounded-none overflow-hidden"
              style={{ backgroundImage: `url(${card.background})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}
            >
              <CardContent className="flex items-center justify-center h-full p-0">
                <h3 className="text-white text-[32px] text-center leading-[38px] whitespace-pre-line">{card.title}</h3>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="flex flex-col w-full h-[591px] items-center gap-[54px] px-[157px] py-[95px] mt-[80px] bg-[#ff4000]">
          <h2 className="text-white text-[40px] leading-[79px] font-bold">Our Professional Team</h2>
          <div className="flex items-start gap-[54px]">
            {teamMembers.map((member, index) => (
              <img
                key={index}
                className="w-[254px] h-[254px] rounded-full object-cover"
                alt={member.alt}
                src={member.image}
              />
            ))}
          </div>
        </section>

        <footer className="flex flex-col w-full h-[389px] items-center justify-center gap-2.5 mt-[80px] bg-[#8f000c]">
          <div className="w-[566px] h-[167px] relative">
            <Button className="absolute w-[449px] h-[90px] top-0 left-[58px] border-2 border-white text-white rounded-none hover:bg-transparent hover:text-white">
              <span className="font-bold text-lg">REQUEST A QUOTE</span>
            </Button>
            <nav className="absolute top-[145px] left-0 text-white text-lg">
              Home&nbsp;&nbsp;&nbsp;About Us&nbsp;&nbsp;&nbsp;Location&nbsp;&nbsp;&nbsp;Catering&nbsp;&nbsp;&nbsp;Contact Us
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;