import TabsComponent from "./tabsComponent";

export default function About () {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#120f19] to-black relative overflow-hidden">
            <div className="container mx-auto flex items-center gap-x-6 h-[100vh] border border-white">
                <div className="w-1/2 flex flex-col justify-center z-50 border border-white">
                    <h2 className="text-white">Titulo</h2>
                    <p className="text-white">Texto</p>
                    <p className="text-white">Grafico</p>
                    <h2 className="text-white">Titulo</h2>
                    <p className="text-white">Texto</p>
                    <p className="text-white">Grafico</p>
                    <h2 className="text-white">Titulo</h2>
                    <p className="text-white">Texto</p>
                    <p className="text-white">Grafico</p>
                    <h2 className="text-white">Titulo</h2>
                    <p className="text-white">Texto</p>
                    <p className="text-white">Grafico</p>
                </div>
                <div className="flex w-1/2">
                    <TabsComponent/>
                </div>
            </div>
        </section>
    );
}