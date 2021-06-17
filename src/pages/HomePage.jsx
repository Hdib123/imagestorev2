import logo from "../logo.svg";
import "../App.css";
import React, { useState } from "react";
import Title from "../components/Title";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";
import TagsInput from "../components/Tags";
import Upload from "../components/Upload"

function HomePage() {
  return (
    <div className="App">
            <Title />
            
    </div>
  );
}

export default HomePage;
