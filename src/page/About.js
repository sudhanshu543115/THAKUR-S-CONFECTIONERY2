import React from "react";
import { Fade } from "react-awesome-reveal"; 
import img from '../assest/download.jpeg'
  // nice, lightweight fade-in effect

// ------------  About.jsx  ------------
export default function About() {
  return (
    <section className="min-h-screen bg-white text-gray-800">
      {/* Hero / Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={img}
          alt="Restaurant interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-white uppercase drop-shadow-lg">
            Foddie&nbsp;Adda
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-4 py-16 space-y-14">
        {/* Our Story */}
        <Fade triggerOnce>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://source.unsplash.com/600x600/?chef,cooking"
              alt="Our chef"
              className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-full"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="leading-relaxed">
                Born in 2023 out of pure passion for bold flavours, <strong>Foddie
                Adda</strong> began as a tiny late-night food cart and quickly grew into
                the go-to hangout spot for food lovers across the city. Every plate
                we serve is an ode to street-food culture—vibrant, honest and
                bursting with personality.
              </p>
            </div>
          </div>
        </Fade>

        {/* Mission */}
        <Fade direction="right" triggerOnce>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                We aim to turn everyday meals into memorable experiences. From
                sourcing the freshest local produce to fine-tuning secret spice
                blends, our team is obsessed with quality. When you dine with
                us, you’re not just a customer—you’re part of the Foddie Adda
                family.
              </p>
            </div>
            <img
              src="https://source.unsplash.com/600x600/?spices,ingredients"
              alt="Fresh ingredients"
              className="order-1 md:order-2 rounded-2xl shadow-lg object-cover w-full h-80 md:h-full"
            />
          </div>
        </Fade>

        {/* Fast facts */}
        <Fade direction="up" triggerOnce>
          <div className="bg-gray-100 rounded-2xl p-10 shadow-inner">
            <h3 className="text-2xl font-semibold mb-6 text-center">Fast Facts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                ["20+", "Signature Dishes"],
                ["30", "Local Suppliers"],
                ["4.8★", "Average Rating"],
                ["100%", "Passion"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-primary-600">{stat}</p>
                  <p className="text-sm uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
