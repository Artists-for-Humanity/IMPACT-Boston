import Grid from "../common/Grid";

interface TestimonialProps {
    heading: string;
    subheading: string;
    quote: string;
    author: string;
    authorTitle: string;
}

export default function Testimonial({
    heading,
    subheading,
    quote,
    author,
    authorTitle,
}: TestimonialProps) {
    return (
        <div className="mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18">
        <Grid>
            <div className="col-span-full text-center flex flex-col space-evenly gap-8">
                <div>
                    <h3 className="h3">{heading}</h3>
                    <p className="p2">{subheading}</p>
                </div>
                <div>
                    <p className="p1">{quote}</p>
                </div>
                <div>
                    <p className="p2 font-bold">{author}</p>
                    <p className="p2">{authorTitle}</p>
                </div>
            </div>
        
        </Grid>
        </div>
    )
}