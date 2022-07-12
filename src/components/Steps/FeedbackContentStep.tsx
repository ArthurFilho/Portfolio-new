import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";
import { ScreenshotButton } from "../WidgetForm/screenshotButton";
import { api } from "../WidgetForm/lib/api";
import { Loading } from "../WidgetForm/Loading";

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
        setIsSendingFeedback(true);

        await api.post('/feedbacks' , {
            type: FeedBackType,
            comment,
            screenshot,

        });
        setIsSendingFeedback(false);    
        onFeedbackSent()
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
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Tell us in detail what is available..."
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
         className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 text"
         >
         {isSendingFeedback ? <Loading/> : 'Send feedback'}
         </button>
         </footer>
         </form>
        </>
    )
}