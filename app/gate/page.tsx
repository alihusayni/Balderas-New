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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #06182C 0%, #0f2b47 50%, #162d44 100%)",
        fontFamily: "var(--font-maison), 'Helvetica Neue', Arial, sans-serif",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "20px",
          padding: "3rem 2.5rem",
          boxShadow: "0 32px 64px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Logo / Brand */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #dc5a31, #e87b5a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem",
              boxShadow: "0 8px 24px rgba(220, 90, 49, 0.3)",
            }}
          >
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
          <h1
            style={{
              color: "#ffffff",
              fontSize: "1.5rem",
              fontWeight: 600,
              margin: "0 0 0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Preview Access
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.45)",
              fontSize: "0.9rem",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Enter the password to view this site
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.25rem" }}>
            <input
              id="gate-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "0.95rem",
                color: "#ffffff",
                background: "rgba(255, 255, 255, 0.06)",
                border: error
                  ? "1px solid rgba(239, 68, 68, 0.5)"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                outline: "none",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(220, 90, 49, 0.5)";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(220, 90, 49, 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = error
                  ? "rgba(239, 68, 68, 0.5)"
                  : "rgba(255, 255, 255, 0.1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {error && (
            <div
              style={{
                color: "#ef4444",
                fontSize: "0.85rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
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
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#ffffff",
              background:
                loading || !password
                  ? "rgba(220, 90, 49, 0.4)"
                  : "linear-gradient(135deg, #dc5a31, #c44a25)",
              border: "none",
              borderRadius: "12px",
              cursor: loading || !password ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
              letterSpacing: "0.01em",
              boxShadow:
                loading || !password
                  ? "none"
                  : "0 4px 16px rgba(220, 90, 49, 0.3)",
            }}
          >
            {loading ? (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 0.6s linear infinite",
                  }}
                />
                Verifying...
              </span>
            ) : (
              "Continue"
            )}
          </button>
        </form>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          input::placeholder {
            color: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
}

export default function GatePage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #06182C 0%, #0f2b47 50%, #162d44 100%)",
          }}
        />
      }
    >
      <GateForm />
    </Suspense>
  );
}
