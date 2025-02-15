import React from "react";
import "./AboutUsStyle.css";

const peopleData = [
  {
    name: "Amer Salković",
    role: "React Developer",
    bio: "Amer works as a React Developer at center NIT.",
    social: {
      facebook: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ermin Muslić",
    role: "React Developer",
    bio: "Ermin works as a React Developer at center NIT.",
    social: {
      facebook: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Imran Bećirović",
    role: "React Developer",
    bio: "Imran works as a React Developer at center NIT.",
    social: {
      facebook: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  }
];

export default function About() {
  return (
    <div className="container">
      {peopleData.map((person, index) => (
        <div className="person-card" key={index}>
          <div className={`person-photo person-photo-${index + 1}`}></div>
          <div className="card-info">
            <h3>{person.name}</h3>
            <h4>{person.role}</h4>
            <p>{person.bio}</p>
            <div className="links-icons">
              <a href={person.social.facebook} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" stroke="#605f60" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </a>
              <a href={person.social.instagram} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24" stroke="#605f60" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                </svg>
              </a>
              <a href={person.social.github} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="28" height="28" viewBox="0 0 24 24" stroke="#605f60" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
              <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="28" height="28" viewBox="0 0 24 24" stroke="#605f60" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <line x1="8" y1="11" x2="8" y2="16"></line>
                  <line x1="8" y1="8" x2="8" y2="8.01"></line>
                  <line x1="12" y1="16" x2="12" y2="11"></line>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
