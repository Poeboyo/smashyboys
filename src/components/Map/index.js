import React from "react";
import "./style.css";

function Map() {
  return (
    <div id="mapFrame">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1735440860225!2d-81.15191758461427!3d28.534502982456623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e75d71ca529139%3A0xd1afb7432d6e759!2s718%20Terrace%20Spring%20Dr%2C%20Orlando%2C%20FL%2032828!5e0!3m2!1sen!2sus!4v1584578789554!5m2!1sen!2sus"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="Map"
        id="ggMap"
      ></iframe>
    </div>
  );
}

export default Map;
