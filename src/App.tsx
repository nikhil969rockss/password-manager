import { useState, type FormEvent } from "react";
import Background from "./components/Background";
import Inputs from "./components/Inputs";
import Navbar from "./components/Navbar";
import context from "./context/store";
import useLocalStorage from "./hooks/useLocalStorage";
import {  toast } from "react-toastify";
import Footer from "./components/Footer";

const App = () => {
  type Password = {
    id?: number | null;
    site: string;
    username: string;
    password: string;
  };
  const [form, setForm] = useState<Password>({
    id: 0,
    site: "",
    username: "",
    password: "",
  });

  const [allPasswords, setAllPasswords] = useLocalStorage("passwords", []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddPassword = (e: FormEvent) => {
    e.preventDefault();
    setAllPasswords([...allPasswords, { ...form, id: Math.random() }]);
    setForm({ site: "", username: "", password: "" });
      toast.success("Password saved", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

  };
  const handleEdit = (id: number) => {
    const editedPassword = allPasswords.find((p: Password) => p.id === id);
    setForm({ ...editedPassword });
    setAllPasswords(allPasswords.filter((p: Password) => p.id !== id));
  };
  const handleDelete = (id: number) => {
    let con = confirm("Are you sure you want to delete?")
    if(con){

      
      setAllPasswords(allPasswords.filter((p: Password) => p.id !== id));
      toast.success("Password deleted", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
  }

  return (
    <context.Provider
      value={{
        form,
        setForm,
        handleChange,
        handleAddPassword,
        allPasswords,
        handleEdit,
        handleDelete,
      }}
    >
      <div className="min-h-screen relative">
        <Background />

        <Navbar />
        <main className="mx-auto container min-h-[80vh] ">
          <Inputs />
          
        </main>
        <Footer/>
        
      </div>
    </context.Provider>
  );
};
export default App;
