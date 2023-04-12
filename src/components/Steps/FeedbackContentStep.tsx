import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";
import { ScreenshotButton } from "../WidgetForm/screenshotButton";
import { Loading } from "../WidgetForm/Loading";

import emailjs from "@emailjs/browser"

interface FeedbackContentStepProps{

    onFeedBackRestartRequested: ()=> void;

    onFeedbackSent: () => void;

    FeedBackType: FeedbackType;

}

export function FeedbackContentStep({
    onFeedbackSent 
,   FeedBackType
,   onFeedBackRestartRequested}: FeedbackContentStepProps){

    const FeedBackTypeInfo = feedbackTypes[FeedBackType];

    const [comment, setComment] = useState("");

    const [screenshot, setScreenshot] = useState<string | null>(null);

    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        onFeedbackSent()

        if(comment === ''){
            alert("Preencha todos os campos");
            return
        }
    
        const templateParams = {
            from_name: FeedBackTypeInfo.title,
            message: comment,
        }
    
        emailjs.send("service_osh9o5j", "template_xbkm0lz", templateParams, "-K7DkayEZikN8FBhH")
        .then((response)=>{
            console.log("email enviado", response.status, response.status)
            setComment('')
            setIsSendingFeedback(true)
        },(err) => {
            console.log("Erro: ", err)
            setIsSendingFeedback(false)
        })
      }

    return(
        <>
        <header>
            <button type="button" 
            className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
            onClick={onFeedBackRestartRequested}
            >
            <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
        <span className="text-xl leading-6 flex items-center gap-2">
            
            <img className="w-6 h-6" src={FeedBackTypeInfo.image.source} alt={FeedBackTypeInfo.image.alt}></img> 
            {FeedBackTypeInfo.title}</span>
        
        <CloseButton/>
        </header>

        <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
            <textarea 
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-red-800 focus:ring-red-800 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte-nos em detalhes o que está acontecendo..."
            onChange={(event) => setComment(event.target.value)}
            >
            </textarea>
        
 

         <footer className="flex gap-2 mt-2">
         <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
         <button
         type="submit"
         disabled={comment.length === 0 || isSendingFeedback}
         className="p-2 bg-red-800 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-800 transition-colors disabled:opacity-50 disabled:hover:bg-red-800 text"
         >
         {isSendingFeedback ? <Loading /> : 'Dê o feedback'}
         </button>
         </footer>
         </form>
        </>
    )
}