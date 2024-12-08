import { NextResponse } from "next/server";
// import fs from 'fs';
import { Appointment } from "@/lib/models";
import dbConnect from '@/lib/dbConnect';
import { waitFor } from "@/api/actionUtils";


export async function GET(req, { params }) {

    // var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/pharma/pharmaData.json', 'utf8'));
    const searchParams = req.nextUrl.searchParams;
    let appns = searchParams.get('query') || '';
    let page = searchParams.get('page') || '';
    let perPage = searchParams.get('perPage') || '';
    await dbConnect();

    let res;

    if (appns === 'appn') {
        // res = data.appointments;
        try {
            const options = {
                page: page || 1,
                limit: perPage || 10,
                collation: {locale: 'en'}
            };
            res = await Appointment.paginate({}, options);             
            return NextResponse.json(res);
        } catch (error) {
            return NextResponse.json({ message: 'M_Err' }, { status: 404 });
        }
    }
    
    return NextResponse.json({ message: 'NaN' }, { status: 404 });
}


export async function POST(req) {

    const body = await req.json();

    console.log(body);
    
    if (!body.EncCompanyId) return NextResponse.json({ error: 'Something went wrong.' }, { status: 400 });

    const newAppn = {
        selectedAppnDate: body.selectedAppnDate,
        Doctor: {
            PartyId: body.Doctor.PartyId,
            Name: body.Doctor.Name
        },
        UnderDoctId: body.UnderDoctId,
        AppointDate: body.AppointDate,
        AppTime: body.AppTime,
        Name: body.Name,
        EncCompanyId: body.EncCompanyId,
        RegMob1: body.RegMob1,
        GenderDesc: body.GenderDesc,
        Address: body.Address,
        UserId: body.UserId,
    }

    // var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/pharma/pharmaData.json', 'utf8'));
    // data.appointments.push(newAppn);

    await dbConnect();    
    const doc = new Appointment(newAppn);

    try {
        await doc.save(); 
        // fs.writeFileSync(process.cwd() + '/src/app/api/pharma/pharmaData.json', JSON.stringify(data), 'utf8');
        return NextResponse.json(newAppn);
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 400 });
    }
}

export async function DELETE(req) {

    const body = await req.json();
    const id = body.id;
    
    await dbConnect();

    try {
        await Appointment.deleteOne({ _id: id });    
        await waitFor(2000);
        return NextResponse.json({ message: 'Successfully deleted the Item.' });
    } catch (error) {
        return NextResponse.json({ error: 'M_err' }, { status: 400 });
    }
}



// {
//     "selectedAppnDate": "08/12/2024",
//     "Doctor": {
//         "PartyId": 946983,
//         "Name": "DR. PRAKASH SINGH"
//     },
//     "UnderDoctId": 999679,
//     "AppointDate": "08/12/2024",
//     "AppTime": "12:00 PM",
//     "Name": "Manisha Kumari",
//     "EncCompanyId": "FFCeIi27FQMTNGpatwiktw==",
//     "RegMob1": "4000000001",
//     "GenderDesc": "Male",
//     "Address": "User Address",
//     "UserId": 14434
// }

