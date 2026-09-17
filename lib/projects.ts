export type Project = {
  slug: string;
  title: string;
  problem: string;
  highlights: string[];
  kind: string;
  stack: string[];
  liveUrl: string;
  liveLabel: string;
};

export const projects: Project[] = [
  {
    slug: "ai-frontdesk-interviewer",
    title: "AI Frontdesk / Interviewer",
    problem: "Small teams burn hours on first-round screens that ask every candidate the same five questions.",
    highlights: [
      "Voice and text interview flow that asks follow-ups based on what the candidate just said, instead of reading a fixed script.",
      "Each session produces a structured transcript and summary, so a human reviews a candidate rather than re-interviewing them.",
      "Built as a Next.js app on Vercel with streamed model responses and low-latency audio so the conversation does not stall."
    ],
    kind: "Voice AI",
    stack: ["Next.js", "TypeScript", "LLM APIs", "Realtime voice", "Vercel"],
    liveUrl: "https://ai-frontdesk-interviewer.vercel.app",
    liveLabel: "ai-frontdesk-interviewer.vercel.app"
  },
  {
    slug: "dictaste",
    title: "Dictaste",
    problem: "Typing is the slow part of work that is otherwise just thinking out loud.",
    highlights: [
      "System-wide dictation for macOS with AI cleanup on the transcript, plus highlight-to-speak for reading text back.",
      "Product site covering features, pricing, developer and affiliate paths, and the download flow.",
      "Accounts and billing wired through Clerk and Stripe behind the download, with a locked-down content security policy."
    ],
    kind: "macOS app",
    stack: ["Next.js", "Clerk", "Stripe", "Speech + LLM APIs"],
    liveUrl: "https://dictaste.vercel.app",
    liveLabel: "dictaste.vercel.app"
  },
  {
    slug: "meridian",
    title: "Meridian",
    problem: "Live geospatial feeds -- aircraft, vessels, wildfires, launches -- arrive from a dozen APIs in a dozen shapes, and none of them share a map.",
    highlights: [
      "Interactive 3D globe on CesiumJS that puts ADS-B aircraft, AIS vessels, NASA FIRMS fire detections, rocket launches, and mapped infrastructure on one view.",
      "Per-layer filter chips with local persistence, so an operator's setup survives a reload without polluting shareable URLs.",
      "Serverless routes normalize each upstream feed and fail open when one goes quiet, so a single dead API never blanks the globe."
    ],
    kind: "Geospatial",
    stack: ["CesiumJS", "TypeScript", "Vite", "Serverless APIs", "Vercel"],
    liveUrl: "https://meridian-johnmatveyev-lab.vercel.app",
    liveLabel: "meridian-johnmatveyev-lab.vercel.app"
  },
  {
    slug: "screenshotsticky",
    title: "ScreenshotSticky",
    problem: "A screenshot disappears into a downloads folder at the exact moment you need to compare it against something else.",
    highlights: [
      "macOS app that pins screenshots and region recordings as sticky tiles floating above whatever you're working in.",
      "Image and video studios for annotation and captions, driven by single-key capture and record shortcuts.",
      "Notarized macOS distribution plus a web lander that explains the workflow before the download."
    ],
    kind: "macOS",
    stack: ["macOS", "Notarized distribution", "Web lander", "Vercel"],
    liveUrl: "https://screenshotsticky.vercel.app",
    liveLabel: "screenshotsticky.vercel.app"
  },
  {
    slug: "clipd",
    title: "Clip'D",
    problem: "Turning a long stream into a clip worth posting takes more tools, tabs, and manual cropping than the clip is worth.",
    highlights: [
      "Web product surface for the full clipping workflow: finding the moment, reframing it vertical, captioning it, and scheduling the post.",
      "Live hot board that ranks streams worth watching, backed by a clip library and search over past captures.",
      "Next.js App Router front end shipped on a custom domain with structured data and server-rendered marketing pages."
    ],
    kind: "Media",
    stack: ["Next.js", "TypeScript", "Media pipeline", "Custom domain"],
    liveUrl: "https://clipd.live",
    liveLabel: "clipd.live"
  },
  {
    slug: "aim8",
    title: "Aim8 Sonic Studio",
    problem: "Music tooling assumes you already own a studio, a plugin chain, and the patience to learn all of it.",
    highlights: [
      "Browser studio for generating tracks from a text prompt, separating stems, mastering audio, and rendering music videos.",
      "Voice studio and cloud library so sessions and generated assets persist across devices.",
      "Shipped on its own domain with export paths sized for short-form social video."
    ],
    kind: "Web app",
    stack: ["Web app", "Generative audio + video", "Cloud storage", "Custom domain"],
    liveUrl: "https://aim8.io",
    liveLabel: "aim8.io"
  }
];
