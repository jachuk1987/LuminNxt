import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Location = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "About Us", href: "#" },
    { text: "Location", href: "#", active: true },
    { text: "Contact Us", href: "#" },
    { text: "Catering", href: "#", highlight: true },
  ];

  // Contact information data
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

  // Footer links data
  const footerLinks = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Location", href: "#" },
    { text: "Catering", href: "#" },
    { text: "Contact Us", href: "#" },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:156"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[2613px] relative">
        {/* Header Section */}
        <div className="absolute w-[1440px] h-[230px] top-0 left-0 bg-[#8f000c]">
          {/* Navigation */}
          <div className="absolute w-[540px] h-12 top-[118px] left-[779px]">
            <div className="absolute top-[13px] left-0 [font-family:'Gotham-Book',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
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

          {/* Top Bar */}
          <div className="absolute w-[1440px] h-[230px] top-0 left-0">
            <div className="absolute w-[1440px] h-[53px] top-0 left-0 bg-[#310004]" />

            <div className="absolute w-4 h-3 top-3.5 left-[1131px] bg-[#ed0b14] rounded-sm" />

            <img
              className="absolute w-3 h-3 top-[21px] left-[1133px]"
              alt="PhoneIcon icon"
              src="https://c.animaapp.com/jqf5894E/img/ic-baseline-phone.svg"
            />

            <img
              className="absolute w-[13px] h-[13px] top-[21px] left-[1266px]"
              alt="Facebook icon"
              src="https://c.animaapp.com/jqf5894E/img/ri-facebook-fill.svg"
            />

            <img
              className="absolute w-3 h-3 top-[21px] left-[1286px]"
              alt="Instagram icon"
              src="https://c.animaapp.com/jqf5894E/img/mdi-instagram.svg"
            />

            <div className="absolute w-2.5 h-2.5 top-[22px] left-[1305px] bg-[url(https://c.animaapp.com/jqf5894E/img/clip-path-group@2x.png)] bg-[100%_100%]" />

            <a
              className="top-[19px] left-[1154px] text-white text-xs leading-[normal] absolute [font-family:'Gotham-Book',Helvetica] font-normal tracking-[0] whitespace-nowrap"
              href="https://www.google.com/search?sca_esv=b732657094e5cdfe&amp;cs=1&amp;hl=en&amp;q=babai+bandi&amp;source=lnms&amp;fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetGGaXQq5Cl7-bidMuJC6xE2YNUfhN--57gYfUjoVVOftVMACG0U2-TXovg1VTf9cxrwkTDoXDtiIccq9mlP6TgaSwygd-Lekl5L368TER9LZR0nceMN-juGd8H7M_jjag-Ed9fi3I5HRom8dE7EuUM7SIVslZRyfUsc4EVC7LtLQ0bQWQ&amp;sa=X&amp;ved=2ahUKEwidkrn_kLuNAxVz4zgGHSqWPDMQ0pQJegQIEBAB&amp;biw=1536&amp;bih=695&amp;dpr=1.25#"
              rel="noopener noreferrer"
              target="_blank"
            >
              +1 940-629-5571
            </a>

            <img
              className="absolute w-[198px] h-[230px] top-0 left-[125px] object-cover"
              alt="Babai bandi"
              src="https://c.animaapp.com/jqf5894E/img/babai-bandi-1@2x.png"
            />
          </div>
        </div>

        {/* Map Section */}
        <img
          className="w-[1190px] h-[510px] top-[316px] left-[125px] absolute object-cover"
          alt="Map"
          src="https://c.animaapp.com/jqf5894E/img/image.png"
        />

        {/* Contact Information Section */}
        <Card className="absolute w-[1190px] h-[736px] top-[879px] left-[125px] bg-neutral-100 rounded-none shadow-none">
          <CardContent className="p-0 h-full">
            <img
              className="w-[482px] h-[576px] top-[54px] left-[57px] absolute object-cover"
              alt="Food truck"
              src="https://c.animaapp.com/jqf5894E/img/image-1.png"
            />

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`absolute ${index === 0 ? "top-[88px]" : index === 1 ? "top-[186px]" : index === 2 ? "top-[263px]" : "top-[340px]"} left-[615px] flex items-start gap-6`}
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="[font-family:'Gotham-Medium',Helvetica] font-medium text-black text-[15px] tracking-[0] leading-[30px]">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Gotham-Book',Helvetica] font-normal text-black text-base tracking-[0] leading-[21px] whitespace-pre-line mt-1">
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

        {/* Catering Section */}
        <div className="absolute w-[1814px] h-[997px] top-[1616px] left-[-220px]">
          {/* Footer */}
          <div className="absolute w-[1440px] h-[389px] top-[608px] left-[220px] bg-[#8f000c]" />

          <div className="absolute w-[566px] h-[167px] top-[719px] left-[658px]">
            <div className="absolute top-[145px] left-0 [font-family:'Gotham-Book',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
              {footerLinks.map((link, index) => (
                <span key={index}>
                  {link.text}
                  {index < footerLinks.length - 1 && (
                    <span className="px-8"></span>
                  )}
                </span>
              ))}
            </div>

            <Button
              variant="outline"
              className="absolute w-[451px] h-[90px] top-0 left-[58px] border-2 border-white text-white rounded-none hover:bg-white/10 [font-family:'Gotham-Bold',Helvetica] font-bold text-lg"
            >
              REQUEST A QUOTE
            </Button>
          </div>

          {/* Catering Background */}
          <div className="absolute w-[1441px] h-[521px] top-[100px] left-[220px] bg-[#ff4000]" />

          <div className="absolute w-[1814px] h-[670px] top-0 left-0 opacity-50">
            <div className="h-[670px]">
              <div className="relative w-[1814px] h-[670px]">
                <div className="absolute w-[1814px] h-[376px] top-0 left-0">
                  <div className="relative w-[1440px] h-[376px] left-[220px]">
                    <img
                      className="w-[406px] h-[376px] top-0 left-0 mix-blend-darken absolute object-cover"
                      alt="Food image 1"
                      src="https://c.animaapp.com/jqf5894E/img/image-5-1.png"
                    />

                    <img
                      className="w-[626px] h-[376px] top-0 left-[374px] mix-blend-darken absolute object-cover"
                      alt="Food image 2"
                      src="https://c.animaapp.com/jqf5894E/img/image-6-1.png"
                    />

                    <img
                      className="w-[472px] h-[376px] top-0 left-[968px] mix-blend-darken absolute object-cover"
                      alt="Food image 3"
                      src="https://c.animaapp.com/jqf5894E/img/image-7-1.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[1814px] h-[376px] top-[294px] left-0">
                  <div className="relative w-[1440px] h-[376px] left-[220px]">
                    <img
                      className="w-[406px] h-[376px] top-0 left-0 mix-blend-darken absolute object-cover"
                      alt="Food image 4"
                      src="https://c.animaapp.com/jqf5894E/img/image-5-1.png"
                    />

                    <img
                      className="w-[626px] h-[376px] top-0 left-[374px] mix-blend-darken absolute object-cover"
                      alt="Food image 5"
                      src="https://c.animaapp.com/jqf5894E/img/image-6-1.png"
                    />

                    <img
                      className="w-[472px] h-[376px] top-0 left-[968px] mix-blend-darken absolute object-cover"
                      alt="Food image 6"
                      src="https://c.animaapp.com/jqf5894E/img/image-7-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[1441px] h-[100px] top-0 left-[220px] bg-white" />

          <img
            className="absolute w-[394px] h-[394px] top-[164px] left-[1074px]"
            alt="Food truck icon"
            src="https://c.animaapp.com/jqf5894E/img/game-icons-food-truck.svg"
          />

          <h1 className="absolute w-[574px] top-[196px] left-[351px] [font-family:'Gotham-Bold',Helvetica] font-bold text-white text-[64px] tracking-[0] leading-[65px]">
            From Truck to Your Home, We Provide Catering with Our Unique Style.
          </h1>
        </div>
      </div>
    </div>
  );
};