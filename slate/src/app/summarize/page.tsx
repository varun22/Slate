// pages/summarize.tsx
"use client"
import { useState } from 'react';


const SummarizePage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  async function callGeminiAPI(text: string): Promise<string> {

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const apiKey = "AIzaSyBYjQrQeCq8zlzAUNBP_gqok0ukUJUHWm0";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    

    const notesHistory = "Formula 1 History Main article History of Formula One Formula One originated from the European Motor Racing Championships of the 1920s and 1930s. The formula is a set of rules that all participants' cars must follow. Formula One was a formula agreed upon in 1946 to officially become effective in 1947. The first Grand Prix in accordance with the new regulations was the 1946 Turin Grand Prix, anticipating the formulas official start.[citation needed] Before World War II, a number of Grand Prix racing organisations made suggestions for a new championship to replace the European Championship, but due to the suspension of racing during the conflict, the new International Formula for cars did not become formalised until 1946, to become effective in 1947. The new World Championship was instituted to commence in 1950.[citation needed]The first world championship race took place at Silverstone Circuit in the United Kingdom on 13 May 1950.[6] Giuseppe Farina, competing for Alfa Romeo, won the first Drivers' World Championship, narrowly defeating his teammate Juan Manuel Fangio. Fangio won the championship in 1951, 1954, 1955, 1956, and 1957.[7] This set the record for the most World Championships won by a single driver, a record that stood for 46 years until Michael Schumacher won his sixth championship in 2003 Juan Manuel Fangio's 1951 title-winning Alfa Romeo 159A Constructors' Championship was added in the 1958 season. Stirling Moss, despite being regarded as one of the greatest Formula One drivers in the 1950s and 1960s, never won the Formula One championship.[8] Between 1955 and 1961, Moss finished second in the championship four times and third the other three times.[9][10] Fangio won 24 of the 52 races he entered—still the record for the highest Formula One winning percentage by an individual driver.[11] National championships existed in South Africa and the UK in the 1960s and 1970s. Promoters held non-championship Formula One events for many years. Due to the increasing cost of competition, the last of these was held in 1983.[12]"
    const notesTechDev = "The first major technological development in the sport was Bugatti's introduction of mid-engined cars. Jack Brabham, the world champion in 1959, 1960, and 1966, soon proved the mid-engine's superiority over all other engine positions. By 1961 all teams had switched to mid-engined cars. The Ferguson P99, a four-wheel drive design, was the last front-engined Formula One car to enter a world championship race. It entered the 1961 British Grand Prix, the only front-engined car to compete that year.[1During 1962, Lotus introduced a car with an aluminium-sheet monocoque chassis instead of the traditional space-frame design. This proved to be the greatest technological breakthrough since the introduction of mid-engined cars.In 1968, sponsorship was introduced to the sport. Team Gunston became the first team to run cigarette sponsorship on its Brabham cars, which privately entered in orange, brown and gold colours of Gunston cigarettes in the 1968 South African Grand Prix on 1 January 1968.[17] Five months later, the first works team, Lotus, followed this example when it entered its cars painted in the red, gold, and white colours of the Imperial Tobacco's Gold Leaf livery at the 1968 Spanish Grand Prix.Aerodynamic downforce slowly gained importance in car design with the appearance of aerofoils during the 1968 season. In the late 1970s, Lotus introduced ground-effect aerodynamics, previously used on Jim Hall's Chaparral 2J in 1970, that provided enormous downforce and greatly increased cornering speeds. The aerodynamic forces pressing the cars to the track were up to five times the car's weight. As a result, extremely stiff springs were needed to maintain a constant ride height, leaving the suspension virtually solid. This meant that the drivers depended entirely on the tyres for any small amount of cushioning of the car and driver from irregularities of the road surface.[18]"

    var prompt = "Summarize this text in notes like format. \n ";
    prompt += notesHistory + notesTechDev;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());


    return summary;
  }

  const handleSummarize = async () => {
    try {
      const summary = await callGeminiAPI(inputText);
      setSummary(summary);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
=      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows={10}
        cols={50}
        style={{ color: 'black' }} // Apply inline style for text color
      />
      <button onClick={handleSummarize}>Summarize</button>
      <div style={{ color: 'white' }}>{summary}</div> {/* Apply inline style for text color */}
    </div>
  );
};

export default SummarizePage;


