import { useState } from "react";
import { FeedbackTypeStep } from "../Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "../Steps/FeedbackSucessStep";

import Bug from "../../assets/widget/Bug.svg"
import Lightbulb from "../../assets/widget/lightbulb.svg"
import ChatCenteredDots from "../../assets/widget/ChatCenteredDots.svg"

export const feedbackTypes = {
    BUG: { title: 'Problema',
           image: {
               source: Bug,
               alt: 'Image in a bug',
           },
        },
    IDEA: { title: 'Ideia',
            image: {
               source: Lightbulb,
               alt: 'Image in a light bulb',
           },
        },
        
    OTHER: { title: 'Outro',
           image: {
               source: ChatCenteredDots,
               alt: 'Image in a baloon thought',
           },
        },
                      };

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [FeedBackType, setFeedBackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedBackType(null);
    }

    return(

    <div className="bg-zinc-900 p-4 relative rounded-2xl flex items-center flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
      

          { feedbackSent ? (
      <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
    ) : (
    <>
       { !FeedBackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
        ) : (
          <FeedbackContentStep
           FeedBackType={FeedBackType}
           onFeedBackRestartRequested={handleRestartFeedback}
           onFeedbackSent={() => setFeedbackSent(true)}
          />
        )}
        </>
        )}
          

         <footer className="text-xs text-neutral-400">
         feito por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/arthur-filho/"> Arthur Timóteo </a> com tutoria <a className="underline underline-offset-2"  href="https://rocketseat.com.br">Rocketseat</a>
         </footer>
       
    </div>
    );
}