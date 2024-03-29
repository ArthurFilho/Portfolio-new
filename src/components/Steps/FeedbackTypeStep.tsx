import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface feedBackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: feedBackTypeStepProps)
{
    return(
        <>
        <header>
        <span className="text-xl leading-6">Dê o seu feedback</span>
        
        <CloseButton/>
        </header>

        <div className="flex py-8 gap-2 w-full">
         
             { Object.entries(feedbackTypes).map(([key, value])=> { 
                 return(
                 <button
                  key={key}
                 className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 items-center flex flex-col gap-2 border-2 border-transparent hover:border-red-800 focus:border-red-800 focus:outline-none"
                 onClick={ () => onFeedbackTypeChanged(key as FeedbackType)}
                 type="button"
                 >
                  <img src={value.image.source} alt={value.image.alt} />
                  <span>{value.title}</span>
                 </button>
                   ) 
                   } ) }
            
            </div>
        </>
         )
}