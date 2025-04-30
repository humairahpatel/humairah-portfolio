
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Humairah Patel</h1>
        <p className="text-xl mb-6">
          AI Product & Delivery Lead shaping impactful innovation strategies.
        </p>
        <Button>Download Resume</Button>
      </section>

      {/* About Me */}
      <section className="mb-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="mb-2">
          I’m a Product and Delivery Lead with a strong record of building and scaling AI-powered innovations that deliver measurable business outcomes. From launching LLM-based tools to integrating Microsoft Copilot, I specialize in translating complex technology into user-centric solutions.
        </p>
        <p className="mb-2">
          I currently lead digital and AI transformation at Aventum Group, where I design product strategies, drive adoption across teams, and deliver enterprise-level GenAI tools. Previously at Chubb, I led a $1M global AI risk platform and advised executives on AI strategy.
        </p>
        <p>
          Recognized as a finalist for the Everywoman in Tech 'AI Champion' award and a proven leader of high-performing teams, I thrive where innovation, strategy, and real-world impact intersect.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">LLM-Powered Risk Assessment Platform</h3>
              <p>
                Defined product strategy and led delivery of an AI platform that reduced report review times from 3 hours to 1 minute. Projected $2M+ in annual cost savings by integrating ML and LLMs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Microsoft Copilot Rollout</h3>
              <p>
                Led structured rollout of Microsoft Copilot across business units. Resulted in 30% productivity gain and 20% reduction in manual tasks through hands-on training and adoption strategy.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Innovation Hub & Prompt Engineering</h3>
              <p>
                Created a central AI resource hub and authored practical guides like “The Art of Prompt Engineering.” Hosted innovation competitions that surfaced 30+ implementable ideas in 2024.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">AI Strategy & C-Suite Alignment</h3>
              <p>
                Developed business cases and roadmaps that aligned enterprise AI initiatives with board-level goals. Successfully influenced new investments and cross-functional priorities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="mb-12 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">Chat With Me</h2>
        <p className="mb-4">Have questions or want to collaborate? Ask away below!</p>
        <div className="h-96 border rounded-xl bg-gray-100">
          <iframe
            src="/chat"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Chatbot"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
