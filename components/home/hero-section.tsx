import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionH2, MotionSection, MotionSpan } from "@/components/common/motion-wrapper";
import { buttonVariants, containerVariants, itemVariants } from "@/utils/contants";

import { MovingBorderButton } from "../ui/moving-border";

export default function HeroSection(){
    return <MotionSection 
                variants={containerVariants} 
                initial='hidden'
                animate='visible'
                className="relative mx-auto flex flex-col items-center justify-center py-16 mt-15 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl ">
            <MotionH1 variants={itemVariants} className="font-bold py-6 text-center">
                Turn Lengthy PDFs into Summaries <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-red-600 bg-clip-text text-transparent">in Seconds.</span>
            </MotionH1>
            <MotionH2 variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600 tracking-wider">Get clear, concise summaries of your documents instantly. <br></br>No more endless scrolling.</MotionH2>
            <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
                <div className="mt-6 lg:mt-16 hover:no-underline font-bold transition-all duration-300">
                    <MovingBorderButton
                        borderRadius="2rem"
                        className="bg-linear-to-r from-gray-50 to-gray-100 shadow-xl font-bold text-base sm:text-lg lg:text-xl"
                        duration={7000}
                    >
                        <Link href="/sign-in" className="flex gap-2 items-center">
                            <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-red-600 bg-clip-text text-transparent">Try ZipNote</span>
                            <ArrowRight className="animate-pulse"/>
                        </Link>
                    </MovingBorderButton>
                </div>
            </MotionDiv>
    </MotionSection>
}