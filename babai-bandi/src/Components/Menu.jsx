import React from "react";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const Location = () => {
  const navLinks = [
    { text: "About Us", href: "#" },
    { text: "Location", href: "#", active: true },
    { text: "Contact Us", href: "#" },
    { text: "Catering", href: "#", highlight: true },
  ];

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: "Address",
      content: "1028 S Welch St, Denton,\nTX 76201, United States",
    },
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "Call",
      content: "+1 940-629-5571",
    },
    {
      icon: <MailIcon className="w-9 h-9" />,
      title: "Mail",
      content: "babaibandi@gmail.com",
    },
    {
      icon: <ClockIcon className="w-[39px] h-[39px]" />,
      title: "Store Timings",
      content:
        "Monday – Friday: 10.00 AM – 06.00 PM\nSaturday – Sunday: 09.00 AM – 04.00 PM",
    },
  ];

  const footerLinks = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Location", href: "#" },
    { text: "Catering", href: "#" },
    { text: "Contact Us", href: "#" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[2613px] relative">

        {/* Header */}
        <div className="absolute w-[1440px] h-[230px] top-0 left-0 bg-[#8f000c]">
          <div className="absolute w-[540px] h-12 top-[118px] left-[779px]">
            <div className="absolute top-[13px] left-0 font-normal text-white text-lg leading-normal">
              {navLinks.slice(0, 3).map((link, index) => (
                <span key={index} className={link.active ? "font-medium" : ""}>
                  {link.text}
                  {index < 2 && <span className="px-8"></span>}
                </span>
              ))}
            </div>

            <Button
              variant="destructive"
              className="absolute w-36 h-12 top-0 left-[392px] bg-[#ed0b14] rounded-none hover:bg-[#ed0b14]/90"
            >
              Catering
            </Button>
          </div>

          <div className="absolute w-[1440px] h-[230px] top-0 left-0">
            <div className="absolute w-[1440px] h-[53px] top-0 left-0 bg-[#310004]" />
            <div className="absolute w-4 h-3 top-3.5 left-[1131px] bg-[#ed0b14] rounded-sm" />

            <img
              className="absolute w-3 h-3 top-[21px] left-[1133px]"
              alt="Phone icon"
              src="https://c.animaapp.com/jqf5894E/img/ic-baseline-phone.svg"
            />
            <img
              className="absolute w-[13px] h-[13px] top-[21px] left-[1266px]"
              alt="Facebook"
              src="https://c.animaapp.com/jqf5894E/img/ri-facebook-fill.svg"
            />
            <img
              className="absolute w-3 h-3 top-[21px] left-[1286px]"
              alt="Instagram"
              src="https://c.animaapp.com/jqf5894E/img/mdi-instagram.svg"
            />
            <div className="absolute w-2.5 h-2.5 top-[22px] left-[1305px] bg-[url(https://c.animaapp.com/jqf5894E/img/clip-path-group@2x.png)] bg-cover" />

            <a
              className="top-[19px] left-[1154px] text-white text-xs absolute"
              href="https://www.google.com/search?q=babai+bandi"
              target="_blank"
              rel="noopener noreferrer"
            >
              +1 940-629-5571
            </a>

            <img
              className="absolute w-[198px] h-[230px] top-0 left-[125px] object-cover"
              alt="Logo"
              src="https://c.animaapp.com/jqf5894E/img/babai-bandi-1@2x.png"
            />
          </div>
        </div>

        {/* Map */}
        <img
          className="w-[1190px] h-[510px] top-[316px] left-[125px] absolute object-cover"
          alt="Map"
          src="https://c.animaapp.com/jqf5894E/img/image.png"
        />

        {/* Contact Info */}
        <Card className="absolute w-[1190px] h-[736px] top-[879px] left-[125px] bg-neutral-100 rounded-none shadow-none">
          <CardContent className="p-0 h-full">
            <img
              className="w-[482px] h-[576px] top-[54px] left-[57px] absolute object-cover"
              alt="Truck"
              src="https://c.animaapp.com/jqf5894E/img/image-1.png"
            />

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`absolute ${index === 0
                    ? "top-[88px]"
                    : index === 1
                      ? "top-[186px]"
                      : index === 2
                        ? "top-[263px]"
                        : "top-[340px]"
                  } left-[615px] flex items-start gap-6`}
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-medium text-black text-[15px] leading-[30px]">
                    {item.title}
                  </h3>
                  <p className="font-normal text-black text-base leading-[21px] whitespace-pre-line mt-1">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}

            <img
              className="absolute w-4 h-4 top-[241px] left-[824px]"
              alt="Time icon"
              src="https://c.animaapp.com/jqf5894E/img/carbon-time.svg"
            />
          </CardContent>
        </Card>

        {/* Catering */}
        <div className="absolute w-[1814px] h-[997px] top-[1616px] left-[-220px]">
          <div className="absolute w-[1440px] h-[389px] top-[608px] left-[220px] bg-[#8f000c]" />

          <div className="absolute w-[566px] h-[167px] top-[719px] left-[658px]">
            <div className="absolute top-[145px] left-0 text-white text-lg">
              {footerLinks.map((link, index) => (
                <span key={index}>
                  {link.text}
                  {index < footerLinks.length - 1 && <span className="px-8"></span>}
                </span>
              ))}
            </div>

            <Button
              variant="outline"
              className="absolute w-[451px] h-[90px] top-0 left-[58px] border-2 border-white text-white rounded-none hover:bg-white/10 font-bold text-lg"
            >
              REQUEST A QUOTE
            </Button>
          </div>

          <div className="absolute w-[1441px] h-[521px] top-[100px] left-[220px] bg-[#ff4000]" />

          <div className="absolute w-[1814px] h-[670px] top-0 left-0 opacity-50">
            <div className="h-[670px] relative w-[1814px]">
              {[0, 1].map((row) => (
                <div key={row} className={`absolute w-[1814px] h-[376px] top-[${row * 294}px] left-0`}>
                  <div className="relative w-[1440px] h-[376px] left-[220px]">
                    {[5, 6, 7].map((img, i) => (
                      <img
                        key={i}
                        className={`absolute h-[376px] mix-blend-darken object-cover ${i === 0
                            ? "w-[406px] left-0"
                            : i === 1
                              ? "w-[626px] left-[374px]"
                              : "w-[472px] left-[968px]"
                          }`}
                        alt={`Food image ${img}`}
                        src={`https://c.animaapp.com/jqf5894E/img/image-${img}-1.png`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute w-[1441px] h-[100px] top-0 left-[220px] bg-white" />

          <img
            className="absolute w-[394px] h-[394px] top-[164px] left-[1074px]"
            alt="Food truck icon"
            src="https://c.animaapp.com/jqf5894E/img/game-icons-food-truck.svg"
          />

          <h1 className="absolute w-[574px] top-[196px] left-[351px] font-bold text-white text-[64px] leading-[65px]">
            From Truck to Your Home, We Provide Catering with Our Unique Style.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Location;