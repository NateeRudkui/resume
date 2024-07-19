import "boxicons";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="h-full py-5 text-white bg-[#383840] overflow-hidden">
      <h1 className="title-contact text-center text-[4rem] pb-[100px] pt-[50px]">
        CONTACT INFO
      </h1>
      <div className="allcontact flex">
        <div className="contact-map basis-1/2 h-[600px] flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.4461930682037!2d100.38512322821035!3d13.851954017522738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e291e5c2faf0e3%3A0xb04a57aa7a43d79!2z4LiaLuC5gOC4reC5h-C4oSDguYDguK3guYfguKEg4LiL4Li1IOC5geC4oeC4leC4l-C4teC5gOC4o-C4teC4ouC4peC4iOC4s-C4geC4seC4lA!5e0!3m2!1sth!2sth!4v1721273640040!5m2!1sth!2sth"
            width="80%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="">
          <div className="all-contact-icon">
            <div className="flex items-center py-1">
              <box-icon
                type="logo"
                name="facebook-square"
                size="30px"
                color="#D98236"
              ></box-icon>
              <a
                href="https://www.facebook.com/thettt.za"
                className="icon-neme pl-1"
              >
                Tee Natee
              </a>
            </div>
            <div className="flex items-center py-1">
              {" "}
              <box-icon
                name="instagram-alt"
                type="logo"
                size="30px"
                color="#D98236"
              ></box-icon>
              <a
                href="https://www.instagram.com/tee_lst/"
                className="icon-neme pl-1"
              >
                tee_lst
              </a>
            </div>
            <div className="flex items-center py-1">
              <box-icon
                type="solid"
                name="envelope"
                size="30px"
                color="#D98236"
              ></box-icon>
              <p className="icon-neme pl-1">NateeRudkui@outlook.com</p>
            </div>
            <div className="flex items-center py-1">
              <box-icon
                type="solid"
                name="phone"
                size="30px"
                color="#D98236"
              ></box-icon>
              <p className="icon-neme pl-1">065-726-3296</p>
            </div>
          </div>
          <div className="nt">
            <img src="images/NT_thx.png" className="w-full h-[400px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
