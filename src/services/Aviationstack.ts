import { NextResponse } from "next/server";
import axios from 'axios';

const API_URL = "https://api.aviationstack.com/v1/airports";

async function Get() {
    try {
        const res = await axios.get(`${API_URL}?access_key=ca5164614cf59be740211ad16d80218a`);
        return res.data.data;
    } catch (error) {
        return NextResponse.json({ error: "No se encontraron datos" }, { status: 500 });
    }
}

export { Get }