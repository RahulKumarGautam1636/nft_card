'use client';
import { BasicModal } from "../utils";
import Location from "./location";
import { Login } from "./login";
import { Profile } from "./profile";

export const Modals = () => {    

    return (
        <>
            <BasicModal name="LOCATION_MODAL" direction="up" child={<Location />} />
            <BasicModal name="LOGIN_MODAL" direction="left" canvas child={<Login />} />
            <BasicModal name="PROFILE_MODAL" direction="right" canvas child={<Profile />} />
        </>
    )
}