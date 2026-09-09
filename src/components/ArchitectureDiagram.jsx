import React, { useState } from "react";
import {
  ArrowDown,
  ShieldCheck,
  Database,
  Server,
  Smartphone,
  CreditCard,
  Cpu,
  Navigation,
  Sparkles,
  MapPin,
  Activity,
  Layers,
} from "lucide-react";

export default function ArchitectureDiagram({ type = "cravings" }) {
  const [activeTab, setActiveTab] = useState(
    type === "cravings" ? "system" : "verdantx_pipeline"
  );

  if (type === "cravings") {
    return (
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/90 my-8">
        {/* Diagram Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Cravings Full-Stack Architecture & Workflows
            </h4>
            <p className="text-xs text-slate-500">
              Multi-role MERN system architecture with Razorpay, Cloudinary & Google Maps
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("system")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === "system"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Core MERN Pipeline
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === "integrations"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Services & Gateways
            </button>
          </div>
        </div>

        {activeTab === "system" ? (
          /* Core MERN Pipeline */
          <div className="space-y-4 max-w-xl mx-auto">
            {/* Step 1: React.js Frontend */}
            <div className="p-4 rounded-xl bg-cyan-50/80 border border-cyan-200 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">React.js Frontend</h5>
                  <p className="text-xs text-slate-600">
                    4-Role UI: Customers • Restaurants • Riders • Admins
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                Client Layer
              </span>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center my-1 text-slate-400">
              <div className="flex flex-col items-center gap-0.5">
                <ArrowDown className="w-4 h-4 text-teal-600 animate-bounce" />
                <span className="text-[10px] font-mono text-slate-400">
                  Protected REST APIs (Axios / Fetch)
                </span>
              </div>
            </div>

            {/* Step 2: REST APIs & Auth */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">REST APIs & Security</h5>
                  <p className="text-xs text-slate-600">
                    JWT Authentication • Role-Based Access Control (RBAC)
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                Security Layer
              </span>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center my-1 text-slate-400">
              <div className="flex flex-col items-center gap-0.5">
                <ArrowDown className="w-4 h-4 text-emerald-600 animate-bounce" />
                <span className="text-[10px] font-mono text-slate-400">
                  Express Controllers & Order Workflows
                </span>
              </div>
            </div>

            {/* Step 3: Node.js + Express.js */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Node.js + Express.js Server</h5>
                  <p className="text-xs text-slate-600">
                    Ordering Lifecycle • Rider Dispatch • Webhook Verification
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Backend Runtime
              </span>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center my-1 text-slate-400">
              <div className="flex flex-col items-center gap-0.5">
                <ArrowDown className="w-4 h-4 text-teal-600 animate-bounce" />
                <span className="text-[10px] font-mono text-slate-400">
                  Mongoose ODM Schema Models
                </span>
              </div>
            </div>

            {/* Step 4: MongoDB Database */}
            <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">MongoDB Database</h5>
                  <p className="text-xs text-slate-600">
                    Users • Restaurants • Menus • Orders • Delivery Tracking
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                Database Layer
              </span>
            </div>
          </div>
        ) : (
          /* Integrations & Services Tab */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h5 className="text-sm font-bold text-slate-900">Razorpay Payments</h5>
              <p className="text-xs text-slate-600">
                Secure checkout, payment order creation, webhook verification & transaction receipts.
              </p>
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                Payment Gateway
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-2 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-sky-600 text-white flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h5 className="text-sm font-bold text-slate-900">Cloudinary CDN</h5>
              <p className="text-xs text-slate-600">
                Optimized cloud media uploads for restaurant logos, dish photos, and order receipts.
              </p>
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                Media Storage
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Navigation className="w-6 h-6" />
              </div>
              <h5 className="text-sm font-bold text-slate-900">Google Maps API</h5>
              <p className="text-xs text-slate-600">
                Live GPS rider tracking, route navigation, and delivery destination mapping.
              </p>
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Geospatial GPS
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // VerdantX Platform Architecture
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/90 my-8">
      <div className="mb-6 pb-4 border-b border-slate-200">
        <h4 className="text-lg font-bold text-slate-900">
          VerdantX Environmental Intelligence & AI Architecture
        </h4>
        <p className="text-xs text-slate-500">
          Decoupled MERN stack with EPA Risk Engine, Groq LLM, SSE streaming, and Leaflet Maps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto items-stretch">
        {/* Layer 1: Client */}
        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2 text-center flex flex-col justify-between shadow-2xs">
          <div>
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-2">
              <Smartphone className="w-5 h-5" />
            </div>
            <h5 className="text-sm font-bold text-slate-900">React.js Client</h5>
            <p className="text-xs text-slate-600 mt-1">
              Environmental Dashboards • Leaflet Map Viewports • SSE Stream UI
            </p>
          </div>
          <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 w-fit mx-auto">
            Frontend Layer
          </span>
        </div>

        {/* Layer 2: Node/Express & EPA Engine */}
        <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200 space-y-2 text-center flex flex-col justify-between shadow-2xs">
          <div>
            <div className="w-10 h-10 mx-auto rounded-xl bg-teal-600 text-white flex items-center justify-center mb-2">
              <Activity className="w-5 h-5" />
            </div>
            <h5 className="text-sm font-bold text-slate-900">EPA Risk Engine</h5>
            <p className="text-xs text-slate-600 mt-1">
              Real-time AQI & Weather APIs • Algorithmic Risk Classification
            </p>
          </div>
          <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800 w-fit mx-auto">
            Analytical Engine
          </span>
        </div>

        {/* Layer 3: Groq LLM & SSE */}
        <div className="p-4 rounded-2xl bg-violet-50/80 border border-violet-200 space-y-2 text-center flex flex-col justify-between shadow-2xs">
          <div>
            <div className="w-10 h-10 mx-auto rounded-xl bg-violet-600 text-white flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h5 className="text-sm font-bold text-slate-900">Groq AI & SSE</h5>
            <p className="text-xs text-slate-600 mt-1">
              Structured Health Reports • Low-Latency SSE Streaming Responses
            </p>
          </div>
          <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-violet-100 text-violet-800 w-fit mx-auto">
            GenAI Workflows
          </span>
        </div>

        {/* Layer 4: Persistence */}
        <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 space-y-2 text-center flex flex-col justify-between shadow-2xs">
          <div>
            <div className="w-10 h-10 mx-auto rounded-xl bg-slate-900 text-white flex items-center justify-center mb-2">
              <Database className="w-5 h-5 text-emerald-400" />
            </div>
            <h5 className="text-sm font-bold text-slate-900">MongoDB Database</h5>
            <p className="text-xs text-slate-600 mt-1">
              Civic Issue Reports • Historical Pollution Data • User Preferences
            </p>
          </div>
          <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800 w-fit mx-auto">
            Database Layer
          </span>
        </div>
      </div>
    </div>
  );
}
