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

export const Home = (): JSX.Element => {
  // Navigation links data
  const navLinks = ["About Us", "Location", "Contact Us"];
  const footerLinks = [
    "Home",
    "About Us",
    "Location",
    "Catering",
    "Contact Us",
  ];

  // Feature sections data
  const featureSections = [
    {
      title: "CATERING",
      bgImage: "https://c.animaapp.com/hykmc6c1/img/catering@2x.png",
    },
    {
      title: "MENU",
      bgImage: "https://c.animaapp.com/hykmc6c1/img/menu@2x.png",
    },
    {
      title: "ABOUT US",
      bgImage: "https://c.animaapp.com/hykmc6c1/img/about-us@2x.png",
    },
  ];

  // Contact information data
  const contactInfo = [
    {
      title: "ALL INQUIRIES:",
      details: [
        "Email: babaibandi@gmail.com",
        {
          text: "Phone: +1 940-629-5571",
          link: "https://www.google.com/search?sca_esv=b732657094e5cdfe&cs=1&hl=en&q=babai+bandi&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetGGaXQq5Cl7-bidMuJC6xE2YNUfhN--57gYfUjoVVOftVMACG0U2-TXovg1VTf9cxrwkTDoXDtiIccq9mlP6TgaSwygd-Lekl5L368TER9LZR0nceMN-juGd8H7M_jjag-Ed9fi3I5HRom8dE7EuUM7SIVslZRyfUsc4EVC7LtLQ0bQWQ&sa=X&ved=2ahUKEwidkrn_kLuNAxVz4zgGHSqWPDMQ0pQJegQIEBAB&biw=1536&bih=695&dpr=1.25#",
        },
      ],
    },
    {
      title: "Located in:",
      details: [
        {
          text: "Ministerio De Poder - Asamblea Apostolica De La Fe En Cristo Jesus",
          link: "https://www.google.com/search?sa=X&sca_esv=b732657094e5cdfe&cs=1&hl=en&biw=1536&bih=695&q=Ministerio+De+Poder+-+Asamblea+Apostolica+De+La+Fe+En+Cristo+Jesus&ludocid=11475177572162137352&lsig=AB86z5Wdr_-K6Iv4AiQ17jmCf_jy&ved=2ahUKEwiDzMSjnbuNAxUqzDgGHdeIDP0Q8G0oAHoECEAQAQ",
        },
      ],
    },
    {
      title: "Address:",
      details: ["1028 S Welch St, Denton, TX", "76201, United States"],
    },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:33"
    >
      <div className="bg-white overflow-hidden w-full relative">
        {/* Hero Section */}
        <section className="relative w-full h-[835px]">
          <div className="absolute inset-0 bg-[url(https://c.animaapp.com/hykmc6c1/img/hero-bg.png)] bg-cover bg-center">
            <div className="absolute inset-0 bg-[#8f000c91]" />
          </div>

          {/* Top Bar */}
          <div className="absolute w-full h-[53px] top-0 left-0 bg-[#310004]">
            <div className="flex items-center gap-[9px] absolute top-5 right-[307px]">
              <div className="flex w-4 h-4 items-center justify-center p-0.5 bg-[#ed0b14] rounded-sm">
                <PhoneIcon className="w-3 h-3 text-white" />
              </div>

              <a
                className="font-['Gotham-Book',Helvetica] font-normal text-white text-xs whitespace-nowrap"
                href="https://www.google.com/search?sca_esv=b732657094e5cdfe&cs=1&hl=en&q=babai+bandi&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetGGaXQq5Cl7-bidMuJC6xE2YNUfhN--57gYfUjoVVOftVMACG0U2-TXovg1VTf9cxrwkTDoXDtiIccq9mlP6TgaSwygd-Lekl5L368TER9LZR0nceMN-juGd8H7M_jjag-Ed9fi3I5HRom8dE7EuUM7SIVslZRyfUsc4EVC7LtLQ0bQWQ&sa=X&ved=2ahUKEwidkrn_kLuNAxVz4zgGHSqWPDMQ0pQJegQIEBAB&biw=1536&bih=695&dpr=1.25#"
                rel="noopener noreferrer"
                target="_blank"
              >
                +1 940-629-5571
              </a>

              <FacebookIcon className="w-[13px] h-[13px] text-white" />
              <InstagramIcon className="w-3 h-3 text-white" />
              <div className="w-2.5 h-2.5 bg-[url(https://c.animaapp.com/hykmc6c1/img/clip-path-group@2x.png)] bg-[100%_100%]" />
            </div>
          </div>

          {/* Logo */}
          <img
            className="absolute w-[198px] h-[230px] top-0 left-[125px] object-cover z-10"
            alt="Logo"
            src="https://c.animaapp.com/hykmc6c1/img/logo@2x.png"
          />

          {/* Navigation */}
          <NavigationMenu className="absolute top-[118px] right-[125px]">
            <NavigationMenuList className="flex items-center gap-11">
              <div className="font-['Gotham-Book',Helvetica] font-normal text-white text-lg">
                {navLinks.map((link, index) => (
                  <span key={index} className="px-4">
                    {link}
                  </span>
                ))}
              </div>

              <Button className="w-36 h-12 bg-[#ed0b14] rounded-none">
                <span className="font-['Gotham-Book',Helvetica] font-normal text-white text-lg">
                  Catering
                </span>
              </Button>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Hero Content */}
          <div className="flex flex-col w-[747px] items-center gap-3 absolute top-[396px] left-1/2 -translate-x-1/2">
            <div className="relative w-[340px] h-[58px] bg-white">
              <div className="absolute w-72 top-3.5 left-[229px] -translate-x-1/2 font-['Gotham-Bold',Helvetica] font-bold text-[#8f000c] text-[23px] text-center tracking-[2.07px]">
                Visit our Truck Today
              </div>
            </div>

            <h1 className="font-['Gotham-Bold',Helvetica] font-bold text-white text-[80px] text-center">
              BABAI BANDI
            </h1>

            <p className="font-['Gotham-Medium',Helvetica] font-medium text-white text-[26px] text-center">
              Locally Procured, Environmentally Responsible and Tasty
            </p>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="flex w-full mt-[835px]">
          {featureSections.map((section, index) => (
            <Card
              key={index}
              className="w-1/3 h-[420px] rounded-none border-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${section.bgImage})` }}
            >
              <CardContent className="flex items-center justify-center h-full p-0">
                <div className="font-['Gotham-Medium',Helvetica] font-medium text-white text-[40px] text-center">
                  {section.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Trusted and Experienced Section */}
        <section className="flex items-start justify-between px-[121px] py-[120px]">
          <div className="relative w-[584px] h-[713px]">
            <div className="absolute w-[83px] h-[84px] bottom-0 right-0 bg-[#ed0b14]" />
            <div className="absolute w-[81px] h-[84px] top-0 left-0 bg-[#ed0b14]" />
            <img
              className="absolute w-[557px] h-[690px] top-1 left-1 object-cover"
              alt="Image"
              src="https://c.animaapp.com/hykmc6c1/img/image.png"
            />
          </div>

          <div className="flex flex-col w-[536px] items-start gap-[27px]">
            <h2 className="font-['Gotham-Bold',Helvetica] font-bold text-black text-[32px] leading-[30px]">
              TRUSTED AND EXPERIENCED
            </h2>

            <div className="font-['Gotham-Book',Helvetica] font-normal text-black text-[17px] text-justify leading-[30px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="flex w-full h-[621px] items-center justify-between px-[125px] py-[130px] bg-variable-collection-content-3-bg">
          <div className="w-[393px] h-[352px] font-['Gotham-Bold',Helvetica] font-bold text-white text-[56px] leading-[58px]">
            "Don't just take our word for it; hear it from them instead."
          </div>

          <div className="flex items-center gap-0.5">
            <Button variant="ghost" className="p-0 h-auto">
              <ChevronLeftIcon className="w-[23px] h-[46px] text-white" />
            </Button>

            <img
              className="w-[235px] h-[361px] object-cover"
              alt="Testimonial image"
              src="https://c.animaapp.com/hykmc6c1/img/image-1@2x.png"
            />

            <Card className="w-[416px] h-[361px] rounded-none">
              <CardContent className="flex items-center justify-center h-full p-[52px]">
                <p className="font-['Gotham-Book',Helvetica] font-normal text-black text-base leading-[30px]">
                  "The flavors from this Indian food truck "Babai Bandi" in
                  Dallas is a delightful journey through authentic spices and
                  recipes! Every bite is a celebration of taste that keeps me
                  coming back for more!"
                </p>
              </CardContent>
            </Card>

            <Button variant="ghost" className="p-0 h-auto">
              <ChevronRightIcon className="w-[23px] h-[46px] text-white" />
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex items-start gap-[120px] px-[125px] py-[115px]">
          {contactInfo.map((section, index) => (
            <div key={index} className="flex flex-col items-start gap-7">
              <h3
                className={`font-${index === 0 ? "['Gotham-Bold',Helvetica] font-bold text-[#8f000c] text-[40px]" : "['Gotham-Medium',Helvetica] font-medium text-black text-xl"} leading-[${index === 0 ? "58px" : "43px"}]`}
              >
                {section.title}
              </h3>

              <div
                className={`font-['Gotham-${index === 2 ? "Book" : "Medium"}',Helvetica] font-${index === 2 ? "normal" : "medium"} text-black text-${index === 2 ? "base" : "xl"} leading-[${index === 2 ? "22px" : "43px"}]`}
              >
                {section.details.map((detail, detailIndex) => (
                  <React.Fragment key={detailIndex}>
                    {typeof detail === "string" ? (
                      <p>{detail}</p>
                    ) : (
                      <a
                        href={detail.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-black"
                      >
                        {detail.text}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="flex flex-col w-full h-[389px] items-center justify-center gap-[55px] py-[111px] bg-variable-collection-footer-bg">
          <Button
            variant="outline"
            className="w-[451px] h-[90px] border-2 border-white rounded-none bg-transparent hover:bg-transparent"
          >
            <span className="font-['Gotham-Bold',Helvetica] font-bold text-white text-lg">
              REQUEST A QUOTE
            </span>
          </Button>

          <div className="font-['Gotham-Book',Helvetica] font-normal text-white text-lg">
            {footerLinks.map((link, index) => (
              <span key={index} className="px-4">
                {link}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};