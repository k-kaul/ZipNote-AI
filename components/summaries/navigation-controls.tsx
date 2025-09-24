import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function NavigationControls({
    currentSection,
    totalSections,
    onPrevious,
    onNext,
    onSectionSelect
}: {
    currentSection: number;
    totalSections: number;
    onPrevious: () => void;
    onNext: () => void;
    onSectionSelect: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xs border-t border-rose-500/10">
        <div className="flex justify-between items-center">
            <Button
                variant={'ghost'}
                size={'icon'}
                onClick={onPrevious}
                disabled={currentSection === 0}
                className={cn(
                    'rounded-2xl w-12 h-12 transition-all duration-200 bg-transparent backdrop-blur-xs border border-slate-500/10', 
                    currentSection === 0 ? 'opacity-50' : 'hover:bg-slate-400/20'
                )}
                >
                    <ChevronLeft className="h-6 w-6 text-black"/>
            </Button>
            <div className="flex gap-2">
                {Array.from({length: totalSections}).map((_,index) => (
                    <button 
                        key={index}
                        onClick={()=> onSectionSelect(index)}
                        className={cn(
                            'w-5 h-1 rounded-full transition-all duration-300 bg-transparent',
                            currentSection === index ? 'bg-slate-500' : 'bg-slate-500/20 hover:bg-slate-500/30' 
                        )}  
                    />
                ))
                    
                }
            </div>
            <Button 
                variant={'ghost'}
                size={'icon'}
                onClick={onNext}
                disabled={currentSection === totalSections -1 }
                className={cn(
                    'rounded-2xl w-12 h-12 transition-all duration-200 bg-transparent backdrop-blur-xs border border-slate-500/10', 
                    currentSection === totalSections - 1 ? 'opacity-50' : 'hover:bg-slate-400/20' 
                )}
                >
                    <ChevronRight className="h-6 w-6 text-black"/>
            </Button>
        </div>      
    </div>
  )
}
