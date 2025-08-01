"use client"
import { useState } from "react";
import Skills from "./componentes/skillsContent";
import Experience from "./componentes/experienceContent";
import Credentials from "./componentes/credentialsContent";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="pl-4 relative w-[90%] mb-50">
        <div className="flex gap-8 mb-4 *:not-first:border-l *:not-first:border-white *:not-first:pl-8 *:*:cursor-pointer">
            <div>
                <button className={`transition-transform ${activeTab === "skills" ? "text-red-500 underline hover:cursor-default" : "text-white hover:-translate-y-0.5"}`} onClick={() => setActiveTab("skills")}>
                    <p className="text-xl hover:text-red-400">Skills</p>
                </button>
            </div>
            <div>
                <button className={`transition-transform ${activeTab === "experience" ? "text-red-500 underline hover:cursor-default" : "text-white hover:-translate-y-0.5"}`} onClick={() => setActiveTab("experience")}>
                    <p className="text-xl hover:text-red-400">Experience</p>
                </button>
            </div>
            <div>
                <button className={`transition-transform ${activeTab === "credentials" ? "text-red-500 underline hover:cursor-default" : "text-white hover:-translate-y-0.5"}`} onClick={() => setActiveTab("credentials")}>
                    <p className="text-xl hover:text-red-400">Credentials</p>
                </button>
            </div>
        </div>

        <div className="absolute w-full left-0 pl-4">
            {activeTab === "skills" && <Skills/>}
            {activeTab === "experience" && <Experience/>}
            {activeTab === "credentials" && <Credentials/>}
        </div>
    </div>
  );
}
