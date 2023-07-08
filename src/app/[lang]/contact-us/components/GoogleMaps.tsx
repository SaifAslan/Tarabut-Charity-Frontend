'use client'
import React from "react";
//@ts-ignore
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: { text: string }) => <div style={{fontSize:"20px"}}>{text}</div>;

export default function GoogleMaps() {
  const defaultProps = {
    center: {
      lat: 52.455570,
      lng: -1.838810,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* @ts-ignore */}
        <AnyReactComponent lat={defaultProps.center.lat} lng={defaultProps.center.lng} text="📍" />
      </GoogleMapReact>
    </div>
  );
}
