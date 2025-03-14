"use client"
import React, { useEffect, useState } from "react";
import { Box, Button, Dialog } from "@mui/material";
import { getData, addData } from "@/firebase/firestoreService";

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


function DashboardHeader() {
    return (
        <>
            <div className="h-[80px] w-full bg-black flex justify-evenly items-center">
                <p className="text-gray-200 font-semibold text-[24px]">Dashboard</p>
            </div>
        </>
    );
};






function Body() {
    const [serviceisTab, setServiceIsTab] = useState(true);
    const [blogisTab, setBlogIsTab] = useState(false);
    const [emailTab, setEmailTab] = useState(false);
    const [code, setCode] = useState(
        <>
            <div className="grid grid-flow-row mx-[10px] mb-[20px]">
                <div className="h-[60px] border-[2px] border-gray-200 rounded-t-[10px] flex items-center justify-between px-[10px]">
                    <p className="font-bold">Services -  Waterproof</p>
                    <button className="text-white font-bold h-[35px] w-[80px] bg-black flex items-center justify-center rounded-[10px] cursor-pointer">New</button>
                </div>
                <div className="h-[500px] border-[2px] border-gray-200 rounded-b-[10px] border-t-0"></div>
            </div>
            <div className="grid grid-flow-row mx-[10px]">
                <div className="h-[60px] border-[2px] border-gray-200 rounded-t-[10px] flex items-center justify-between px-[10px]">
                    <p className="font-bold">Services -  Construction</p>
                    <button className="text-white font-bold h-[35px] w-[80px] bg-black flex items-center justify-center rounded-[10px] cursor-pointer">New</button>
                </div>
                <div className="h-[500px] border-[2px] border-gray-200 rounded-b-[10px] border-t-0"></div>
            </div>
        </>
    );

    const EmailInterests = async () => {
        let setData = await getData("Interests");

        setServiceIsTab(false);
        setBlogIsTab(false);
        setEmailTab(true);
        setCode(
            <div className="grid grid-flow-row mx-[10px]">
                <div className="h-[60px] border-[2px] border-gray-200 rounded-t-[10px] flex items-center justify-between px-[10px]">
                    <p className="font-bold">Email Interests</p>
                </div>
                <div className="h-max border-[2px] border-gray-200 rounded-b-[10px] border-t-0 p-[15px] grid grid-flow-row gap-[15px]">
                    {setData.map((data) => (
                        <div key={data.id} className="flex justify-between p-[10px] bg-gray-200 rounded-[10px] h-max">
                            <div>
                                <p>{data.name}</p>
                                <p>{data.phno}</p>
                                <p>{data.email}</p>
                            </div>
                            <p className="font-semibold flex items-center">Interest: {data.service}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const [newPopup, setNewPopup] = useState(null);
    const [newPopupOpen, setNewPopupOpen] = useState(true)
    /* const newWater = () => {
        setNewPopup(
            <>
                <Dialog open={newPopupOpen}>
                    <Box sx={{ position: "fixed", width: 500, height: 500 }}>
                        <p>New Data</p>
                    </Box>
                </Dialog>
            </>
        )
    } */

    const servicePage = () => {
        setServiceIsTab(true);
        setBlogIsTab(false);
        setEmailTab(false);
        setCode(
            <>
                <div className="grid grid-flow-row mx-[10px] mb-[20px]">
                    <div className="h-[60px] border-[2px] border-gray-200 rounded-t-[10px] flex items-center justify-between px-[10px]">
                        <p className="font-bold">Services -  Construction</p>
                        <button className="text-white font-bold h-[35px] w-[80px] bg-black flex items-center justify-center rounded-[10px] cursor-pointer">New</button>
                    </div>
                    <div className="h-[500px] border-[2px] border-gray-200 rounded-b-[10px] border-t-0"></div>
                </div>
                <div className="grid grid-flow-row mx-[10px]">
                    <div className="h-[60px] border-[2px] border-gray-200 rounded-t-[10px] flex items-center justify-between px-[10px]">
                        <p className="font-bold">Services -  Construction</p>
                        <button className="text-white font-bold h-[35px] w-[80px] bg-black flex items-center justify-center rounded-[10px] cursor-pointer">New</button>
                    </div>
                    <div className="h-[500px] border-[2px] border-gray-200 rounded-b-[10px] border-t-0"></div>
                </div>
            </>
        );
    }
    const blogPage = () => {
        setServiceIsTab(false);
        setBlogIsTab(true);
        setEmailTab(false);
        setCode(
            <div className="grid grid-flow-row mx-[10px]">
                <div className="h-[60px] border-[2px] border-gray-200 rounded-t-[10px] flex items-center justify-between px-[10px]">
                    <p className="font-bold">Blogs</p>
                    <button className="text-white font-bold h-[35px] w-[80px] bg-black flex items-center justify-center rounded-[10px] cursor-pointer">New</button>
                </div>
                <div className="h-[500px] border-[2px] border-gray-200 rounded-b-[10px] border-t-0"></div>
            </div>
        );
    }


    return (
        <>
            <div className="mx-[10px] my-[20px] bg-gray-200 h-[45px] w-[430px] flex items-center rounded-[10px] px-[5px] gap-[10px]">
                <button className={`hover:bg-white h-[35px] w-[125px] rounded-[10px] cursor-pointer ${serviceisTab ? `bg-white` : ``}`} onClick={servicePage}>Services</button>
                <button className={`hover:bg-white h-[35px] w-[125px] rounded-[10px] cursor-pointer ${blogisTab ? `bg-white` : ``}`} onClick={blogPage}>Blog</button>
                <button className={`hover:bg-white h-[35px] w-[145px] rounded-[10px] cursor-pointer ${emailTab ? `bg-white` : ``}`} onClick={EmailInterests}>Email Interests</button>
            </div>
            <div>
                {code}
            </div>

        </>
    );
}

export default function admin() {
    return (
        <>
            <LoginPanel />
            <DashboardHeader />
            <Body />
        </>
    );
};
