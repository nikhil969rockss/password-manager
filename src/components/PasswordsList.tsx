import { memo, useContext } from "react";
import context, { type IContext } from "../context/store";
import { ToastContainer, toast } from "react-toastify";

const PasswordsList = () => {
  const { allPasswords, handleEdit, handleDelete } = useContext(
    context
  ) as IContext;
  const handleCopy = (username: string) => {
    navigator.clipboard.writeText(username);
    toast.success("copy to clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {allPasswords.length > 0 && (
        <section className="flex w-full ">
          <div className="flex-1 flex-col items-center">
            <h2 className="font-[700] tracking-tight bg-green-500 flex justify-center items-center  rounded-tl-md py-1">
              Site
            </h2>
          </div>
          <div className="flex-1 ">
            <h2 className="font-[700] tracking-tight bg-green-500 flex justify-center items-center py-1">
              Username
            </h2>
          </div>
          <div className="flex-1 ">
            <h2 className="font-[700] tracking-tight bg-green-500 flex justify-center items-center  rounded-tr-md py-1">
              Password
            </h2>
          </div>
        </section>
      )}
      <section className="overflow-y-scroll pb-16">
        {allPasswords.length > 0 ? (
          allPasswords?.map((item) => {
            return (
              <div
                key={Math.random()}
                className="flex w-full bg-green-50 p-3  border-b border-b-black/12  "
              >
                <div className="flex-1 flex justify-center items-center gap-3 ">
                  <div className="flex flex-col sm:flex-row gap-2  items-center justify-around  w-1/2  ">
                    <a
                      href={`https://${item.site}`}
                      target="_blank"
                      className="  "
                    >
                      <img
                        width={24}
                        height={24}
                        className="rounded-full"
                        src={`https://${
                          item.site.split("://")[1] ? `` : `${item.site}`
                        }/favicon.ico`}
                        alt=""
                      />
                    </a>
                    <a
                      className="hidden md:inline-block "
                      href={`https://${item.site}`}
                      target="_blank"
                    >
                      {item.site}
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex justify-center  ">
                  <div className="md:gap-2 md:w-1/2 flex flex-col items-center justify-center md:justify-around md:flex-row   ">
                    <div className="flex flex-col md:flex-row items-center md:gap-2">
                      <p className="flex items-center cursor-pointer ">
                        {item.username}
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleCopy(item.username)}
                        dangerouslySetInnerHTML={{
                          __html: `<lord-icon
                      
                      
                      src="https://cdn.lordicon.com/iykgtsbt.json"
                      trigger="hover"
                      style="width:25px;height:25px">
                      </lord-icon>`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex  justify-center md:gap-2 ">
                  <div className=" md:w-1/2 flex flex-col  items-center  justify-center md:justify-around md:flex-row   ">
                    <div className="flex items-center gap-2">
                      <p className="  flex outline-none ">{"*".repeat(item.password.length)}</p>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleCopy(item.password)}
                        dangerouslySetInnerHTML={{
                          __html: `<lord-icon
                    
                    
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    style="width:25px;height:25px">
                    </lord-icon>`,
                        }}
                      ></span>
                    </div>
                    <div className="flex md:gap-1 w-10">
                      <span
                        className="cursor-pointer "
                        onClick={() => handleEdit(item.id)}
                        dangerouslySetInnerHTML={{
                          __html: `<lord-icon
                    
                    
                    src="https://cdn.lordicon.com/gwlusjdu.json"
                    trigger="hover"
                    style="width:25px;height:25px"
                    >
                    </lord-icon>`,
                        }}
                      ></span>
                      <span
                        className="cursor-pointer "
                        onClick={() => handleDelete(item.id)}
                        dangerouslySetInnerHTML={{
                          __html: `<lord-icon
                    
                    
                    src="https://cdn.lordicon.com/xyfswyxf.json"
                    trigger="hover"
                    style="width:25px;height:25px"
                    >
                    </lord-icon>`,
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center">
            No passwords. Enter password to keep your passwords manage{" "}
          </div>
        )}
      </section>
    </>
  );
};
export default memo(PasswordsList);
