const Footer = () => {
  return (
    <div className="fixed bottom-0 text-xs md:text-md w-full bg-green-800 text-[#eeeeee]">
      <p className="text-center font-[600] py-1 flex items-center justify-center tracking-tighter capitalize">
        Made with{" "}
        <span
          dangerouslySetInnerHTML={{
            __html: `<lord-icon
    src="https://cdn.lordicon.com/gbkitytd.json"
    trigger="hover"
    style="width:25px;height:25px">
</lord-icon>`,
          }}
        ></span>{" "}
        by Nikhil
      </p>
    </div>
  );
};
export default Footer;
