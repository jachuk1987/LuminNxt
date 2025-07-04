import { FacebookIcon, InstagramIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const AboutUs = (): JSX.Element => {
  // Navigation links data
  const navLinks = ["About Us", "Location", "Contact Us"];

  // Team members data
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

  // Feature cards data
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
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:97"
    >
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Header */}
        <header className="w-full h-[230px] relative bg-[#8f000c]">
          {/* Top bar */}
          <div className="w-full h-[53px] bg-[#310004]">
            <div className="flex items-center gap-[9px] absolute top-[22px] right-[311px]">
              <div className="flex w-4 h-4 items-center justify-center p-0.5 bg-[#ed0b14] rounded-sm">
                <PhoneIcon className="w-3 h-3 text-white" />
              </div>

              <a
                className="font-['Gotham-Book',Helvetica] font-normal text-white text-xs"
                href="https://www.google.com/search?sca_esv=b732657094e5cdfe&amp;cs=1&amp;hl=en&amp;q=babai+bandi&amp;source=lnms&amp;fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetGGaXQq5Cl7-bidMuJC6xE2YNUfhN--57gYfUjoVVOftVMACG0U2-TXovg1VTf9cxrwkTDoXDtiIccq9mlP6TgaSwygd-Lekl5L368TER9LZR0nceMN-juGd8H7M_jjag-Ed9fi3I5HRom8dE7EuUM7SIVslZRyfUsc4EVC7LtLQ0bQWQ&amp;sa=X&amp;ved=2ahUKEwidkrn_kLuNAxVz4zgGHSqWPDMQ0pQJegQIEBAB&amp;biw=1536&amp;bih=695&amp;dpr=1.25#"
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

          {/* Logo */}
          <img
            className="absolute w-[198px] h-[230px] top-0 left-[125px] object-cover"
            alt="Logo"
            src="https://c.animaapp.com/yMVoIfDr/img/logo@2x.png"
          />

          {/* Navigation */}
          <nav className="flex items-center gap-11 absolute top-[118px] left-[779px]">
            <div className="font-['Gotham-Book',Helvetica] font-normal text-white text-lg">
              About
              Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
              Us
            </div>

            <div className="relative w-36 h-12 bg-[#ed0b14]">
              <div className="absolute top-3 left-[42px] font-['Gotham-Book',Helvetica] font-normal text-white text-lg">
                Catering
              </div>
            </div>
          </nav>
        </header>

        {/* Main About Us Section */}
        <section className="w-[1194px] h-[752px] mt-[110px] mx-auto relative">
          <div className="absolute w-[81px] h-[84px] top-0 right-0 bg-[#ed0b14]" />
          <div className="absolute w-[82px] h-[79px] bottom-0 left-1/2 -translate-x-1/2 bg-[#ed0b14]" />

          <div className="flex flex-col w-[605px] items-start gap-8 absolute top-[47px] left-0">
            <h1 className="self-stretch h-[122px] mt-[-2.00px] ml-[-1.00px] [-webkit-text-stroke:1px_#9c9c9c] font-['Gotham-Bold',Helvetica] font-bold text-transparent text-9xl whitespace-nowrap">
              About Us
            </h1>

            <h2 className="self-stretch font-['Gotham-Bold',Helvetica] font-bold text-[#8f000c] text-[23px] tracking-[2.07px]">
              How it started!
            </h2>

            <p className="w-[536px] h-[381px] font-['Gotham-Book',Helvetica] font-normal text-black text-[17px] text-justify leading-[30px]">
              Fusce felis semper sed tristique etm velit nes vitae tempor.
              Aliquam suscipit male ksuada viverra etiam facilisyes vitae
              magnis. Pellentesque or dolor dui ac cursus porta. Egetu ut
              bibendum at duis egestas.
              <br />
              <br />
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </p>
          </div>

          <img
            className="w-[595px] h-[729px] top-1 right-0 absolute object-cover"
            alt="About image"
            src="https://c.animaapp.com/yMVoIfDr/img/abt-image-1.png"
          />
        </section>

        {/* Image Gallery Section */}
        <section className="flex flex-col gap-12 mt-[71px] mx-auto">
          <div className="flex gap-[52px] mx-auto">
            <img
              className="w-[566px] h-[428px] object-cover"
              alt="About image"
              src="https://c.animaapp.com/yMVoIfDr/img/abt-image-2.png"
            />
            <img
              className="w-[566px] h-[428px] object-cover"
              alt="About image"
              src="https://c.animaapp.com/yMVoIfDr/img/abt-image-3.png"
            />
          </div>

          <div className="w-[1190px] mx-auto font-['Gotham-Book',Helvetica] font-normal text-black text-[17px] text-justify leading-[30px]">
            Semper sed tristique etm velit nes vitae tempor. Aliquam suscipit
            male ksuada viverra etiam facilisyes vitae magnis. Pellentesque or
            dolor dui ac cursus porta. Egetu ut bibendum at duis egestas.
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
            <br />
            <br />
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit.
            <br />
            <br />
            Aliquam suscipit male ksuada viverra etiam facilisyes vitae magnis.
            Pellentesque or dolor dui ac cursus porta. Egetu ut bibendum at duis
            egestas. Perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur.
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="flex justify-center gap-[50px] mt-[70px] mx-auto">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-[364px] h-[219px] border-none rounded-none overflow-hidden"
              style={{
                backgroundImage: `url(${card.background})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <CardContent className="flex items-center justify-center h-full p-0">
                <h3 className="font-['Gotham-Bold',Helvetica] font-bold text-white text-[32px] text-center leading-[38px] whitespace-pre-line">
                  {card.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Team Section */}
        <section className="flex flex-col w-full h-[591px] items-center gap-[54px] px-[157px] py-[95px] mt-[80px] bg-[#ff4000]">
          <h2 className="font-['Gotham-Bold',Helvetica] font-bold text-white text-[40px] leading-[79px] whitespace-nowrap">
            Our Professional Team
          </h2>

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

        {/* Footer */}
        <footer className="flex flex-col w-full h-[389px] items-center justify-center gap-2.5 mt-[80px] bg-[#8f000c]">
          <div className="w-[566px] h-[167px] relative">
            <Button
              variant="outline"
              className="absolute w-[449px] h-[90px] top-0 left-[58px] border-2 border-white text-white rounded-none hover:bg-transparent hover:text-white"
            >
              <span className="font-['Gotham-Bold',Helvetica] font-bold text-lg">
                REQUEST A QUOTE
              </span>
            </Button>

            <nav className="absolute top-[145px] left-0 font-['Gotham-Book',Helvetica] font-normal text-white text-lg">
              Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About
              Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Catering&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
              Us
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};