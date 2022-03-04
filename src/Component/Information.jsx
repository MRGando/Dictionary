import React from "react";
import { AiFillSound } from "react-icons/ai";
import { Howl } from "howler";

function Information({ details }) {
  let audioClip = [details.Audio];
  function playAudio(src) {
    const audio = new Howl({
      src,
    });
    audio.play();
  }

  function ifExists(call, number, rule) {
    return rule ? (
      <p className={call}>
        {number} _ {rule}
      </p>
    ) : null;
  }
  return (
    <div className="container container_two main">
      <div className="info_content">
        {details.Word ? <p className="_word">{details.Word}</p> : null}
        {details.Phonetic ? (
          <>
            <div className="_information_top">
              <p className="_phonetic">{details.Phonetic}</p>
              <AiFillSound
                className="_audio"
                onClick={() => playAudio(audioClip)}
              />
            </div>
            <p className="_partOfSpeech">{details.PartOfSpeech}</p>
            <div className="_information_body">
              <div className="noun">
                {details.PartOfSpeech[0] ? (
                  <p className="_definitionTitle">
                    Definition: ({details.PartOfSpeech[0]})
                  </p>
                ) : null}
                {ifExists("_meaning", 1, details.nounMeaning[0])}
                {ifExists("_meaning", 2, details.nounMeaning[1])}
                {ifExists("_meaning", 3, details.nounMeaning[2])}
              </div>
              <div className="verb">
                {details.PartOfSpeech[2] ? (
                  <p className="_definitionTitle">
                    Definition: ({details.PartOfSpeech[2]})
                  </p>
                ) : null}
                {ifExists("_meaning", 1, details.verbMeaning[0])}
                {ifExists("_meaning", 2, details.verbMeaning[1])}
                {ifExists("_meaning", 3, details.verbMeaning[2])}
              </div>
              <div className="example">
                {details.nounExamples[(0, 1, 2)] ? (
                  <p className="_exampleTitle">Example: (noun)</p>
                ) : null}
                {ifExists("_example", 1, details.nounExamples[0])}
                {ifExists("_example", 2, details.nounExamples[1])}
                {ifExists("_example", 3, details.nounExamples[2])}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Information;
