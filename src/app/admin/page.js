"use client"
import { useState } from "react";
import { Box, Button, Dialog } from "@mui/material";

export default function Admin() {
    const [open, setOpen] = useState(true);

    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const verifyUser = async () => {

    }

    return (
        <>
            <div>
                <Dialog open={open} onClose={() => verifyUser} >
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
                        <div className="grid grid-flow-row gap-[10px] w-[350px] h-[300px] p-[20px] shadow-2xl">
                            <p>Unique ID</p>
                            <input onChange={(event) => setID(event.target.value)} type="text" placeholder="ID" className="bg-gray-100 p-[6px] rounded-[5px]" />
                            <p>Unique Password</p>
                            <input onChange={(event) => setPassword(event.target.value)} type="text" placeholder="Password" className="bg-gray-100 p-[6px] rounded-[5px]" />
                            <button className="">Verify</button>
                            <p className="opacity-30 text-[15px]">*Wrong attempts will be recorded.</p>
                        </div>
                    </Box>
                </Dialog>
            </div>
        </>
    );
}