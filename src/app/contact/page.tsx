"use client"
import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact () {
    const [isLoading, setIsLoading] = useState (false);
    const [message, setMessage] = useState("");
    
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        const serviceID = "service_vmauw09";
        const templateID = "template_conz7dj";
        const userID = "F_qBCMaGwzb-4w77I";

        emailjs
            .sendForm(serviceID, templateID, e.currentTarget, userID)
            .then(
                (result) => {
                    console.log("Email enviado com sucesso:", result.text);
                    setMessage("Sua mensagem foi enviada com sucesso!");
                    setIsLoading(false);
                    (e.target as HTMLFormElement).reset();
                },
                (error) => {
                    console.error("Erro ao enviar email", error.text);
                    setMessage("Erro ao enviar mensagem. Tente novamente.");
                    setIsLoading(false);
                }
            );
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#120f19] to-black relative overflow-hidden">
            <div className="text-white">
                <div className=" w-180 h-full mt-10">
                    <div className="z-10 text-center text-3xl flex flex-col select-none mb-6">
                        <h2 className="uppercase tracking-widest font-bold"><span className="text-red-500">Contact</span>{" "}Me.</h2>
                    </div>

                    {/* Formulario */}
                    <div className="">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4 *:*:placeholder:pl-2 *:*:border *:*:border-neutral-500/70 *:*:not-">
                            <div className="flex gap-10 justify-between *:w-80 *:h-12 *:rounded-lg ">
                                <input type="text" name="name" placeholder="Name" className="text-white text-lg capitalize" autoComplete="off" required/>
                                <input type="email" name="email" placeholder="Your E-mail" className="text-white text-lg capitalize" autoComplete="off" required/>
                            </div>
                            <div className="*:w-full *:h-12 *:rounded-lg">
                                <input type="text" name="subject" placeholder="Subject" className="w-full text-white text-lg capitalize" autoComplete="off" required/>
                            </div>
                            <div className="*:w-full *:h-45 *:rounded-lg">
                                <textarea name="message" placeholder="Message" className="text-white text-lg capitalize" autoComplete="off" required></textarea>
                            </div>
                            
                            {/* Button Send */}
                            {message && (
                                <div className={`text-center p-2 rounded ${message.includes("sucesso") ? "text-green-400 border border-green-400" : "text-red-400 border border-red-400"}`}>{message}</div>
                            )}

                            <div className="flx justify-center">
                                <button type="submit" disabled={isLoading} className={`border px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${isLoading ? "border-gray-500 text-gray-500 cursor-not-allowed" : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}`}>
                                    {isLoading ? "Enviando..." : "Send"}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}