'use client';
import { BasicModal } from "../utils";
import Location from "./location";
import { Login } from "./login";

export const Modals = () => {    

    return (
        <>
            <BasicModal name="LOCATION_MODAL" direction="up" child={<Location />} />
            <BasicModal name="LOGIN_MODAL" direction="left" canvas child={<Login />} />
        </>
    )
}