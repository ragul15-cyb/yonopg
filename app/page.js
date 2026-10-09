"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <div>
      {/* ===== TOP UTILITY BAR ===== */}
      <div className={styles.topBar}>
        <span className={styles.topBarLink}>Skip to main content</span>
        <span className={styles.topBarLink}>
          Corporate website <span className={styles.topBarIcon}>🏛</span>
        </span>
        <span className={styles.topBarLink}>
          Get Help <span className={styles.topBarIcon}>▶</span>
        </span>
        <span className={styles.topBarLink}>
          WhatsApp <span className={styles.topBarIcon}>📱</span>
        </span>
        <span className={styles.topBarLink}>
          English <span className={styles.topBarIcon}>▾</span>
        </span>
        <div className={styles.fontSizeControls}>
          <button
            className={`${styles.fontSizeBtn} ${styles.fontSizeBtnSmall}`}
          >
            A-
          </button>
          <button
            className={`${styles.fontSizeBtn} ${styles.fontSizeBtnMedium}`}
          >
            A
          </button>
          <button
            className={`${styles.fontSizeBtn} ${styles.fontSizeBtnLarge}`}
          >
            A+
          </button>
        </div>
      </div>

      {/* ===== NAVIGATION BAR ===== */}
      <nav className={styles.navbar}>
        {/* Personal Banking Tab */}
        <div className={styles.personalBankingTab}>
          <button className={styles.personalBankingBtn}>
            Personal Banking
          </button>
        </div>

        {/* Logo */}
        <div className={styles.logoContainer}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <span className={styles.logoYono}>YONO</span>
              <span
                style={{
                  color: "#512da8",
                  fontSize: "20px",
                  margin: "0 3px",
                }}
              >
                ✦
              </span>
              <span className={styles.sbiText}>SBI</span>
            </div>
            <div className={styles.netBanking}>NET-BANKING</div>
          </div>
        </div>

        {/* Nav Links */}
        <div className={styles.navLinks}>
          <a className={`${styles.navLink} ${styles.navLinkActive}`} href="#">
            Home
          </a>
          <a className={styles.navLink} href="#">
            Accounts &amp; Deposits
          </a>
          <a className={styles.navLink} href="#">
            Loans
          </a>
          <a className={styles.navLink} href="#">
            Cards
          </a>
          <a className={styles.navLink} href="#">
            Investments
          </a>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className={styles.heroSection}>
        {/* Left Side – Welcome */}
        <div className={styles.heroLeft}>
          <h1 className={styles.helloText}>
            Hello<span className={styles.helloExclaim}>!</span>
          </h1>
          <p className={styles.welcomeText}>Welcome to the world of YONO SBI</p>

          <p className={styles.newUserTitle}>Are you a new user?</p>
          <p className={styles.newUserDesc}>
            Choose one of the following options if you are a new user
          </p>

          <div className={styles.ctaButtons}>
            <button className={styles.registerBtn}>Register Now</button>
            <button className={styles.activateBtn}>Activate Username</button>
          </div>

          <p className={styles.openAccountText}>
            Don&apos;t have an account with SBI?{" "}
            <a href="#" className={styles.openAccountLink}>
              Open Now!
            </a>
          </p>
        </div>

        {/* Right Side – Login Card */}
        <div className={styles.heroRight}>
          <div className={styles.loginCard}>
            <h2 className={styles.loginTitle}>Username / Password</h2>

            {/* Username */}
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  id="username"
                  type="text"
                  className={styles.formInput}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>
              <a href="#" className={styles.forgotLink}>
                Forgot Username?
              </a>
            </div>

            {/* Password */}
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={styles.formInput}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.inputIcon}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
                <button
                  type="button"
                  className={styles.keyboardIcon}
                  aria-label="Virtual keyboard"
                >
                  ⌨
                </button>
              </div>
              <a href="#" className={styles.forgotLink}>
                Forgot Password?
              </a>
            </div>

            {/* Captcha */}
            <div className={styles.captchaSection}>
              <div className={styles.captchaRow}>
                <div className={styles.captchaImage}>{captchaText}</div>
                <div className={styles.captchaActions}>
                  <button
                    type="button"
                    className={styles.captchaBtn}
                    aria-label="Listen to captcha"
                  >
                    🔊
                  </button>
                  <button
                    type="button"
                    className={styles.captchaBtn}
                    onClick={refreshCaptcha}
                    aria-label="Refresh captcha"
                  >
                    🔄
                  </button>
                </div>
              </div>
              <input
                id="captcha"
                type="text"
                className={styles.captchaInput}
                placeholder="Enter Captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <button type="button" className={styles.loginBtn}>
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
