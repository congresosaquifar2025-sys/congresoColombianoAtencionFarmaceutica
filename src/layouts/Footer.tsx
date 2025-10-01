import logoFooter from "./../assets/logoFooter.png";

export default function Footer() {
  return (
    <>
      <footer className="footer flex flex-col items-center ">
        <div className=" px-8 md:max-w-7xl ">
            <img 
              className="max-w-3xl w-full" 
              src={logoFooter} 
              alt="Logo Vlll Congreso colombiano de atención farmacéutica"  />
        </div>

        <p className="footer__copyright block w-full">
          AQUIFAR&nbsp; 
          <span className="footer__copyright--regular">
            - Todos los derechos reservados 2025
          </span>
        </p>

        <p className="text-center block w-full pb-9  cursor-pointer bg-[#382183]">
          <a href="https://juanfgonzalez.netlify.app/" >Desarrollado por&nbsp; 
            <span className="underline">Juan González</span>
           </a>
        </p>
      </footer>
    </>
  );
}
