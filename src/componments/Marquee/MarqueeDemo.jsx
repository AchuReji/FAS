import { cn } from "../../lib/utils"
import { Marquee } from "./Marquee"
import '../../index.css'

const reviews = [
 {
    name: "Amal babu s",
    
    body: " Their auditing is incredibly thorough, catching details we’d missed for years. Highly recommended for any growing business",
    img: "https://image2url.com/r2/default/images/1770185752944-3125f097-29d0-4945-8c09-e33664c59517.png",
  },
  {
    name: "Jeeve thomas",
    
    body: "Reliable & Professional We have used FAS for three years.They are consistently professional, and always deliver their reports ahead of schedule",
    img: "https://image2url.com/r2/default/images/1770185851405-89a12119-c17a-4ad2-972b-a75e09965822.png",
  },
  {
    name: "Anila K",
    
    body: "Their team doesn't just find errors; they find opportunities. The tax and compliance advice we received saved us significant capital this year",
    img: "https://image2url.com/r2/default/images/1770185994946-2d2d74a0-76f3-4b0e-b03d-5864d7d27efe.png",
  },
  {
    name: "Arjun Babu",
    
    body: "he way they integrate technology with traditional auditing is impressive. They helped us modernize our entire financial reporting system.",
    img: "https://image2url.com/r2/default/images/1770185894320-b63a2fe8-530b-4834-b4a9-dc2e2bb507a6.png",
  },
  {
    name: "Gayathri",
    
    body: "FAS transformed our annual audit from a stressful hurdle into a streamlined process. Their attention to detail is unmatched in the industry",
    img: "https://image2url.com/r2/default/images/1770186019082-75663e98-cd1b-496c-a5db-059c4cff6fe6.png",
  },
  {
    name: "Arya Sreelekshmi",
    
    body: "Beyond just numbers, they provided a roadmap for our expansion. Their consulting services are a must for any growing business.",
    img: "https://image2url.com/r2/default/images/1770186045252-69e0bbc8-6503-47a2-b2ea-268e0faf69b7.png",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, username, body }) => {
  return (
    
    <figure
      className={cn(
        "relative h-40 w-70 cursor-pointer overflow-hidden rounded-xl border p-5",
        // light styles
        "border-black/[.1] bg-gray-800/[.01] hover:bg-gray-950/[.05]",
        
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="36"
          height="36"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">
            {name}
          </figcaption>
          <p className="text-xs font-medium ">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white">
        <div className="flex justify-center">
            <div className="border py-1 px-4 mt-4 rounded-lg text-neutral-950">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-950 tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75 text-neutral-950">
            See what our customers have to say about us.
          </p>
          <br />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
    </div>
  )
}
