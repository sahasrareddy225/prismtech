"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, type FormEvent } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Zap } from "lucide-react";
import LoginBackground from "@/components/auth/LoginBackground";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("username")) router.replace("/home");
  }, [router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = email.endsWith("@gmail.com") || email.endsWith("@klh.edu.in");
    if (valid && password.length > 0) {
      localStorage.setItem("username", email.split("@")[0]);
      router.push("/home");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px 10px 38px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.09)",
    color: "#f1f5f9",
    fontSize: "0.8125rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
    WebkitTextFillColor: "#f1f5f9",
    boxShadow: "0 0 0 9999px rgba(10,18,36,0.98) inset",
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040B16] text-white">
      <LoginBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_56%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div style={{ width: "100%", maxWidth: "440px" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "999px", background: "rgba(0,136,204,0.1)", border: "1px solid rgba(0,136,204,0.25)", marginBottom: "16px" }}>
              <Zap style={{ width: "11px", height: "11px", color: "rgba(0,136,204,0.95)" }} fill="currentColor" />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,136,204,0.95)" }}>IEEE PRISMTECH 2026</span>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "1.75rem", letterSpacing: "-0.03em", color: "#f1f5f9", margin: "0 0 8px" }}>
              Welcome back
            </h1>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              Sign in to access your dashboard and team updates.
            </p>
          </div>

          {/* Card */}
          <div style={{
            background: "linear-gradient(160deg, rgba(14,22,42,0.97) 0%, rgba(8,14,28,0.99) 100%)",
            border: "1px solid rgba(80,190,255,0.15)",
            borderRadius: "20px",
            boxShadow: "0 0 0 1px rgba(0,136,204,0.06), 0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px)",
            padding: "32px",
          }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

              {/* Email */}
              <div>
                <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "6px", display: "block" }}>
                  Email Address
                </label>
                <div style={{ position: "relative" }}>
                  <Mail style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", width: "13px", height: "13px", color: "rgba(0,136,204,0.6)", pointerEvents: "none" }} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(""); }}
                    placeholder="you@klh.edu.in"
                    style={inputBase}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,136,204,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,136,204,0.1), 0 0 0 9999px rgba(10,18,36,0.98) inset"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.boxShadow = "0 0 0 9999px rgba(10,18,36,0.98) inset"; }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                    Password
                  </label>
                  <Link href="/forgot-password" style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(34,211,238,0.8)", textDecoration: "none" }}>
                    Forgot password?
                  </Link>
                </div>
                <div style={{ position: "relative" }}>
                  <Lock style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", width: "13px", height: "13px", color: "rgba(0,136,204,0.6)", pointerEvents: "none" }} />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(""); }}
                    placeholder="Enter your password"
                    style={{ ...inputBase, paddingRight: "40px" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,136,204,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,136,204,0.1), 0 0 0 9999px rgba(10,18,36,0.98) inset"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.boxShadow = "0 0 0 9999px rgba(10,18,36,0.98) inset"; }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(p => !p)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", padding: 0 }}
                  >
                    {showPassword ? <EyeOff style={{ width: "14px", height: "14px" }} /> : <Eye style={{ width: "14px", height: "14px" }} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div style={{ padding: "9px 12px", borderRadius: "9px", background: "rgba(251,113,133,0.07)", border: "1px solid rgba(251,113,133,0.25)" }}>
                  <p style={{ fontSize: "0.72rem", color: "rgba(251,113,133,0.95)", margin: 0 }}>{error}</p>
                </div>
              )}

              {/* Remember me */}
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  style={{ width: "14px", height: "14px", accentColor: "#0088cc", cursor: "pointer" }}
                />
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Remember me</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%", padding: "11px", borderRadius: "10px",
                  background: "linear-gradient(135deg, #0088cc 0%, #0062a0 100%)",
                  color: "#fff", fontWeight: 700, fontSize: "0.875rem",
                  letterSpacing: "-0.01em", border: "1px solid rgba(0,170,238,0.3)",
                  boxShadow: "0 0 24px rgba(0,136,204,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
                  cursor: "pointer", transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Sign In
              </button>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
                <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>or</span>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
              </div>

              {/* Social buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  {
                    label: "Google",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                      padding: "9px", borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.65)", fontSize: "0.775rem", fontWeight: 600,
                      cursor: "pointer", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    {icon}
                    {label}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                Don&apos;t have an account?{" "}
                <Link href="/register" style={{ fontWeight: 700, color: "rgba(34,211,238,0.85)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                  Register your team <ArrowRight style={{ width: "12px", height: "12px" }} />
                </Link>
              </p>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
