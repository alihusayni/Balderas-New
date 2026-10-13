"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function GateForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        const from = searchParams.get("from") || "/";
        router.push(from);
        router.refresh();
      } else {
        setError("Incorrect password");
        setPassword("");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gate-container">
      <div className="gate-card">
        {/* Logo / Brand */}
        <div className="gate-header">
          <div className="gate-logo-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="gate-title">Preview Access</h1>
          <p className="gate-subtitle">Enter the password to view this site</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="gate-form-group">
            <input
              id="gate-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              required
              className={`gate-input ${error ? "gate-input--error" : ""}`}
            />
          </div>

          {error && (
            <div className="gate-error-message">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="gate-button"
          >
            {loading ? (
              <span className="gate-loading-content">
                <span className="gate-spinner" />
                Verifying...
              </span>
            ) : (
              "Continue"
            )}
          </button>
        </form>

        <style>{`
          .gate-container, .suspense-fallback {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #06182C 0%, #0f2b47 50%, #162d44 100%);
          }
          .gate-container {
            font-family: var(--font-maison), 'Helvetica Neue', Arial, sans-serif;
            padding: 1rem;
          }
          .gate-card {
            width: 100%;
            max-width: 420px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 3rem 2.5rem;
            box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
          }
          .gate-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          .gate-logo-icon {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            background: linear-gradient(135deg, #dc5a31, #e87b5a);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.25rem;
            box-shadow: 0 8px 24px rgba(220, 90, 49, 0.3);
          }
          .gate-title {
            color: #ffffff;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
            letter-spacing: -0.02em;
          }
          .gate-subtitle {
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.5;
          }
          .gate-form-group {
            margin-bottom: 1.25rem;
          }
          .gate-input {
            width: 100%;
            padding: 14px 16px;
            font-size: 0.95rem;
            color: #ffffff;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            outline: none;
            transition: all 0.2s ease;
            box-sizing: border-box;
          }
          .gate-input::placeholder {
            color: rgba(255, 255, 255, 0.3);
          }
          .gate-input:focus {
            border-color: rgba(220, 90, 49, 0.5);
            box-shadow: 0 0 0 3px rgba(220, 90, 49, 0.15);
          }
          .gate-input.gate-input--error {
            border-color: rgba(239, 68, 68, 0.5);
          }
          .gate-error-message {
            color: #ef4444;
            font-size: 0.85rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .gate-button {
            width: 100%;
            padding: 14px;
            font-size: 0.95rem;
            font-weight: 600;
            color: #ffffff;
            background: linear-gradient(135deg, #dc5a31, #c44a25);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
            letter-spacing: 0.01em;
            box-shadow: 0 4px 16px rgba(220, 90, 49, 0.3);
          }
          .gate-button:disabled {
            background: rgba(220, 90, 49, 0.4);
            cursor: not-allowed;
            box-shadow: none;
          }
          .gate-loading-content {
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .gate-spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function GatePage() {
  return (
    <Suspense fallback={<div className="suspense-fallback" />}>
      <GateForm />
    </Suspense>
  );
}