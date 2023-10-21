import React, { useState } from "react";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { Education } from "./Education";
import { Introduction } from "./Introduction";

export function CVBuilder() {
  return (
    <div>
        CV Builder
        <Introduction />
        <Education/>
        <Experience />
        <Project/>
    </div>
  );
}
