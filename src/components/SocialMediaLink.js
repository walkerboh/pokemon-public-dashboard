import React from "react";
import {
  Etsy,
  Facebook,
  Instagram,
  Twitter,
  Website
} from "../images/socialMedia";

const SocialMediaLink = ({ type, value }) => {
  let link;

  switch (type) {
    case "etsy":
      link = (
        <a
          href={`https://www.etsy.com/shop/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Etsy} alt="Etsy" width={20} height={20} />
        </a>
      );
      break;
    case "twitter":
      link = (
        <a
          href={`https://twitter.com/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="Twitter" />
        </a>
      );
      break;
    case "facebook":
      link = (
        <a
          href={`https://www.facebook.com/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
      );
      break;
    case "instgram":
      link = (
        <a
          href={`https://www.instagram.com/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
      );
      break;
    case "website":
      link = (
        <a href={value} target="_blank" rel="noopener noreferrer">
          <img src={Website} alt="Website" width={20} height={20} />
        </a>
      );
      break;
    default:
      return null;
  }

  return <span style={{ marginRight: "5px" }}>{link}</span>;
};

export default SocialMediaLink;
