import { NextResponse } from "next/server";
import axios from 'axios';

const API_URL = "https://api.aviationstack.com/v1/airports";

async function Get() {
    try {
        debugger
        const res = await axios.get(`${API_URL}?access_key=88a31dc088131922e96ba5b41ae8afa0`);
        return res.data.data;
    } catch (error) {
        return NextResponse.json({ error: "No se encontraron datos" }, { status: 500 });
    }
}

export { Get }