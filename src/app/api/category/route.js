import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';

export async function GET(req, { params }) {

    var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/data.json', 'utf8'));

    if (req.method === 'GET') {

        let categories = data.category;
        // if (!categories.categoryList.length) return NextResponse.json({ error: 'No Categories found.' }, { status: 404 });
        return NextResponse.json(categories);
    }
}

