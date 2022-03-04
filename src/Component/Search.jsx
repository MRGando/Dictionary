import React from "react";
import { useEffect, useRef } from "react";

function Search({ value, setValue, details, setDetails }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    try {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`).then(
        (response) => {
          if (!response.ok) {
            console.log("word couldn't be found!");
          } else {
            response.json().then((data) => {
              const dictionary = data[0];
              setDetails({
                Word: dictionary.word,
                Phonetic: dictionary.phonetics[0].text,
                Audio: dictionary.phonetics[0].audio,
                PartOfSpeech: [
                  dictionary.meanings[0].partOfSpeech,
                  " ",
                  dictionary.meanings[1].partOfSpeech,
                ],
                nounMeaning: [
                  dictionary.meanings[0].definitions[0].definition,
                  dictionary.meanings[0].definitions[1].definition,
                  dictionary.meanings[0].definitions[2].definition,
                ],
                verbMeaning: [
                  dictionary.meanings[1].definitions[0].definition,
                  dictionary.meanings[1].definitions[1].definition,
                  dictionary.meanings[1].definitions[2].definition,
                ],
                nounExamples: [
                  dictionary.meanings[0].definitions[0].example,
                  dictionary.meanings[0].definitions[1].example,
                  dictionary.meanings[0].definitions[2].example,
                ],
              });
            });
          }
        }
      );
    } catch (e) {
      console.log(e.message);
    }
  }, [value]);
  return (
    <div className="container head">
      <div className="content">
        <span>Look it UP!</span>
        <input
          ref={inputRef}
          onChange={(e) => setValue((value = e.target.value))}
          type="text"
          placeholder="Type your word ..."
        />
      </div>
    </div>
  );
}

export default Search;
