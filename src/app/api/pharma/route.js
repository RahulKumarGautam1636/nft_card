import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import dbConnect from "@/lib/dbConnect";
import { SubCategory } from "@/lib/models";
import mongoose from "mongoose";
import { handleImages } from "../serverUtils";
import { waitFor } from "@/api/actionUtils";


export async function GET(req, { params }) {

    var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/pharma/pharmaData.json', 'utf8'));
    const searchParams = req.nextUrl.searchParams;
    let appns = searchParams.get('query') || '';

    let res;

    if (appns === 'appn') {
        res = data.appointments;
    }

    return NextResponse.json(res);
}


export async function POST(req) {

    const body = await req.json();

    if (!body.EncCompanyId) return NextResponse.json({ error: 'Something went wrong.' }, { status: 400 });

    const newAppn = {
        selectedAppnDate: body.selectedAppnDate,
        Doctor: {
            PartyId: body.Doctor.PartyId,
            PartyCode: body.Doctor.PartyCode,
            Name: body.Doctor.Name,
            SpecialistId: body.Doctor.SpecialistId,
            SpecialistDesc: body.Doctor.SpecialistDesc
        },
        UnderDoctId: body.UnderDoctId,
        AppointDate: body.AppointDate,
        AppTime: body.AppTime,
        TimeSlotId: body.TimeSlotId,
        companyId: body.companyId,
        Salutation: body.Salutation,
        Name: body.Name,
        EncCompanyId: body.EncCompanyId,
        PartyCode: body.PartyCode,
        MPartyCode: body.MPartyCode,
        RegMob1: body.RegMob1,
        Gender: body.Gender,
        GenderDesc: body.GenderDesc,
        Address: body.Address,
        Age: body.Age,
        AgeMonth: body.AgeMonth,
        AgeDay: body.AgeDay,
        State: body.State,
        City: body.City,
        Pin: body.Pin,
        Address2: body.Address2,
        AnniversaryDate: body.AnniversaryDate,
        Aadhaar: body.Aadhaar,
        UserId: body.UserId,
        UHID: body.UHID,
        MemberId: body.MemberId,
        Country: body.Country,
        EnqType: body.EnqType
    }

    var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/pharma/pharmaData.json', 'utf8'));

    data.appointments.push(newAppn);

    try {
        fs.writeFileSync(process.cwd() + '/src/app/api/pharma/pharmaData.json', JSON.stringify(data), 'utf8');
        return NextResponse.json(newAppn);
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 400 });
    }
}

export async function DELETE(req) {

    const body = await req.json();
    const id = body.id;
    
    await dbConnect();

    await SubCategory.deleteOne({ id: id });    
    await waitFor(2000);
    return NextResponse.json({ message: 'Successfully deleted the Item.' });
}

