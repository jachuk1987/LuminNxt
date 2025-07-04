import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

const Home = () => {
  const navLinks = ["About Us", "Location", "Contact Us"];
  const footerLinks = ["Home", "About Us", "Location", "Catering", "Contact Us"];
  const featureSections = [
    { title: "CATERING", bgImage: "https://c.animaapp.com/hykmc6c1/img/catering@2x.png" },
    { title: "MENU", bgImage: "https://c.animaapp.com/hykmc6c1/img/menu@2x.png" },
    { title: "ABOUT US", bgImage: "https://c.animaapp.com/hykmc6c1/img/about-us@2x.png" },
  ];

  const contactInfo = [
    {
      title: "ALL INQUIRIES:",
      details: [
        "Email: babaibandi@gmail.com",
        {
          text: "Phone: +1 940-629-5571",
          link: "https://www.google.com/search?...",
        },
      ],
    },
    {
      title: "Located in:",
      details: [
        {
          text: "Ministerio De Poder - Asamblea Apostolica De La Fe En Cristo Jesus",
          link: "https://www.google.com/search?...",
        },
      ],
    },
    {
      title: "Address:",
      details: ["1028 S Welch St, Denton, TX", "76201, United States"],
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <section className="relative w-full h-[835px]">
          <div className="absolute inset-0 bg-[url(https://c.animaapp.com/hykmc6c1/img/hero-bg.png)] bg-cover bg-center">
            <div className="absolute inset-0 bg-[#8f000c91]" />
          </div>

          <div className="absolute w-full h-[53px] top-0 left-0 bg-[#310004]">
            <div className="flex items-center gap-[9px] absolute top-5 right-[307px]">
              <div className="flex w-4 h-4 items-center justify-center p-0.5 bg-[#ed0b14] rounded-sm">
                <PhoneIcon className="w-3 h-3 text-white" />
              </div>
              <a
                className="text-white text-xs"
                href="https://www.google.com/search?..."
                target="_blank"
                rel="noopener noreferrer"
              >
                +1 940-629-5571
              </a>
              <FacebookIcon className="w-[13px] h-[13px] text-white" />
              <InstagramIcon className="w-3 h-3 text-white" />
            </div>
          </div>

          <img
            className="absolute w-[198px] h-[230px] top-0 left-[125px] object-cover z-10"
            alt="Logo"
            src="https://c.animaapp.com/hykmc6c1/img/logo@2x.png"
          />

          <NavigationMenu className="absolute top-[118px] right-[125px]">
            <NavigationMenuList className="flex items-center gap-11">
              <div className="text-white text-lg">
                {navLinks.map((link, index) => (
                  <span key={index} className="px-4">{link}</span>
                ))}
              </div>
              <Button className="w-36 h-12 bg-[#ed0b14] rounded-none text-white text-lg">Catering</Button>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex flex-col w-[747px] items-center gap-3 absolute top-[396px] left-1/2 -translate-x-1/2">
            <div className="relative w-[340px] h-[58px] bg-white">
              <div className="absolute w-72 top-3.5 left-[229px] -translate-x-1/2 text-[#8f000c] text-[23px] text-center font-bold">
                Visit our Truck Today
              </div>
            </div>
            <h1 className="text-white text-[80px] text-center font-bold">BABAI BANDI</h1>
            <p className="text-white text-[26px] text-center">Locally Procured, Environmentally Responsible and Tasty</p>
          </div>
        </section>

        <section className="flex w-full mt-[835px]">
          {featureSections.map((section, index) => (
            <Card key={index} className="w-1/3 h-[420px] rounded-none border-0 bg-cover bg-center" style={{ backgroundImage: `url(${section.bgImage})` }}>
              <CardContent className="flex items-center justify-center h-full p-0">
                <div className="text-white text-[40px] text-center">{section.title}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="flex items-start justify-between px-[121px] py-[120px]">
          <div className="relative w-[584px] h-[713px]">
            <div className="absolute w-[83px] h-[84px] bottom-0 right-0 bg-[#ed0b14]" />
            <div className="absolute w-[81px] h-[84px] top-0 left-0 bg-[#ed0b14]" />
            <img className="absolute w-[557px] h-[690px] top-1 left-1 object-cover" alt="Image" src="https://c.animaapp.com/hykmc6c1/img/image.png" />
          </div>

          <div className="flex flex-col w-[536px] items-start gap-[27px]">
            <h2 className="text-black text-[32px] leading-[30px] font-bold">TRUSTED AND EXPERIENCED</h2>
            <div className="text-black text-[17px] text-justify leading-[30px]">
              <p>Lorem ipsum dolor sit amet...</p>
              <br />
              <p>Sed ut perspiciatis unde omnis iste...</p>
            </div>
          </div>
        </section>

        <section className="flex w-full h-[621px] items-center justify-between px-[125px] py-[130px] bg-gray-200">
          <div className="w-[393px] h-[352px] text-white text-[56px] leading-[58px] font-bold">
            "Don't just take our word for it; hear it from them instead."
          </div>
          <div className="flex items-center gap-0.5">
            <Button variant="ghost" className="p-0 h-auto">
              <ChevronLeftIcon className="w-[23px] h-[46px] text-white" />
            </Button>
            <img className="w-[235px] h-[361px] object-cover" alt="Testimonial" src="https://c.animaapp.com/hykmc6c1/img/image-1@2x.png" />
            <Card className="w-[416px] h-[361px] rounded-none">
              <CardContent className="flex items-center justify-center h-full p-[52px]">
                <p className="text-black text-base leading-[30px]">"The flavors from this Indian food truck..."</p>
              </CardContent>
            </Card>
            <Button variant="ghost" className="p-0 h-auto">
              <ChevronRightIcon className="w-[23px] h-[46px] text-white" />
            </Button>
          </div>
        </section>

        <section className="flex items-start gap-[120px] px-[125px] py-[115px]">
          {contactInfo.map((section, index) => (
            <div key={index} className="flex flex-col items-start gap-7">
              <h3 className={`text-${index === 0 ? '[#8f000c]' : 'black'} text-${index === 0 ? '[40px]' : 'xl'} font-${index === 0 ? 'bold' : 'medium'}`}>{section.title}</h3>
              <div className={`text-black text-${index === 2 ? 'base' : 'xl'} leading-${index === 2 ? '[22px]' : '[43px]'}`}>
                {section.details.map((detail, detailIndex) => (
                  <React.Fragment key={detailIndex}>
                    {typeof detail === "string" ? <p>{detail}</p> : <a href={detail.link} target="_blank" rel="noopener noreferrer">{detail.text}</a>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="flex flex-col w-full h-[389px] items-center justify-center gap-[55px] py-[111px] bg-gray-900">
          <Button variant="outline" className="w-[451px] h-[90px] border-2 border-white rounded-none bg-transparent hover:bg-transparent text-white text-lg font-bold">
            REQUEST A QUOTE
          </Button>
          <div className="text-white text-lg">
            {footerLinks.map((link, index) => (
              <span key={index} className="px-4">{link}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;