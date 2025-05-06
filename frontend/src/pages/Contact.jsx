import Title from "../components/Title"
import {IconBrandInstagram, IconBrandWhatsapp, IconMail} from "@tabler/icons-react"
import ContactCard from "../components/layout/ContactCard"

function Contact() {
  return (
    <section className="container px-8 flex w-screen h-full items-center mx-auto pt-32">
    <div className="w-full text-center ">

      <Title titulo={"Vamos bater um papo sobre como podemos te ajudar?"} />

    <address className="gap-8 text-center w-full lg:flex justify-center text-zinc-500">

      <ContactCard
      icon={<IconBrandWhatsapp className="w-5 h-5 lg:w-9 lg:h-9"/>}
      to={"https://api.whatsapp.com/send?phone=5585988276608&text=Ol%C3%A1!%20Que%20bom%20que%20voc%C3%AA%20quer%20uma%20solu%C3%A7%C3%A3o%20criativa%20para%20o%20seu%20neg%C3%B3cio!"}
      text={"85 988276608"}
      />
      <ContactCard
      icon={<IconMail className="w-5 h-5 lg:w-9 lg:h-9" />}
      to={"mailto:muratore@gmail.com?subject=art2design%20__Solu%C3%A7%C3%A3o%20criativa%20para%20o%20seu%20neg%C3%B3cio__&body=Diga%20como%20podemos%20lhe%20ajudar!"}
      text={"muratore@gmail.com"}
      />
      <ContactCard
      icon={<IconBrandInstagram className="w-5 h-5 lg:w-9 lg:h-9" />}
      to={"https://www.instagram.com/art2designbr/"}
      text={"@designA2"}
      />

    </address>
    </div>

    </section>
  )
}

export default Contact
