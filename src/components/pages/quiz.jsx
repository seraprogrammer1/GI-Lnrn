import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export default function Quiz() {
  return (
    <div className="quiz-container">
      <h1>Quiz Generation Options</h1>
      <h6>Please choose your preferences to generate your personal quiz</h6>
      <label>Topic</label>
      <select class="browser-default">
        <option value=""></option>
        <option value="1">golang</option>
        <option value="2">aws</option>
        <option value="4">javascript</option>
        <option value="5">CI/CD</option>
        <option value="6">home gardens</option>
        <option value="7">coffe</option>
        <option value="8">finger foods</option>
      </select>
      <label>Expertise</label>
      <select class="browser-default">
        <option value=""></option>
        <option value="1">novice</option>
        <option value="2">intermediate</option>
        <option value="3">expert</option>
      </select>
      <label>Number of questions</label>
      <select class="browser-default">
        <option value=""></option>
        <option value="1">5</option>
        <option value="2">10</option>
        <option value="3">15</option>
      </select>
      <label>Style of Questions</label>
      <select class="browser-default">
        <option value=""></option>
        <option value="1">master oogway</option>
        <option value="2">1940's gangster</option>
        <option value="3">like I'm an 8 year old</option>
        <option value="3">normal</option>
        <option value="3">jedi</option>
        <option value="3">captain jack sparrow</option>
        <option value="3">matthew mcconaughey</option>
      </select>

      <button class="waves-effect waves-light btn" onClick={() => {}}>
        SUBMIT
      </button>
    </div>
  );
}
