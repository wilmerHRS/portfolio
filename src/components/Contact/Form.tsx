import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface IForm {
  name: string;
  email: string;
  description: string;
}

const initialForm: IForm = {
  name: "",
  email: "",
  description: "",
};

// Formulario de contacto
const Form = () => {
  const [form, setForm] = useState(initialForm);
  const formData = useRef<HTMLFormElement>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      form.name.trim().length === 0 ||
      form.email.trim().length === 0 ||
      form.description.trim().length === 0
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    try {
      const res = await emailjs.sendForm(
        "service_1ep1o53",
        "template_at12irc",
        formData.current,
        "x_Scdpoorw3M_tCiv"
      );

      alert("Formulario enviado" + res.status);
    } catch (err) {
      alert("Formulario no enviado");
    }
    console.log(form);
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl py-5 px-4 sm:py-10 sm:px-12 max-w-xl m-auto c-contact-padding">
      <form method="post" onSubmit={handleSubmit} ref={formData}>
        <input
          className="w-full mb-6 py-3 px-3 rounded-md bg-inherit border-2 border-zinc-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:border-zinc-600 dark:focus:border-cyan-400 dark:focus:bg-black"
          type="text"
          placeholder="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="w-full mb-6 py-3 px-3 rounded-md bg-inherit border-2 border-zinc-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:border-zinc-600 dark:focus:border-cyan-400 dark:focus:bg-black"
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          className="w-full mb-6 py-3 px-3 rounded-md bg-inherit border-2 border-zinc-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:border-zinc-600 dark:focus:border-cyan-400 dark:focus:bg-black"
          cols={30}
          rows={8}
          placeholder="Descripción"
          name="description"
          value={form.description}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button className="bg-blue-500 dark:bg-cyan-400 text-white dark:text-black rounded-md px-16 sm:px-20 py-3 block m-auto font-semibold">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
