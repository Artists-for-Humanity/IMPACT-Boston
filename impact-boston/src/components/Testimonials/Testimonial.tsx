import Grid from "../common/Grid";

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


        <Grid className={` ${backgroundColor ? backgroundColor : ''}`}>

            <div className="col-span-full text-center flex flex-col space-evenly gap-8">
                <div>
                    <h3 className="h3">{heading}</h3>
                    <p className="p2">{subheading}</p>
                </div>
                
                <div className="flex flex-col space-evenly gap-4 p-4  bg-white">
                     <p className="p1">{quote}</p>
                    <p className="p2 font-bold">{author}</p>
                    <p className="p2">{authorTitle}</p>
                </div>
            </div>
        
        </Grid>
     
    )
}