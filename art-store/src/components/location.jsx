import React from "react";

function Location() {
  return (
    <div id="lborder">
      <h3 className="text-center lborder ">Find Us here</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54578.08943574157!2d75.67598053730164!3d31.244808034415097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af4fef0a6496d%3A0x64e70ee625e115d7!2sArtist%20Gurdish%20Pannu%20I%20Art%20Gallery%20in%20Punjab!5e0!3m2!1sen!2sin!4v1675854564023!5m2!1sen!2sin"
        title="This is a unique title"
        width="100%"
        height="450"
        // style={{ border: "10" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        // frameborder="0"
      ></iframe>
    </div>
  );
}

export default Location;
