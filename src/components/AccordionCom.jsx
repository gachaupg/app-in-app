import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AccordionCom = () => {
  return (
    <Accordion type="single" collapsible className="flex flex-col w-full gap-5">
      <AccordionItem value="item-1">
        <AccordionTrigger>
        </AccordionTrigger>
        Who are we ?
        <AccordionContent>
          We are a a trading and exchange platform offering bitcoin and other services .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCom;
