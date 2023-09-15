import "../App.css";


function About() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center p-6 sm:p-6 md:p-8 lg:p-12" id="about">
      <div className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-5/6 sm:w-3/5 md:w-3/5 lg:w-3/5 text-center  md:-mt-20">
        Hi, I am Jenifer Gonçalves, fullstack web developer!
      </div>
      <div className="flex justify-center">

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-5/6 sm:w-2/5 md:w-2/5 lg:w-2/5 text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-stone-400">
        I'm Brazilian, graduating in systems analysis and development from
        Unopar, graduated from Trybe in fullstack web development, passionate
        about programming.
      </p>
      </div>
      {/* href Profile.pdf */}
      <a
        href="Profile.pdf"
        download
        className="border-gradient bg-black text-purple-500 py-2 px-4 rounded-md transition duration-700 hover:bg-purple-600 hover:text-black mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-5"
      >
        Download the CV in PDF
      </a>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="#" className="text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#E34787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#E34787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 6.5H17.51" stroke="#E34787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </a>
        <a href="#" className="text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_120_46)">
<path d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z" stroke="#E34787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_120_46">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


        </a>

        <a href="#" className="text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#E34787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9H2V21H6V9Z" stroke="#E34787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#E34787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </a>
      </div>
    </div>
  );
}

export default About;
