export default function Contact () {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#120f19] to-black relative overflow-hidden">
            <div className="text-white">
                <div className=" w-full h-full mb-30">
                    <div className="z-10 text-center text-3xl flex flex-col select-none border border-white">
                        <h2 className="uppercase tracking-widest font-bold"><span className="text-red-500">Contact</span> ME</h2>
                        
                    </div>
                    <div className="">
                        <form method="post" action="https://formsubmit.co/hunt3r.edits@gmail.com" encType="multipart/form-data" className="border flex flex-col gap-10 p-4 *:*:placeholder:text-center">
                            <div className="flex gap-10">
                                <input type="text" name="name" placeholder="Name"/>
                                <input type="email" name="email" placeholder="Your E-mail"/>
                            </div>
                            <div>
                                <input type="text" name="subject" placeholder="Subject" className="w-full"/>
                            </div>
                            <div>
                                <textarea name="message" placeholder="Message" className="w-full"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}