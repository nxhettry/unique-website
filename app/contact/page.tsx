"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message. We will get back to you soon!"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1d3c78] py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200">
              We{"'"}d love to hear from you. Get in touch with us for any
              inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1d3c78]">
                Get In Touch
              </h2>
              <p className="mb-8 text-muted-foreground">
                Have questions about admissions, curriculum, or anything else?
                Feel free to reach out to us using any of the methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-[#1d3c78]/10 p-3">
                    <MapPin className="h-6 w-6 text-[#1d3c78]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">Our Location</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Education Street, Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-[#1d3c78]/10 p-3">
                    <Phone className="h-6 w-6 text-[#1d3c78]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">Phone Number</h3>
                    <p className="text-sm text-muted-foreground">
                      +977 1234567890
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-[#1d3c78]/10 p-3">
                    <Mail className="h-6 w-6 text-[#1d3c78]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">Email Address</h3>
                    <p className="text-sm text-muted-foreground">
                      info@nepalschool.edu.np
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-[#1d3c78]/10 p-3">
                    <Clock className="h-6 w-6 text-[#1d3c78]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Sunday - Friday: 8:00 AM - 4:00 PM
                      <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-[#1d3c78]">
                  Send Us a Message
                </h2>

                {submitMessage ? (
                  <div className="rounded-md bg-green-50 p-4 text-green-800">
                    {submitMessage}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#1d3c78] hover:bg-[#1d3c78]/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-[#1d3c78]">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our campus to experience our facilities firsthand.
            </p>
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
            {/* This would be replaced with an actual map in a real implementation */}
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">
                Map of Nepal School location would be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-[#1d3c78]">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our school.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: "What are the school hours?",
                a: "Our school operates from 8:00 AM to 3:30 PM, Sunday through Friday. The administrative office is open until 4:00 PM.",
              },
              {
                q: "How can I apply for admission?",
                a: "Admission applications can be submitted online through our website or in person at our administrative office. Please check our Admissions page for detailed requirements.",
              },
              {
                q: "Do you provide transportation services?",
                a: "Yes, we offer transportation services covering major areas of Kathmandu. Please contact our administrative office for routes and fees.",
              },
              {
                q: "What extracurricular activities do you offer?",
                a: "We offer a wide range of extracurricular activities including sports, music, dance, art, debate, and various clubs to foster holistic development.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border p-6">
                <h3 className="mb-2 text-lg font-medium text-[#1d3c78]">
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
