import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoCentroid } from "d3-geo"; 
import Tooltip from './tooltip.component';  

const geoUrl = "/geo/custom.geo.json"; 

const Map = () => {
  const [selectedCountries, setSelectedCountries] = useState({});

  const handleCountryClick = (geo) => {
    const { NAME } = geo.properties;
    setSelectedCountries((prev) => ({
      ...prev,
      [NAME]: prev[NAME] ? null : geo, 
    }));
  };

  return (
    <div style={{ position: "relative" }}>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isSelected = selectedCountries[geo.properties.NAME];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo)}
                  style={{
                    default: {
                      fill: isSelected ? "red" : "#D6D6DA", 
                      outline: "none",
                    },
                    hover: {
                      fill: "#D6D6DA", 
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {Object.values(selectedCountries).map(
        (geo) =>
          geo && (
            <Tooltip
              key={geo.properties.NAME}
              content={geo.properties.NAME}
              coordinates={geoCentroid(geo)} />
          )
      )}
    </div>
  );
};

export default Map;