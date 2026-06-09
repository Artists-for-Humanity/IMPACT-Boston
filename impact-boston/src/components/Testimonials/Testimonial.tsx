import Grid from "../common/Grid";
import ExpandableQuote from "./ExpandableQuote";

interface TestimonialProps {
    heading: string;
    subheading: string;
    quote: string;
    author: string;
    authorTitle: string;
    backgroundColor?: string;
}

export default function Testimonial({
    heading,
    subheading,
    quote,
    author,
    authorTitle,
    backgroundColor,
}: TestimonialProps) {
    return (
        <div className={` ${backgroundColor ? backgroundColor : ''}`}>
        <Grid >

            <div className="col-span-full text-center flex flex-col space-evenly gap-8">
                <div>
                    <h3 className="h3">{heading}</h3>
                    <p className="p2">{subheading}</p>
                </div>
                
                <div className="flex flex-col space-evenly gap-4 p-4  bg-white">
                     <ExpandableQuote quote={quote} className="p1" />
                    <p className="p2 font-bold">{author}</p>
                    <p className="p2">{authorTitle}</p>
                </div>
            </div>
        
        </Grid>
        </div>
     
    )
}
