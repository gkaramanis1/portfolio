import React from 'react';
import { FaDownload } from "react-icons/fa";

export default function Resume() {
    return (
        <div>
            <section>
                <div className="center">
                <h1 className="page-header" style={{fontWeight: 'bold', fontSize: '25px'}}>Skills:</h1>
                <ul>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Git</li>
          <li>MySQL</li>
          <li>REST APIs</li>
        </ul>
			<div className="download">
			<a href={require("../assets/resume.pdf")} download style={{textDecoration: 'none'}}>
					<h3>Download My Resume <FaDownload /></h3>
			</a>	
			</div>
                </div>
            </section>
        </div>
    )
}