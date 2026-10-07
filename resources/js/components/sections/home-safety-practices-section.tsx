import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { BackgroundText } from "@/components/ui/misc/background-text";
// @ts-ignore
import imgSafety from "@/../images/safety.png"; // fallback or same image

const safetyItems = [
    {
        title: "Risk Assessment & Planning",
        content: "Thorough risk assessment and planning form a critical part of how we prepare for every job. Each site is carefully assessed, potential hazards are identified and the required safety procedures and controls are put in place before our team commences work. We stand firmly behind these processes, ensuring the conditions, environment and scope of work have been properly considered. If the required safety standards are not met, work will not commence."
    },
    {
        title: "Equipment & Certification",
        content: "We place the same level of importance on the condition of our equipment as we do on the work itself. Our cranes, lifting equipment and rigging gear are inspected, certified and subject to the required checks to ensure they remain safe and fit for use."
    },
    {
        title: "Lift Planning & Setup",
        content: "Each lift is planned around the specific requirements of the job. Load weight, lifting points, rigging, crane capacity, ground conditions and crane setup are all carefully considered before lifting begins. If the required setup is not in place, the lift does not proceed."
    },
    {
        title: "Controlled Working Areas",
        content: "We take responsibility for maintaining a safe working area around our operations. Exclusion zones and access are carefully controlled to keep unauthorised persons clear of lifting, rigging and moving equipment, protecting everyone on site and in the surrounding area."
    },
    {
        title: "Weather & Working Conditions",
        content: "We monitor weather conditions before and throughout the work. If conditions are deemed unsafe, work will not commence. Should conditions change at any stage, work is stopped immediately and will only continue once it is safe to do so."
    },
    {
        title: "Safety Compliance",
        content: "We stand firmly behind the safety standards that govern our work. Our operations are carried out in line with applicable OHS legislation, client requirements and Teemane procedures, with accountability for safety maintained across every level of our business. These standards are continuously reviewed and upheld to ensure that the way we work remains responsible, compliant and reflective of the safety standards our clients have come to trust Teemane for."
    }
];

export function HomeSafetyPracticesSection() {
    return (
        <section className="py-24 bg-muted/30 border-y border-border relative">
            <BackgroundText position="left">SAFETY</BackgroundText>
            <Wrapper>
                <div className="block">

                    {/* Floated Image */}
                    <img
                        src={imgSafety}
                        alt="Teemane Safety Operations"
                        className="float-right w-[45%] sm:w-[35%] lg:w-[45%] rounded-xl drop-shadow-black object-contain ml-4 lg:ml-12 mb-4 lg:mb-0 mt-2 lg:mt-10"
                        style={{
                            shapeOutside: `url(${imgSafety})`,
                            shapeImageThreshold: 0.1,
                            shapeMargin: '1.5rem'
                        }}
                    />

                    {/* Text & Accordion */}
                    <div className="space-y-10">
                        <SectionHeading
                            title={`SAFETY STARTS BEFORE THE LIFT`}
                            label="Our Priority"
                            align="left"
                        />

                        <div className="text-muted-foreground  text-base sm:text-lg leading-relaxed space-y-6">
                            <p>
                                Safety is firmly embedded in the way Teemane operates and remains a leading factor in every decision we make. In the environments we work in, there is no separating safety from the job itself. It influences how we plan, how we prepare our team, how we inspect our equipment and how work is carried out on site.
                            </p>
                            <p>
                                Our approach begins with identifying hazards, assessing risk and making sure the correct controls are in place before any work commences. Just as importantly, we place strong emphasis on the team behind the work. Medical fitness, training, competency, PPE and day-to-day readiness all form part of making sure our team is able to perform safely and responsibly.
                            </p>
                            <p>
                                For us, health and safety is not something reviewed only when required. It is continually monitored, measured and strengthened across the business, with the protection of our team, our clients, contractors, visitors, property and the surrounding environment remaining a constant priority.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Accordion>
                                {safetyItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="py-2"
                                    >
                                        <AccordionTrigger className="text-left font-bold text-lg py-5 hover:no-underline hover:text-primary transition-colors">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <div className="text-muted-foreground leading-relaxed text-base max-w-none">
                                                {item.content}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                    {/* Clearfix to ensure container wraps floated element if it's taller than text */}
                    <div className="clear-both"></div>
                </div>
            </Wrapper>
        </section>
    );
}
