import React from "react";

// Formulario de contacto
const Form = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl py-5 px-4 sm:py-10 sm:px-12 max-w-xl m-auto c-contact-padding">
      <form method="post">
        <input
          className="w-full mb-6 py-3 px-3 rounded-md bg-inherit border-2 border-zinc-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:border-zinc-600 dark:focus:border-cyan-400 dark:focus:bg-black"
          type="text"
          placeholder="Nombre"
          name="name"
        />
        <input
          className="w-full mb-6 py-3 px-3 rounded-md bg-inherit border-2 border-zinc-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:border-zinc-600 dark:focus:border-cyan-400 dark:focus:bg-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="w-full mb-6 py-3 px-3 rounded-md bg-inherit border-2 border-zinc-300 focus:outline-none focus:border-blue-500 focus:bg-white dark:border-zinc-600 dark:focus:border-cyan-400 dark:focus:bg-black"
          name="description"
          cols={30}
          rows={8}
          placeholder="Descripción"
        ></textarea>
        <button className="bg-blue-500 dark:bg-cyan-400 text-white dark:text-black rounded-md px-16 sm:px-20 py-3 block m-auto font-semibold">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
