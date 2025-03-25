import { NextResponse } from "next/server";
import axios from 'axios';

const API_URL = "https://api.aviationstack.com/v1/airports";

async function Get() {
    try {
        debugger
        const res = await axios.get(`${API_URL}?access_key=88a31dc088131922e96ba5b41ae8afa0`);
        debugger
        return res.data.data;
        // return [
        //     {
        //         id: "3178887",
        //         gmt: "-10",
        //         airport_id: "1",
        //         iata_code: "AAA",
        //         city_iata_code: "AAA",
        //         icao_code: "NTGA",
        //         country_iso2: "PF",
        //         geoname_id: "6947726",
        //         latitude: "-17.05",
        //         longitude: "-145.41667",
        //         airport_name: "Anaa Dorado",
        //         country_name: "French Polynesia",
        //         phone_number: "",
        //         timezone: "Pacific/Tahiti"
        //     },
        //     {
        //         id: "1",
        //         gmt: "",
        //         airport_id: "1",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "1",
        //         latitude: "1",
        //         longitude: "1",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "2",
        //         gmt: "",
        //         airport_id: "2",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "2",
        //         latitude: "2",
        //         longitude: "2",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "3",
        //         gmt: "",
        //         airport_id: "3",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "3",
        //         latitude: "3",
        //         longitude: "3",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "4",
        //         gmt: "",
        //         airport_id: "4",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "4",
        //         latitude: "4",
        //         longitude: "4",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "5",
        //         gmt: "",
        //         airport_id: "5",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "5",
        //         latitude: "5",
        //         longitude: "5",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "6",
        //         gmt: "",
        //         airport_id: "6",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "6",
        //         latitude: "6",
        //         longitude: "6",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "7",
        //         gmt: "",
        //         airport_id: "7",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "7",
        //         latitude: "7",
        //         longitude: "7",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "8",
        //         gmt: "",
        //         airport_id: "8",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "8",
        //         latitude: "8",
        //         longitude: "8",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     },
        //     {
        //         id: "9",
        //         gmt: "",
        //         airport_id: "9",
        //         iata_code: "COL",
        //         city_iata_code: "BOG",
        //         icao_code: "COL",
        //         country_iso2: "COL",
        //         geoname_id: "9",
        //         latitude: "9",
        //         longitude: "9",
        //         airport_name: "Dorado",
        //         country_name: "Bogota",
        //         phone_number: "",
        //         timezone: "Bogota"
        //     }
        // ]
    } catch (error) {
        return NextResponse.json({ error: "No se encontraron datos" }, { status: 500 });
    }
}

export { Get }