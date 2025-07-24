"use client"
import { useState } from "react";
import Skills from "./componentes/skillsContent";
import Experience from "./componentes/experienceContent";
import Credentials from "./componentes/credentialsContent";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="pl-4 relative w-[90%] mb-50">
        <div className="flex gap-8 mb-4 *:not-last:border-r *:not-last:border-white *:pr-8 *:cursor-pointer">
            <button className={activeTab === "skills" ? "text-blue-500 underline hover:cursor-default" : "text-white"} onClick={() => setActiveTab("skills")}>
                <p className="text-xl hover:text-blue-500">Skills</p>
            </button>
            <button className={activeTab === "experience" ? "text-blue-500 underline hover:cursor-default" : "text-white" } onClick={() => setActiveTab("experience")}>
                <p className="text-xl hover:text-blue-500">Experience</p>
            </button>
            <button className={activeTab === "credentials" ? "text-blue-500 underline hover:cursor-default" : "text-white"} onClick={() => setActiveTab("credentials")}>
                <p className="text-xl hover:text-blue-500">Credentials</p>
            </button>
        </div>

        <div className="absolute w-full left-0 pl-4">
            {activeTab === "skills" && <Skills/>}
            {activeTab === "experience" && <Experience/>}
            {activeTab === "credentials" && <Credentials/>}
        </div>
    </div>
  );
}
