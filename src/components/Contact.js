import React from "react";


const Contact = () => {
  return (
    <section className=" bg-black py-8 sm:py-16 md:py-20 lg:py-24 mt-36">
      {/* <hr className="border-hr-gradient" /> */}
      <h1 className="text-4xl text-center mb-10 font-bold gradient-text " id="contact">
        {" "}
        Social Links
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:justify-between w-full gap-8">
          {/* Informações de Contato */}
          <div
            className="flex flex-row w-80 justify-start p-4 gap-7
background-gradient"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 9H2V21H6V9Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a
              href="LINK_DO_SEU_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white	"
            >
              Instagram
            </a>
          </div>

          <div className="flex flex-row w-80 justify-start p-4 gap-7 background-gradient
background-gradient">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1736_235)">
<path d="M16.6 14C16.4 13.9 15.1 13.3 14.9 13.2C14.7 13.1 14.5 13.1 14.3 13.3C14.1 13.5 13.7 14.1 13.5 14.3C13.4 14.5 13.2 14.5 13 14.4C12.3 14.1 11.6 13.7 11 13.2C10.5 12.7 10 12.1 9.6 11.5C9.5 11.3 9.6 11.1 9.7 11C9.8 10.9 9.9 10.7 10.1 10.6C10.2 10.5 10.3 10.3 10.3 10.2C10.4 10.1 10.4 9.90001 10.3 9.80001C10.2 9.70001 9.7 8.50001 9.5 8.00001C9.4 7.30001 9.2 7.30001 9 7.30001C8.9 7.30001 8.7 7.30001 8.5 7.30001C8.3 7.30001 8 7.50001 7.9 7.60001C7.3 8.20001 7 8.90001 7 9.70001C7.1 10.6 7.4 11.5 8 12.3C9.1 13.9 10.5 15.2 12.2 16C12.7 16.2 13.1 16.4 13.6 16.5C14.1 16.7 14.6 16.7 15.2 16.6C15.9 16.5 16.5 16 16.9 15.4C17.1 15 17.1 14.6 17 14.2C17 14.2 16.8 14.1 16.6 14ZM19.1 4.90001C15.2 1.00001 8.9 1.00001 5 4.90001C1.8 8.10001 1.2 13 3.4 16.9L2 22L7.3 20.6C8.8 21.4 10.4 21.8 12 21.8C17.5 21.8 21.9 17.4 21.9 11.9C22 9.30001 20.9 6.80001 19.1 4.90001ZM16.4 18.9C15.1 19.7 13.6 20.2 12 20.2C10.5 20.2 9.1 19.8 7.8 19.1L7.5 18.9L4.4 19.7L5.2 16.7L5 16.4C2.6 12.4 3.8 7.40001 7.7 4.90001C11.6 2.40001 16.6 3.70001 19 7.50001C21.4 11.4 20.3 16.5 16.4 18.9Z" fill="#FFFAF1"/>
</g>
<defs>
<clipPath id="clip0_1736_235">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>



          <a
            href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white "
          >
            WhatsApp
          </a>
          </div>

          <div className="flex flex-row w-80 justify-start p-4 gap-7 background-gradient
background-gradient">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 6.5H17.51"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          <a
            href="LINK_DO_SEU_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            LinkedIn
          </a>
          </div>

          <div className="flex flex-row w-80 justify-start p-4 gap-7 background-gradient
background-gradient">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_31)">
                <path
                  d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_31">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          <a
            href="LINK_DO_SEU_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            GitHub
          </a>

          </div>


          {/* Formulário de Contato */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
