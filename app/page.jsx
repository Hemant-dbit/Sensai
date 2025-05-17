import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonials";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>

      <HeroSection />

      <section className="w-full py-8 md:py-12 lg:py-32 bg-muted-black  ">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-6">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-gray-700 hover:border-gray-300 transition-colors duration-300 bg-black text-white shadow-lg rounded-lg p-6 "
              >
                <CardContent className="pt-6 text-center flex flex-col items-center ">
                  <div className="flex flex-col items-center justify-center ">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground ">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}

      <section className="w-full py-10 md:py-10 bg-muted-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          
            <div className="grid-overlay w-full h-full" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center relative z-10">
         
            {/* Stat 1 */}
            <Card className="border-2 border-gray-700 hover:border-gray-300 transition-colors duration-300 bg-black text-white shadow-lg rounded-lg p-6">
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-muted-foreground">Industries Covered</p>
              </CardContent>
            </Card>

            {/* Stat 2 */}
            <Card className="border-2 border-gray-700 hover:border-gray-300 transition-colors duration-300 bg-black text-white shadow-lg rounded-lg p-6">
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">1000+</h3>
                <p className="text-muted-foreground">Interview Questions</p>
              </CardContent>
            </Card>

            {/* Stat 3 */}
            <Card className="border-2 border-gray-700 hover:border-gray-300 transition-colors duration-300 bg-black text-white shadow-lg rounded-lg p-6">
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">95%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>

            {/* Stat 4 */}
            <Card className="border-2 border-gray-700 hover:border-gray-300 transition-colors duration-300 bg-black text-white shadow-lg rounded-lg p-6">
              <CardContent className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-muted-foreground">AI Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24bg-muted-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-gray-700 hover:border-gray-300 transition-colors duration-300 bg-black text-white shadow-lg rounded-lg p-6 "
              >
                <CardContent className="pt-6 text-center flex flex-col items-center ">
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 border flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Users Say */}
      <section className="w-full py-12 md:py-24 bg-muted-black ">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-black text-white border-2 border-gray-700 hover:border-gray-300 transition-colors duration-300 shadow-lg rounded-lg p-6"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-3xl font-bold mb-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Join thousands of professionals who are advancing their careers with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                className="h-11 mt-5 animate-bounce bg-white text-black border  border-[1px] border-gray-600"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
