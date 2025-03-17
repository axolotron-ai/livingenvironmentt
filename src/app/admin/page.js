"use client";

import react, { useEffect } from "react";
import React, { useState } from "react";
import { getData } from "@/firebase/firestoreService";
import EmailInterests from "@/Components/Dashboard/EmailInterests";
import Blog from "@/Components/Dashboard/Blog";
import Services from "@/Components/Dashboard/Services";
import Settings from "@/Components/Dashboard/Settings";
import { Dialog } from "@radix-ui/react-dialog";
import { Box } from "@mui/material";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Services");

    return (
        <>
            <div className="flex">
                <Sidebar setActiveTab={setActiveTab} />
                <div className="flex-1">
                    {activeTab === "Services" && <Services />}
                    {activeTab === "Blog" && <Blog />}
                    {activeTab === "EmailInterests" && <EmailInterests />}
                    {activeTab === "Settings" && <Settings />}
                </div>
            </div>
        </>
    )
}


const Sidebar = ({ setActiveTab }) => {
    return (
        <div className="grid grid-flow-col">
            <div className="w-64 h-full bg-gray-900 text-white p-5 mb-[500px]">
                <h2 className="text-lg font-bold mb-5">Dashboard</h2>
                <button onClick={() => setActiveTab("Services")} className="block w-full py-2 px-4 text-left hover:bg-gray-700">Services</button>
                <button onClick={() => setActiveTab("Blog")} className="block w-full py-2 px-4 text-left hover:bg-gray-700">Blog</button>
                <button onClick={() => setActiveTab("EmailInterests")} className="block w-full py-2 px-4 text-left hover:bg-gray-700">Email Interests</button>
                <button onClick={() => setActiveTab("Settings")} className="block w-full py-2 px-4 text-left hover:bg-gray-700">Settings</button>
            </div>
        </div>
    )
}


function LoginPanel() {
    const [open, setOpen] = useState(true);

    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [cred, setCred] = useState([]);
    const verifyUser = async () => {
        //await addData("Credentials", {"Name":"Giridharan"})
        setLoading(true);
        const data = await getData("Credentials");
        setCred(data);
        console.log(id, password);
        const ID = data.map((data) => data.ID);
        const Password = data.map((data) => data.Password);
        if (ID == id && Password == password) {
            setLoading(false);
            setOpen(false);
        }
        else {
            setLoading(false);
            setWrong(true);
        }
    }
    return (
        <>
            <div>
                <Dialog open={open} onClose={() => open} >
                    <Box sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "black",
                        zIndex: 1300,
                    }}>
                        <div className="grid grid-rows-7 gap-[10px] w-[350px] h-[340px] p-[20px] shadow-2xl">
                            <p>Unique ID</p>
                            <input onChange={(event) => setID(event.target.value)} type="text" placeholder="ID" className="bg-gray-100 p-[6px] rounded-[5px]" required />
                            <p>Unique Password</p>
                            <input onChange={(event) => setPassword(event.target.value)} type="text" placeholder="Password" className="bg-gray-100 p-[6px] rounded-[5px]" required />
                            <button className="bg-black text-white font-bold h-[40px] rounded-[10px] my-[10px] cursor-pointer" onClick={() => verifyUser()}>{loading ? "Verifying..." : "Verify"}</button>
                            <p className="text-red-600 text-[16px] pt-[12px]">{wrong ? "*Wrong ID/Password" : ""}</p>
                            <p className="opacity-30 text-[15px]">*Wrong attempts will be recorded.</p>
                        </div>
                    </Box>
                </Dialog>
            </div>
        </>
    );
};


export default function DashboardApp() {
    return (
        <div>
            <Dashboard />
        </div>
    )
}