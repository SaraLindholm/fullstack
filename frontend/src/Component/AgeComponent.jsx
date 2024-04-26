import {useState} from 'react'
import './AgeComponent.css'

function AgeComponent () {
  const [age, setAge] = useState ('');


  const handleAgeSet = (event) => {
    setAge(event.target.value)
  }

  return (
    <>
    <h2>Familjeaktiviteter för alla!</h2>

    <label className="Label">
      Ange din ålder:
    <input
      className="Button"
      onChange={handleAgeSet}
      type="number"
      value={age} />
    </label>
    {age && (
            <div className="Age-Div">
              {age > 18 ? (
                <span>
                  Välkommen till vår sida! Vi är glada att du har hittat hit. Hos oss hittar du en mängd olika aktiviteter och tips som är perfekta för både barn och vuxna att njuta av tillsammans. Bläddra igenom vårt utbud av roliga och meningsfulla aktiviteter och låt dig inspireras till att skapa minnesvärda stunder med din familj och dina vänner! Oavsett om det är att måla tillsammans, gå på naturutflykter, eller hitta på spännande projekt, finns det något för alla här. Vi hoppas att våra idéer kommer att ge er glädje och nära stunder tillsammans. Så ta några ögonblick att utforska vårt utbud och låt äventyret börja!
                </span>
              ) : (
                <span>
                Hej och välkommen till vår fantastiska värld av äventyr och upptäckter! Här på vår webbsida finns det massor av roliga och spännande saker att utforska och lära sig. Ta en titt runt och hitta massor av coola tips och idéer för att göra din dag ännu roligare. Oavsett om du är intresserad av att måla, rita, läsa spännande berättelser eller leka utomhus, så finns det något här för dig! Kom ihåg att det viktigaste är att ha kul och vara säker på vägen. Så, vad väntar du på? Ge dig ut på äventyr och låt fantasin ta dig med på en resa du sent kommer att glömma!
                </span>
              )}
            </div>
          )}

      </>


)}

export default AgeComponent
