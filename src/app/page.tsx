"use client";

import Script from "next/script";
import HomeBase from '../components/homeBase'

export default function Home() {
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA5YZk2pvVvZjR0-uFJSRPzVA7Ea33r6es&libraries=places`}
        strategy="beforeInteractive"
      />
      <HomeBase />
    </>
  );
}
