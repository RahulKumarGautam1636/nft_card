'use client';
import { BasicModal } from "../utils";
import Location from "./location";

export const Modals = () => {    

    return (
        <BasicModal name="LOCATION_MODAL" child={<Location />} />
    )
}