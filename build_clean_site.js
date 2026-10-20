const fs = require('fs');

const catalogItems = JSON.parse(fs.readFileSync('catalog_items.json', 'utf8'));

// Build the index.html content safely
const parts = [];

function p(str) {
  parts.push(str);
}

p(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#b88b22">
  <meta name="description" content="Shree Shyam Marble Handicraft, Makrana — Handcrafted pure white Makrana marble temples (mandirs), god idols, divine sculptures, brass diyas, fountains, and bespoke stone artifacts. Direct manufacturer from Makrana, Rajasthan.">
  <meta name="keywords" content="Makrana marble, marble mandir, marble idols, marble temple, Makrana murti, marble diya, marble fountain, Shree Shyam Marble Handicraft, Gopal Saini">
  <title>Shree Shyam Marble Handicraft | Makrana Marble Temples, Idols & Handicrafts</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&family=Playfair+Display:ital,wght@0,500..800;1,500..800&family=Rozha+One&display=swap" rel="stylesheet">

  <style>
    :root {
      --gold-light: #e4bc5d;
      --gold: #b88b22;
      --gold-dark: #876210;
      --gold-gradient: linear-gradient(135deg, #cba238 0%, #a47614 100%);
      --gold-soft: #fcf6ea;
      --ink: #1e1d1a;
      --ink-soft: #38352f;
      --muted: #6b665c;
      --cream: #faf7f2;
      --warm-white: #ffffff;
      --stone-bg: #f5f2eb;
      --line: #e6ded3;
      --line-subtle: #f0ebe2;
      --shadow-sm: 0 4px 14px rgba(30, 29, 26, 0.05);
      --shadow-md: 0 10px 30px rgba(30, 29, 26, 0.08);
      --shadow-lg: 0 20px 45px rgba(30, 29, 26, 0.12);
      --whatsapp: #1f9d45;
      --whatsapp-dark: #157933;
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 20px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'DM Sans', sans-serif;
      color: var(--ink);
      background-color: #fff;
      line-height: 1.6;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; text-decoration: none; }
    img { display: block; width: 100%; height: 100%; object-fit: cover; }
    button { font-family: inherit; cursor: pointer; border: none; }

    .container {
      width: min(1240px, 92%);
      margin-inline: auto;
    }

    /* Top Utility Bar */
    .utility-bar {
      background: var(--ink);
      color: #dfdbd3;
      font-size: 12px;
      padding: 7px 0;
      border-bottom: 1px solid #33302a;
    }
    .utility-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .utility-left {
      display: flex;
      gap: 18px;
      align-items: center;
    }
    .utility-badge {
      background: var(--gold-dark);
      color: #fff;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 700;
    }
    .utility-right {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .utility-link {
      color: #f0ebe2;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }
    .utility-link:hover { color: var(--gold-light); }

    /* Main Navigation Header */
    .topbar {
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 100;
      border-bottom: 1px solid var(--line);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
      transition: all 0.3s ease;
    }
    .topbar-inner {
      height: 82px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .brand {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    .brand-title {
      font-family: 'Playfair Display', serif;
      font-size: 25px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: var(--ink);
    }
    .brand-title span {
      color: var(--gold);
    }
    .brand-sub {
      font-size: 10.5px;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      color: var(--muted);
      font-weight: 600;
      margin-top: 2px;
    }

    nav {
      display: flex;
      gap: 26px;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      color: var(--ink-soft);
    }
    nav a {
      position: relative;
      padding: 6px 0;
      transition: color 0.2s ease;
    }
    nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--gold);
      transition: width 0.25s ease;
    }
    nav a:hover {
      color: var(--gold-dark);
    }
    nav a:hover::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .btn-call {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--gold-soft);
      color: var(--gold-dark);
      border: 1px solid var(--gold-light);
      padding: 9px 16px;
      border-radius: var(--radius-sm);
      font-size: 13px;
      font-weight: 700;
      transition: all 0.2s ease;
    }
    .btn-call:hover {
      background: var(--gold);
      color: #fff;
    }
    .btn-wa-header {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--whatsapp);
      color: #fff;
      padding: 9px 18px;
      border-radius: var(--radius-sm);
      font-size: 13px;
      font-weight: 700;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(31, 157, 69, 0.25);
    }
    .btn-wa-header:hover {
      background: var(--whatsapp-dark);
      transform: translateY(-1px);
    }
    .menu-btn {
      display: none;
      background: none;
      font-size: 26px;
      color: var(--ink);
      padding: 4px;
    }

    /* Common Buttons & Typography */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: var(--gold);
      color: #fff;
      border: 1px solid var(--gold);
      padding: 13px 24px;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.3px;
      border-radius: var(--radius-sm);
      transition: all 0.25s ease;
      cursor: pointer;
    }
    .btn:hover {
      background: var(--gold-dark);
      border-color: var(--gold-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
    .btn.outline {
      background: transparent;
      color: var(--ink);
      border-color: var(--line);
    }
    .btn.outline:hover {
      background: var(--ink);
      color: #fff;
      border-color: var(--ink);
    }
    .btn.whatsapp {
      background: var(--whatsapp);
      border-color: var(--whatsapp);
      color: #fff;
    }
    .btn.whatsapp:hover {
      background: var(--whatsapp-dark);
      border-color: var(--whatsapp-dark);
    }
    .btn.sm {
      padding: 9px 15px;
      font-size: 12px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11.5px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold-dark);
      font-weight: 700;
      margin-bottom: 10px;
    }
    .eyebrow::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 2px;
      background: var(--gold);
    }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(28px, 3.4vw, 42px);
      line-height: 1.2;
      color: var(--ink);
      margin-bottom: 12px;
      letter-spacing: -0.5px;
    }
    .section-copy {
      font-size: 15px;
      color: var(--muted);
      line-height: 1.7;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(180deg, #fbf9f5 0%, #f4eee3 100%);
      padding: 40px 0 60px;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid var(--line);
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1.05fr;
      gap: 40px;
      align-items: center;
    }
    .hero-copy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 2;
    }
    .hero-badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #fff;
      border: 1px solid var(--line);
      padding: 6px 14px;
      border-radius: 40px;
      font-size: 12px;
      font-weight: 600;
      color: var(--ink-soft);
      width: max-content;
      margin-bottom: 18px;
      box-shadow: var(--shadow-sm);
    }
    .hero-badge-pill span.dot {
      width: 8px;
      height: 8px;
      background: #008c24;
      border-radius: 50%;
      display: inline-block;
    }
    .hero-h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(34px, 4.2vw, 56px);
      line-height: 1.1;
      letter-spacing: -1px;
      color: var(--ink);
      margin-bottom: 16px;
    }
    .hero-h1 em {
      font-style: italic;
      color: var(--gold);
      font-weight: 500;
    }
    .hero-p {
      font-size: 16px;
      color: #555047;
      margin-bottom: 28px;
      line-height: 1.65;
      max-width: 520px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 32px;
    }
    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      font-size: 13px;
    }
    .hero-meta-item strong {
      display: block;
      font-size: 18px;
      color: var(--ink);
      font-family: 'Playfair Display', serif;
    }
    .hero-meta-item span {
      color: var(--muted);
      font-size: 12px;
    }

    /* Hero Showcase Slider */
    .hero-showcase {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(78, 59, 17, 0.18);
      background: #fff;
      border: 8px solid #fff;
      aspect-ratio: 4 / 3.4;
      max-height: 520px;
    }
    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.8s ease, transform 0.8s ease;
      transform: scale(1.04);
    }
    .hero-slide.active {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
    .hero-slide-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 30px 24px 20px;
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .hero-slide-tag {
      font-size: 11px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--gold-light);
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
    }
    .hero-slide-title {
      font-size: 17px;
      font-weight: 600;
      font-family: 'Playfair Display', serif;
    }
    .hero-slide-badge {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      padding: 6px 12px;
      border-radius: 30px;
      font-size: 11.5px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #fff;
      white-space: nowrap;
    }
    .slider-dots {
      position: absolute;
      bottom: 16px;
      left: 24px;
      display: flex;
      gap: 7px;
      z-index: 10;
    }
    .slider-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.45);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .slider-dot.active {
      width: 24px;
      border-radius: 12px;
      background: var(--gold-light);
    }

    /* Trust Credibility Row */
    .trust-strip {
      background: #fff;
      border-bottom: 1px solid var(--line);
      padding: 24px 0;
    }
    .trust-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .trust-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 8px 14px;
      border-right: 1px solid var(--line);
    }
    .trust-card:last-child {
      border-right: none;
    }
    .trust-icon-box {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: var(--gold-soft);
      color: var(--gold-dark);
      display: grid;
      place-items: center;
      font-size: 22px;
      flex-shrink: 0;
      border: 1px solid #ebd7af;
    }
    .trust-card h4 {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--ink);
      margin-bottom: 2px;
    }
    .trust-card p {
      font-size: 11.5px;
      color: var(--muted);
      margin: 0;
      line-height: 1.35;
    }

    /* Business Verified Card */
    .verified-banner {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: var(--radius-md);
      padding: 18px 24px;
      margin: 32px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      box-shadow: var(--shadow-sm);
    }
    .verified-left {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .verified-name {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      font-weight: 700;
      color: var(--ink);
    }
    .verified-badge {
      background: #008c24;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .verified-info-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 12.5px;
      color: var(--muted);
    }
    .verified-info-pills span {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .verified-right {
      display: flex;
      gap: 10px;
    }

    /* Section Spacing */
    section {
      padding: 70px 0;
    }

    /* Specialities / Services */
    .specialities-sec {
      background: var(--stone-bg);
      border-bottom: 1px solid var(--line);
    }
    .section-head {
      text-align: center;
      max-width: 680px;
      margin: 0 auto 40px;
    }
    .spec-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }
    .spec-card {
      background: #fff;
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid var(--line);
      box-shadow: var(--shadow-sm);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .spec-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }
    .spec-photo {
      height: 200px;
      overflow: hidden;
      position: relative;
    }
    .spec-photo img {
      transition: transform 0.6s ease;
    }
    .spec-card:hover .spec-photo img {
      transform: scale(1.06);
    }
    .spec-tag {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(30, 29, 26, 0.8);
      backdrop-filter: blur(6px);
      color: var(--gold-light);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 4px;
    }
    .spec-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .spec-content h3 {
      font-size: 16px;
      margin-bottom: 6px;
      color: var(--ink);
    }
    .spec-content p {
      font-size: 12.5px;
      color: var(--muted);
      line-height: 1.5;
      margin-bottom: 16px;
      flex-grow: 1;
    }
    .spec-link {
      font-size: 12px;
      font-weight: 700;
      color: var(--gold-dark);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .spec-link:hover { color: var(--gold); }

    /* CATALOG SECTION (Heart of User Request) */
    .catalog-sec {
      background: #fff;
      position: relative;
    }
    .catalog-header-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--line);
    }
    .catalog-filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 24px;
    }
    .filter-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--cream);
      border: 1px solid var(--line);
      color: var(--ink-soft);
      padding: 9px 18px;
      border-radius: 30px;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .filter-btn:hover {
      background: #fff;
      border-color: var(--gold);
      color: var(--gold-dark);
    }
    .filter-btn.active {
      background: var(--gold);
      border-color: var(--gold);
      color: #fff;
      box-shadow: 0 4px 12px rgba(184, 139, 34, 0.3);
    }
    .filter-count {
      display: inline-block;
      font-size: 11px;
      padding: 1px 7px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.08);
      font-weight: 700;
    }
    .filter-btn.active .filter-count {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    .catalog-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      background: #fbf9f5;
      padding: 14px 20px;
      border-radius: var(--radius-md);
      border: 1px solid var(--line-subtle);
      margin-bottom: 28px;
    }
    .search-wrap {
      position: relative;
      flex: 1;
      max-width: 420px;
    }
    .search-wrap input {
      width: 100%;
      padding: 10px 16px 10px 38px;
      border: 1px solid var(--line);
      border-radius: 30px;
      font-size: 13px;
      outline: none;
      font-family: inherit;
      background: #fff;
      transition: border-color 0.2s;
    }
    .search-wrap input:focus {
      border-color: var(--gold);
      box-shadow: 0 0 0 3px rgba(184, 139, 34, 0.15);
    }
    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--muted);
      font-size: 14px;
    }
    .catalog-status {
      font-size: 13px;
      color: var(--muted);
    }
    .catalog-status strong {
      color: var(--ink);
    }

    /* Product Cards Grid */
    .catalog-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }
    .product-card {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: var(--radius-md);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
    }
    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
    .card-photo-wrap {
      height: 240px;
      position: relative;
      overflow: hidden;
      background: #f0ebe2;
      cursor: pointer;
    }
    .card-photo-wrap img {
      transition: transform 0.5s ease;
    }
    .product-card:hover .card-photo-wrap img {
      transform: scale(1.08);
    }
    .card-category-pill {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 20px;
      backdrop-filter: blur(8px);
      background: rgba(30, 29, 26, 0.85);
      color: var(--gold-light);
      z-index: 2;
    }
    .card-zoom-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.25);
      display: grid;
      place-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .product-card:hover .card-zoom-overlay {
      opacity: 1;
    }
    .card-zoom-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #fff;
      color: var(--ink);
      display: grid;
      place-items: center;
      font-size: 18px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.2);
      transform: scale(0.85);
      transition: transform 0.2s ease;
    }
    .product-card:hover .card-zoom-btn {
      transform: scale(1);
    }

    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .card-title {
      font-size: 14.5px;
      font-weight: 700;
      color: var(--ink);
      line-height: 1.35;
      margin-bottom: 4px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-title-hi {
      font-size: 12.5px;
      color: var(--gold-dark);
      font-weight: 600;
      margin-bottom: 14px;
      display: block;
      font-family: 'Rozha One', 'DM Sans', serif;
    }
    .card-footer {
      margin-top: auto;
      display: flex;
      gap: 8px;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid var(--line-subtle);
    }
    .card-wa-btn {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background: var(--whatsapp);
      color: #fff;
      padding: 9px 12px;
      border-radius: var(--radius-sm);
      font-size: 12px;
      font-weight: 700;
      transition: all 0.2s;
    }
    .card-wa-btn:hover {
      background: var(--whatsapp-dark);
    }
    .card-view-btn {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-sm);
      background: var(--cream);
      border: 1px solid var(--line);
      color: var(--ink);
      display: grid;
      place-items: center;
      font-size: 16px;
      transition: all 0.2s;
    }
    .card-view-btn:hover {
      background: var(--gold-soft);
      border-color: var(--gold);
      color: var(--gold-dark);
    }

    /* Catalog Load More & Pagination */
    .catalog-pagination {
      text-align: center;
      margin-top: 10px;
    }
    .progress-bar-wrap {
      max-width: 320px;
      height: 4px;
      background: var(--line);
      border-radius: 4px;
      margin: 0 auto 16px;
      overflow: hidden;
    }
    .progress-bar-fill {
      height: 100%;
      background: var(--gold);
      transition: width 0.3s ease;
      width: 17%;
    }
    .pagination-actions {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    /* Lightbox Modal */
    .lightbox-modal {
      position: fixed;
      inset: 0;
      background: rgba(14, 13, 12, 0.94);
      backdrop-filter: blur(10px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .lightbox-modal.open {
      display: flex;
    }
    .lightbox-dialog {
      background: #fff;
      border-radius: var(--radius-lg);
      max-width: 950px;
      width: 100%;
      max-height: 90vh;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
      position: relative;
      animation: modalScale 0.25s ease-out;
    }
    @keyframes modalScale {
      from { transform: scale(0.92); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .lightbox-close-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.08);
      color: var(--ink);
      font-size: 20px;
      display: grid;
      place-items: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.2s;
    }
    .lightbox-close-btn:hover {
      background: var(--ink);
      color: #fff;
    }
    .lightbox-photo-pane {
      background: #0f0e0d;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 380px;
    }
    .lightbox-photo-pane img {
      max-height: 75vh;
      width: auto;
      max-width: 100%;
      object-fit: contain;
    }
    .lightbox-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 20px;
      cursor: pointer;
      backdrop-filter: blur(4px);
      transition: all 0.2s;
    }
    .lightbox-nav-btn:hover {
      background: rgba(255, 255, 255, 0.4);
    }
    .lightbox-nav-btn.prev { left: 12px; }
    .lightbox-nav-btn.next { right: 12px; }

    .lightbox-details-pane {
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-y: auto;
    }
    .lightbox-cat-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--gold-dark);
      margin-bottom: 6px;
    }
    .lightbox-title {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      line-height: 1.25;
      color: var(--ink);
      margin-bottom: 6px;
    }
    .lightbox-title-hi {
      font-size: 15px;
      color: var(--gold-dark);
      font-weight: 600;
      margin-bottom: 18px;
      display: block;
    }
    .lightbox-specs-table {
      font-size: 12.5px;
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
    }
    .lightbox-specs-table td {
      padding: 7px 0;
      border-bottom: 1px solid var(--line-subtle);
    }
    .lightbox-specs-table td:first-child {
      color: var(--muted);
      width: 40%;
    }
    .lightbox-specs-table td:last-child {
      font-weight: 600;
      color: var(--ink);
    }
    .lightbox-cta-block {
      margin-top: auto;
      padding-top: 18px;
      border-top: 1px solid var(--line);
    }

    /* Makrana Workshop Video Tour Section */
    .workshop-video-sec {
      background: linear-gradient(135deg, #24221c 0%, #151412 100%);
      color: #fff;
      padding: 75px 0;
    }
    .video-grid {
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      gap: 45px;
      align-items: center;
    }
    .video-copy .eyebrow {
      color: var(--gold-light);
    }
    .video-copy .eyebrow::before {
      background: var(--gold-light);
    }
    .video-copy .section-title {
      color: #fff;
    }
    .video-copy p {
      color: #b8b3a8;
      font-size: 15px;
      line-height: 1.7;
      margin-bottom: 24px;
    }
    .video-frame-wrap {
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 3px solid rgba(228, 188, 93, 0.4);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      background: #000;
      position: relative;
    }
    .video-frame-wrap video {
      width: 100%;
      height: 100%;
      display: block;
      max-height: 440px;
      object-fit: cover;
    }

    /* About Us Mosaic Section */
    .about-sec {
      background: #fff;
    }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.05fr;
      gap: 50px;
      align-items: center;
    }
    .about-mosaic {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      grid-template-rows: 190px 190px;
      gap: 12px;
    }
    .about-mosaic-card {
      border-radius: var(--radius-md);
      overflow: hidden;
      position: relative;
      box-shadow: var(--shadow-sm);
    }
    .about-mosaic-card.tall {
      grid-row: span 2;
    }
    .about-mosaic-card img {
      transition: transform 0.5s ease;
    }
    .about-mosaic-card:hover img {
      transform: scale(1.06);
    }
    .about-mosaic-tag {
      position: absolute;
      bottom: 12px;
      left: 12px;
      background: rgba(30, 29, 26, 0.8);
      backdrop-filter: blur(6px);
      color: #fff;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 4px;
      font-weight: 600;
    }

    /* Why Choose Us Section */
    .why-sec {
      background: var(--stone-bg);
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }
    .why-grid {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 50px;
      align-items: center;
    }
    .check-list {
      list-style: none;
      margin: 24px 0 30px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 14.5px;
      color: var(--ink-soft);
    }
    .check-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--gold-soft);
      border: 1px solid var(--gold-light);
      color: var(--gold-dark);
      display: grid;
      place-items: center;
      font-size: 13px;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .why-photos-cluster {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      height: 380px;
    }
    .why-photo-item {
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }
    .why-photo-item.full-height {
      height: 100%;
    }
    .why-photo-stack {
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 14px;
    }

    /* Custom Order Dimensions Tool */
    .custom-calc-sec {
      background: #fff;
    }
    .calc-box {
      background: linear-gradient(135deg, #fffbf2 0%, #f7f1e4 100%);
      border: 1px solid #ebd7af;
      border-radius: var(--radius-lg);
      padding: 40px clamp(24px, 4vw, 50px);
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 40px;
      align-items: center;
      box-shadow: var(--shadow-md);
    }
    .calc-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .calc-form .full {
      grid-column: span 2;
    }
    .calc-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .calc-group label {
      font-size: 12px;
      font-weight: 700;
      color: var(--ink-soft);
    }
    .calc-group input, .calc-group select, .calc-group textarea {
      padding: 11px 14px;
      border: 1px solid var(--line);
      border-radius: var(--radius-sm);
      font-size: 13px;
      font-family: inherit;
      background: #fff;
      color: var(--ink);
      outline: none;
    }
    .calc-group input:focus, .calc-group select:focus, .calc-group textarea:focus {
      border-color: var(--gold);
      box-shadow: 0 0 0 3px rgba(184, 139, 34, 0.15);
    }

    /* Contact Strip & CTA */
    .contact-sec {
      background: var(--ink);
      color: #fff;
      padding: 60px 0;
    }
    .cta-card {
      background: linear-gradient(135deg, #2b2823 0%, #1e1d1a 100%);
      border: 1px solid #454035;
      border-radius: var(--radius-lg);
      padding: 40px clamp(24px, 4vw, 48px);
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 36px;
      align-items: center;
    }
    .cta-left h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(26px, 3vw, 36px);
      line-height: 1.2;
      color: #fff;
      margin-bottom: 10px;
    }
    .cta-left p {
      color: #b5b0a3;
      font-size: 14.5px;
      margin-bottom: 20px;
    }
    .contact-cards-cluster {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .contact-info-card {
      display: flex;
      align-items: center;
      gap: 14px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 12px 18px;
      border-radius: var(--radius-sm);
      transition: background 0.2s;
    }
    .contact-info-card:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    .contact-info-card .icon {
      font-size: 22px;
      color: var(--gold-light);
    }
    .contact-info-card strong {
      display: block;
      font-size: 14px;
      color: #fff;
    }
    .contact-info-card span {
      font-size: 12px;
      color: #a8a296;
    }

    /* Footer */
    footer {
      background: #141311;
      color: #9c9689;
      padding: 60px 0 25px;
      font-size: 13px;
      border-top: 1px solid #292723;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
      gap: 36px;
      margin-bottom: 40px;
    }
    .footer-col h4 {
      color: #fff;
      font-size: 14.5px;
      font-weight: 700;
      margin-bottom: 16px;
      font-family: 'Playfair Display', serif;
      letter-spacing: 0.3px;
    }
    .footer-col p {
      line-height: 1.6;
      margin-bottom: 12px;
    }
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 9px;
    }
    .footer-links a {
      color: #aba598;
      transition: color 0.2s;
    }
    .footer-links a:hover {
      color: var(--gold-light);
    }
    .copyright-bar {
      border-top: 1px solid #24221d;
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 12px;
    }

    /* Floating WhatsApp Button */
    .floating-wa-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--whatsapp);
      color: #fff;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 30px;
      box-shadow: 0 10px 25px rgba(31, 157, 69, 0.4);
      z-index: 99;
      transition: all 0.3s ease;
      animation: pulseWa 2s infinite;
    }
    @keyframes pulseWa {
      0% { box-shadow: 0 0 0 0 rgba(31, 157, 69, 0.6); }
      70% { box-shadow: 0 0 0 16px rgba(31, 157, 69, 0); }
      100% { box-shadow: 0 0 0 0 rgba(31, 157, 69, 0); }
    }
    .floating-wa-btn:hover {
      transform: scale(1.08);
      background: var(--whatsapp-dark);
    }

    /* Mobile Sticky Bottom Action Bar */
    .mobile-bottom-bar {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      border-top: 1px solid var(--line);
      padding: 10px 16px;
      z-index: 98;
      box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.08);
      gap: 10px;
    }
    .mobile-bottom-bar a {
      flex: 1;
      padding: 11px 8px;
      font-size: 13px;
      font-weight: 700;
      border-radius: var(--radius-sm);
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    .mobile-btn-call {
      background: var(--gold-soft);
      color: var(--gold-dark);
      border: 1px solid var(--gold-light);
    }
    .mobile-btn-wa {
      background: var(--whatsapp);
      color: #fff;
    }

    /* Responsive Media Queries */
    @media (max-width: 1024px) {
      .catalog-grid { grid-template-columns: repeat(3, 1fr); }
      .spec-grid { grid-template-columns: repeat(2, 1fr); }
      .trust-grid { grid-template-columns: repeat(2, 1fr); }
      .trust-card:nth-child(2) { border-right: none; }
      .footer-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 820px) {
      .utility-bar { display: none; }
      .topbar-inner { height: 70px; }
      nav {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: #fff;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 2px solid var(--gold);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        gap: 16px;
      }
      body.nav-open nav { display: flex; }
      .menu-btn { display: block; }
      .nav-actions { margin-left: auto; }
      .btn-call { display: none; }

      .hero-grid { grid-template-columns: 1fr; gap: 30px; }
      .hero-showcase { aspect-ratio: 16 / 11; max-height: 380px; }
      .catalog-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
      .video-grid { grid-template-columns: 1fr; gap: 24px; }
      .about-grid { grid-template-columns: 1fr; gap: 30px; }
      .why-grid { grid-template-columns: 1fr; gap: 30px; }
      .calc-box { grid-template-columns: 1fr; }
      .cta-card { grid-template-columns: 1fr; gap: 24px; }
      .lightbox-dialog { grid-template-columns: 1fr; max-height: 95vh; }
      .lightbox-photo-pane { min-height: 260px; }
      .mobile-bottom-bar { display: flex; }
      .floating-wa-btn { bottom: 74px; }
      body { padding-bottom: 60px; }
    }

    @media (max-width: 540px) {
      .hero-h1 { font-size: 32px; }
      .catalog-grid { grid-template-columns: 1fr; }
      .card-photo-wrap { height: 260px; }
      .spec-grid { grid-template-columns: 1fr; }
      .calc-form { grid-template-columns: 1fr; }
      .calc-form .full { grid-column: span 1; }
      .trust-grid { grid-template-columns: 1fr; }
      .trust-card { border-right: none; border-bottom: 1px solid var(--line); padding-bottom: 12px; }
      .footer-grid { grid-template-columns: 1fr; }
      .brand-title { font-size: 20px; }
    }
  </style>
</head>
<body>

  <!-- Top Utility Bar -->
  <aside class="utility-bar" aria-label="Quick contact and location info">
    <div class="container utility-inner">
      <div class="utility-left">
        <span class="utility-badge">Makrana Direct Factory</span>
        <span>📍 Ganesh Colony, Makrana, Rajasthan 341505</span>
        <span>⏰ Mon - Sun: 8:00 AM – 7:30 PM</span>
      </div>
      <div class="utility-right">
        <a class="utility-link" href="tel:09606179869">📞 09606179869</a>
        <a class="utility-link" href="tel:09001003360">📞 09001003360</a>
        <a class="utility-link" href="https://wa.me/919606179869" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </div>
  </aside>

  <!-- Sticky Main Header -->
  <header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="#home">
        <span class="brand-title">Shree Shyam <span>Marble</span></span>
        <span class="brand-sub">Handicraft • Makrana (Raj.)</span>
      </a>

      <nav id="nav">
        <a href="#home">Home</a>
        <a href="#catalog">Collection (${catalogItems.length} Items)</a>
        <a href="#specialities">Specialities</a>
        <a href="#workshop">Workshop Video</a>
        <a href="#about">About Us</a>
        <a href="#why">Why Us</a>
        <a href="#custom-order">Custom Design</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="nav-actions">
        <a class="btn-call" href="tel:09606179869" title="Call Gopal Saini">
          <span>📞</span> Call: 09606179869
        </a>
        <a class="btn-wa-header" href="https://wa.me/919606179869?text=Hello%20Shree%20Shyam%20Marble%20Handicraft,%20I%20am%20visiting%20your%20website%20and%20interested%20in%20your%20Makrana%20marble%20products." target="_blank" rel="noopener">
          <span>💬</span> WhatsApp
        </a>
        <button class="menu-btn" id="menuBtn" aria-label="Toggle Navigation Menu">☰</button>
      </div>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero-section" id="home">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="hero-badge-pill">
              <span class="dot"></span>
              <span>100% Authentic Makrana White Marble (Sangemarmar)</span>
            </div>
            <h1 class="hero-h1">
              Divine Craftsmanship.<br>
              <em>Pure Makrana Marble</em> Heritage.
            </h1>
            <p class="hero-p">
              Direct manufacturer of handcrafted marble temples (mandirs), sanctified god idols, brass diyas, and bespoke stone artifacts. Hand-carved in Makrana with lifelong purity and devotion.
            </p>
            <div class="hero-actions">
              <a class="btn" href="#catalog">
                <span>View Full Catalog (${catalogItems.length} Designs)</span>
                <span>↓</span>
              </a>
              <a class="btn whatsapp" href="https://wa.me/919606179869?text=Hello%20Gopal%20Ji,%20I%20want%20to%20enquire%20about%20custom%20Makrana%20marble%20work." target="_blank" rel="noopener">
                <span>💬</span> WhatsApp Enquiry
              </a>
            </div>
            <div class="hero-meta">
              <div class="hero-meta-item">
                <strong>10+ Years</strong>
                <span>Artisan Experience</span>
              </div>
              <div class="hero-meta-item">
                <strong>100% Pure</strong>
                <span>Makrana White Stone</span>
              </div>
              <div class="hero-meta-item">
                <strong>Pan-India</strong>
                <span>Safe Delivery & Packing</span>
              </div>
              <div class="hero-meta-item">
                <strong>Factory Rates</strong>
                <span>No Middlemen</span>
              </div>
            </div>
          </div>

          <!-- Hero Slider Showcase with Real Photos -->
          <div class="hero-showcase">
            <!-- Slide 1: Grand Luxury Mandir -->
            <div class="hero-slide active" data-index="0">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.50%20PM%20(1).jpeg" alt="Makrana Marble Mandir Grand Luxury Handcrafted SSMH">
              <div class="hero-slide-caption">
                <div>
                  <span class="hero-slide-tag">Masterpiece Temple</span>
                  <div class="hero-slide-title">Luxury Makrana Marble Mandir (SSMH)</div>
                </div>
                <span class="hero-slide-badge">Exclusive Handwork</span>
              </div>
            </div>

            <!-- Slide 2: Khatu Shyam Ji Murti -->
            <div class="hero-slide" data-index="1">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.49%20PM.jpeg" alt="Shree Khatu Shyam Ji Marble Murti">
              <div class="hero-slide-caption">
                <div>
                  <span class="hero-slide-tag">Divine Idols</span>
                  <div class="hero-slide-title">Shree Khatu Shyam Ji Sacred Murti</div>
                </div>
                <span class="hero-slide-badge">24K Gold Detailing</span>
              </div>
            </div>

            <!-- Slide 3: 4-Tier Water Fountain -->
            <div class="hero-slide" data-index="2">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.37%20PM.jpeg" alt="4-Tier Handcrafted Marble Water Fountain">
              <div class="hero-slide-caption">
                <div>
                  <span class="hero-slide-tag">Heritage Stone Decor</span>
                  <div class="hero-slide-title">4-Tier Makrana Marble Water Fountain</div>
                </div>
                <span class="hero-slide-badge">Hand-turned Stone</span>
              </div>
            </div>

            <!-- Slide 4: Bal Gopal Marble Jhula -->
            <div class="hero-slide" data-index="3">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.47%20PM%20(1).jpeg" alt="Laddu Gopal Marble Jhula">
              <div class="hero-slide-caption">
                <div>
                  <span class="hero-slide-tag">Pooja Handicraft</span>
                  <div class="hero-slide-title">Hand-carved Laddu Gopal Jhula</div>
                </div>
                <span class="hero-slide-badge">Pooja Sacred</span>
              </div>
            </div>

            <!-- Slide 5: Brass Marble Diya Set -->
            <div class="hero-slide" data-index="4">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.53%20PM%20(1).jpeg" alt="Twin Brass & Marble Lotus Diya Set">
              <div class="hero-slide-caption">
                <div>
                  <span class="hero-slide-tag">Auspicious Deepam</span>
                  <div class="hero-slide-title">Twin Brass & White Marble Lotus Diya</div>
                </div>
                <span class="hero-slide-badge">Solid Brass Cup</span>
              </div>
            </div>

            <div class="slider-dots" id="heroSliderDots"></div>
          </div>
        </div>

        <!-- Verified Credibility Card -->
        <div class="verified-banner">
          <div class="verified-left">
            <span class="verified-name">Shree Shyam Marble Handicraft</span>
            <span class="verified-badge">✔ Verified Manufacturer</span>
            <div class="verified-info-pills">
              <span>★ 4.8 / 5 Rating</span>
              <span>• Proprietor: Gopal Saini (गोपाल सैनी)</span>
              <span>• ⌖ Ganesh Colony, Makrana</span>
              <span>• 🟢 Open until 7:30 PM</span>
            </div>
          </div>
          <div class="verified-right">
            <a class="btn sm" href="tel:09606179869">☎ 09606179869</a>
            <a class="btn sm whatsapp" href="https://wa.me/919606179869" target="_blank" rel="noopener">WhatsApp Direct</a>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST STRIP -->
    <div class="trust-strip">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-card">
            <div class="trust-icon-box">🏛</div>
            <div>
              <h4>Authentic Makrana Marble</h4>
              <p>Direct from Makrana mines; highest quality white marble with no color fading.</p>
            </div>
          </div>
          <div class="trust-card">
            <div class="trust-icon-box">✍️</div>
            <div>
              <h4>Master Stone Artisans</h4>
              <p>Generations of hand-carving tradition preserving sacred shilpa shastra norms.</p>
            </div>
          </div>
          <div class="trust-card">
            <div class="trust-icon-box">📦</div>
            <div>
              <h4>Safe Wooden Crate Packing</h4>
              <p>Heavy duty multi-layer foam & wooden crate packing for zero-damage transit.</p>
            </div>
          </div>
          <div class="trust-card">
            <div class="trust-icon-box">📐</div>
            <div>
              <h4>Custom Dimensions & Sizes</h4>
              <p>Tailored heights, pillars, domes, and engravings exactly for your home.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SPECIALITIES / SERVICES SECTION -->
    <section class="specialities-sec" id="specialities">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Our Hallmark Offerings</span>
          <h2 class="section-title">Handcrafted Specialties</h2>
          <p class="section-copy">
            Each creation is sculpted from premium Makrana marble, finished with precision detailing and delivered directly from our workshop.
          </p>
        </div>

        <div class="spec-grid">
          <article class="spec-card">
            <div class="spec-photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.39%20PM.jpeg" alt="Marble Mandir Makrana" loading="lazy">
              <span class="spec-tag">Home Temples</span>
            </div>
            <div class="spec-content">
              <h3>Makrana Marble Mandir</h3>
              <p>Intricate jali work, lotus domes, pillars, sanctum shikhars and ledges customized for home prayer corners.</p>
              <a class="spec-link" href="#catalog" onclick="filterCategory('mandir')">Explore Temples (${catalogItems.filter(x => x.cat === 'mandir').length}) →</a>
            </div>
          </article>

          <article class="spec-card">
            <div class="spec-photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.42%20PM.jpeg" alt="Makrana God Idols Murtis" loading="lazy">
              <span class="spec-tag">Devotional Idols</span>
            </div>
            <div class="spec-content">
              <h3>Sanctified Deities & Murtis</h3>
              <p>Shree Khatu Shyam Ji, Ganesh Ji, Maa Durga, Shivling, Krishna Ji, and customized portrait statues with 24K gold work.</p>
              <a class="spec-link" href="#catalog" onclick="filterCategory('murti')">Explore Idols (${catalogItems.filter(x => x.cat === 'murti').length}) →</a>
            </div>
          </article>

          <article class="spec-card">
            <div class="spec-photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.54%20PM.jpeg" alt="Brass Inlaid Marble Diyas" loading="lazy">
              <span class="spec-tag">Deepam & Diyas</span>
            </div>
            <div class="spec-content">
              <h3>Brass-Inlaid Marble Diyas</h3>
              <p>Exquisite solid brass oil insert cups embedded into hand-shaped marble: Swastik, Lotus, Star, and Teardrop designs.</p>
              <a class="spec-link" href="#catalog" onclick="filterCategory('diya')">Explore Diyas (${catalogItems.filter(x => x.cat === 'diya').length}) →</a>
            </div>
          </article>

          <article class="spec-card">
            <div class="spec-photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.38%20PM.jpeg" alt="Marble Decor & Utensils" loading="lazy">
              <span class="spec-tag">Stone Decor</span>
            </div>
            <div class="spec-content">
              <h3>Fountains & Home Decor</h3>
              <p>Multi-tier garden fountains, Ayurvedic Kharal (mortar & pestle), Chakla Belan, and luxury stone living room centerpieces.</p>
              <a class="spec-link" href="#catalog" onclick="filterCategory('decor')">Explore Decor (${catalogItems.filter(x => x.cat === 'decor').length}) →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- LIVE INTERACTIVE MASTER CATALOG (ALL 91 IMAGES CATEGORIZED) -->
    <section class="catalog-sec" id="catalog">
      <div class="container">
        <div class="catalog-header-bar">
          <div>
            <span class="eyebrow">Full Factory Collection</span>
            <h2 class="section-title">Master Product Catalog (${catalogItems.length} Handcrafted Designs)</h2>
            <p class="section-copy" style="max-width: 600px;">
              All items are manufactured in Makrana. Click any design to view high-resolution details or send an instant WhatsApp inquiry with prefilled model info.
            </p>
          </div>
          <div>
            <a class="btn whatsapp" href="https://wa.me/919606179869?text=Hello%20Shree%20Shyam%20Marble,%20please%20send%20me%20your%20complete%20PDF%20catalog%20and%20price%20list." target="_blank" rel="noopener">
              <span>📄</span> Request Price List PDF
            </a>
          </div>
        </div>

        <!-- Category Filter Tabs with Dynamic Badges -->
        <div class="catalog-filter-tabs">
          <button class="filter-btn active" data-cat="all" onclick="filterCategory('all')">
            <span>All Creations</span>
            <span class="filter-count" id="count-all">${catalogItems.length}</span>
          </button>
          <button class="filter-btn" data-cat="mandir" onclick="filterCategory('mandir')">
            <span>Mandir & Temples</span>
            <span class="filter-count" id="count-mandir">${catalogItems.filter(x => x.cat === 'mandir').length}</span>
          </button>
          <button class="filter-btn" data-cat="murti" onclick="filterCategory('murti')">
            <span>Murtis & Idols</span>
            <span class="filter-count" id="count-murti">${catalogItems.filter(x => x.cat === 'murti').length}</span>
          </button>
          <button class="filter-btn" data-cat="diya" onclick="filterCategory('diya')">
            <span>Brass Marble Diyas</span>
            <span class="filter-count" id="count-diya">${catalogItems.filter(x => x.cat === 'diya').length}</span>
          </button>
          <button class="filter-btn" data-cat="pooja" onclick="filterCategory('pooja')">
            <span>Pooja Samagri & Tulsi</span>
            <span class="filter-count" id="count-pooja">${catalogItems.filter(x => x.cat === 'pooja').length}</span>
          </button>
          <button class="filter-btn" data-cat="decor" onclick="filterCategory('decor')">
            <span>Fountains & Decor</span>
            <span class="filter-count" id="count-decor">${catalogItems.filter(x => x.cat === 'decor').length}</span>
          </button>
        </div>

        <!-- Search & Status Control Bar -->
        <div class="catalog-controls">
          <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input type="text" id="searchInput" placeholder="Search by name, idol, temple, diya, or fountain..." oninput="handleSearch(this.value)">
          </div>
          <div class="catalog-status">
            Showing <strong id="displayedCount">16</strong> of <strong id="totalCategoryCount">${catalogItems.length}</strong> items
          </div>
        </div>

        <!-- Master Dynamic Grid -->
        <div class="catalog-grid" id="catalogGrid">
          <!-- Dynamically populated by JavaScript -->
        </div>

        <!-- Load More & Pagination -->
        <div class="catalog-pagination">
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" id="progressBarFill"></div>
          </div>
          <div class="pagination-actions">
            <button class="btn sm" id="loadMoreBtn" onclick="loadMoreItems()">
              <span>Load More Designs (+16)</span>
            </button>
            <button class="btn sm outline" id="showAllBtn" onclick="showAllItems()">
              <span>Show All Designs (${catalogItems.length})</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- WORKSHOP VIDEO TOUR SECTION -->
    <section class="workshop-video-sec" id="workshop">
      <div class="container">
        <div class="video-grid">
          <div class="video-copy">
            <span class="eyebrow">Direct From Our Makrana Factory</span>
            <h2 class="section-title">See The Artisans at Work</h2>
            <p>
              Witness authentic hand-carving in our Makrana workshop. From raw block grading to fine diamond chiseled relief, hand polishing, and brass embedding, every stage is executed by master craftsmen who have practiced stone art for over a decade.
            </p>
            <div style="display: flex; gap: 20px; margin-bottom: 24px; font-size: 13px;">
              <div>
                <strong style="color: var(--gold-light); font-size: 20px; display: block;">Makrana</strong>
                <span>Direct Mining Hub</span>
              </div>
              <div>
                <strong style="color: var(--gold-light); font-size: 20px; display: block;">100% Solid</strong>
                <span>Natural Sangemarmar</span>
              </div>
              <div>
                <strong style="color: var(--gold-light); font-size: 20px; display: block;">Gopal Saini</strong>
                <span>Master Overseer</span>
              </div>
            </div>
            <a class="btn whatsapp" href="https://wa.me/919606179869?text=Hello%20Gopal%20Ji,%20I%20saw%20your%20workshop%20video%20and%20want%20to%20visit%20or%20place%20a%20factory%20order." target="_blank" rel="noopener">
              <span>📍</span> Visit Our Makrana Workshop
            </a>
          </div>

          <div class="video-frame-wrap">
            <video controls preload="metadata" poster="images/WhatsApp%20Image%202026-10-20%20at%203.14.50%20PM%20(1).jpeg">
              <source src="images/WhatsApp%20Video%202026-10-20%20at%203.15.04%20PM.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT US MOSAIC SECTION -->
    <section class="about-sec" id="about">
      <div class="container">
        <div class="about-grid">
          <div>
            <span class="eyebrow">Our Heritage & Devotion</span>
            <h2 class="section-title">Rooted in Makrana’s Timeless Stone Tradition</h2>
            <p class="section-copy" style="margin-bottom: 18px;">
              Makrana marble is celebrated across the world as the stone of the Taj Mahal and sacred sanctums. At <strong>Shree Shyam Marble Handicraft</strong>, led by Gopal Saini, we carry forward this legacy from Ganesh Colony, Makrana.
            </p>
            <p class="section-copy" style="margin-bottom: 24px;">
              Unlike composite or reconstituted stones, we work exclusively with 100% natural pure white Makrana marble. Our temples, divine idols, and brass diyas are created to endure for generations without yellowing or cracking.
            </p>
            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a class="btn" href="#catalog">Explore All Designs →</a>
              <a class="btn outline" href="tel:09606179869">Speak to Proprietor</a>
            </div>
          </div>

          <div class="about-mosaic">
            <div class="about-mosaic-card tall">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.40%20PM.jpeg" alt="Hand-Painted Traditional Home Temple SSMH" loading="lazy">
              <span class="about-mosaic-tag">Handcrafted Temple</span>
            </div>
            <div class="about-mosaic-card">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.46%20PM.jpeg" alt="Lotus Shikhara Marble Temple" loading="lazy">
              <span class="about-mosaic-tag">Lotus Dome Shikhara</span>
            </div>
            <div class="about-mosaic-card">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.07%20PM.jpeg" alt="Pure White Makrana Marble Tulsi Chaura" loading="lazy">
              <span class="about-mosaic-tag">Makrana Tulsi Chaura</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="why-sec" id="why">
      <div class="container">
        <div class="why-grid">
          <div>
            <span class="eyebrow">The SSMH Distinction</span>
            <h2 class="section-title">Why Patrons Across India Choose Shree Shyam Marble</h2>
            <p class="section-copy">
              From individual homes designing their dream pooja room to temple committees and decor architects, our attention to proportion and quality sets us apart.
            </p>

            <ul class="check-list">
              <li class="check-item">
                <span class="check-icon">✓</span>
                <div>
                  <strong>Authentic Makrana Stone Selection:</strong> Graded for pure white consistency, natural veins, and zero porous defects.
                </div>
              </li>
              <li class="check-item">
                <span class="check-icon">✓</span>
                <div>
                  <strong>Direct Factory Pricing:</strong> No retailer markup; you deal directly with the artisan manufacturer in Makrana.
                </div>
              </li>
              <li class="check-item">
                <span class="check-icon">✓</span>
                <div>
                  <strong>Custom Architectural Drawings:</strong> We carve temples and statues to your exact custom height, width, and depth.
                </div>
              </li>
              <li class="check-item">
                <span class="check-icon">✓</span>
                <div>
                  <strong>Secure Pan-India Shipping:</strong> Every piece is packed in reinforced multi-layer wooden crates with full transit safety.
                </div>
              </li>
            </ul>

            <a class="btn whatsapp" href="https://wa.me/919606179869?text=Hello,%20I%20want%20to%20discuss%20a%20custom%20marble%20mandir%20or%20murti%20order." target="_blank" rel="noopener">
              <span>💬</span> Consult on WhatsApp
            </a>
          </div>

          <div class="why-photos-cluster">
            <div class="why-photo-item full-height">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.39%20PM%20(1).jpeg" alt="Royal Singhasan Ganesha Marble Idol" loading="lazy">
            </div>
            <div class="why-photo-stack">
              <div class="why-photo-item">
                <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.56%20PM.jpeg" alt="Swastika-Curved Hand-Cut Marble Diya" loading="lazy">
              </div>
              <div class="why-photo-item">
                <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.17%20PM.jpeg" alt="Pure White Makrana Marble Ayurvedic Kharal" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CUSTOM ORDER DIMENSIONS TOOL -->
    <section class="custom-calc-sec" id="custom-order">
      <div class="container">
        <div class="calc-box">
          <div>
            <span class="eyebrow">Custom Tailoring</span>
            <h2 class="section-title">Design Your Custom Marble Creation</h2>
            <p class="section-copy" style="margin-bottom: 20px;">
              Have specific dimensions for your home mandir or temple altar? Fill in your required size and details, and our proprietor will connect on WhatsApp with exact quotation and design sketches.
            </p>
            <div style="font-size: 13px; color: var(--muted); line-height: 1.6;">
              <p>✔ Mandir heights from 1.5 ft to 12+ ft</p>
              <p>✔ Murtis from 6 inches to 6+ ft</p>
              <p>✔ Bulk brass-diya gift sets available</p>
            </div>
          </div>

          <form class="calc-form" onsubmit="submitCustomOrder(event)">
            <div class="calc-group">
              <label for="custName">Your Name *</label>
              <input type="text" id="custName" placeholder="e.g. Rajesh Sharma" required>
            </div>
            <div class="calc-group">
              <label for="custPhone">Phone / WhatsApp *</label>
              <input type="tel" id="custPhone" placeholder="e.g. 98XXXXXXXX" required>
            </div>
            <div class="calc-group">
              <label for="custCategory">Product Category</label>
              <select id="custCategory">
                <option value="Marble Mandir (Temple)">Marble Mandir (Temple)</option>
                <option value="God Idol (Murti)">God Idol (Murti)</option>
                <option value="Brass Inlaid Marble Diya (Bulk/Single)">Brass Inlaid Marble Diya</option>
                <option value="Tulsi Chauras / Kyaram">Tulsi Chauras / Kyaram</option>
                <option value="Water Fountain / Home Decor">Water Fountain / Home Decor</option>
                <option value="Other Custom Stone Work">Other Custom Stone Work</option>
              </select>
            </div>
            <div class="calc-group">
              <label for="custDimensions">Dimensions (H × W × D)</label>
              <input type="text" id="custDimensions" placeholder="e.g. 5 ft Height × 3 ft Width">
            </div>
            <div class="calc-group full">
              <label for="custNotes">Special Details / Requirements</label>
              <textarea id="custNotes" rows="3" placeholder="Tell us if you need pillars, jali work, specific deity, dome styles, or city delivery..."></textarea>
            </div>
            <div class="full">
              <button type="submit" class="btn whatsapp" style="width: 100%;">
                <span>💬</span> Send Custom Specs to WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- CONTACT STRIP SECTION -->
    <section class="contact-sec" id="contact">
      <div class="container">
        <div class="cta-card">
          <div class="cta-left">
            <span class="eyebrow" style="color: var(--gold-light);">Get In Touch Directly</span>
            <h2>Visit Our Makrana Workshop or Call Today</h2>
            <p>
              Gopal Saini (Proprietor) is directly available to guide you on stone selection, auspicious sizing, and dispatch schedules.
            </p>
            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a class="btn" href="tel:09606179869">📞 Call: 09606179869</a>
              <a class="btn outline" style="color:#fff; border-color:rgba(255,255,255,0.3);" href="https://www.google.com/maps/search/?api=1&query=Ganesh+Colony+Makrana+Rajasthan" target="_blank" rel="noopener">
                📍 Get Directions
              </a>
            </div>
          </div>

          <div class="contact-cards-cluster">
            <a class="contact-info-card" href="tel:09606179869">
              <span class="icon">📞</span>
              <div>
                <strong>Call Gopal Saini</strong>
                <span>+91 96061 79869 / +91 90010 03360</span>
              </div>
            </a>
            <a class="contact-info-card" href="https://wa.me/919606179869" target="_blank" rel="noopener">
              <span class="icon">💬</span>
              <div>
                <strong>WhatsApp Chat</strong>
                <span>Instant response with photos & catalog</span>
              </div>
            </a>
            <div class="contact-info-card">
              <span class="icon">⌖</span>
              <div>
                <strong>Workshop Location</strong>
                <span>Ganesh Colony, Makrana, Rajasthan 341505</span>
              </div>
            </div>
            <div class="contact-info-card">
              <span class="icon">⏰</span>
              <div>
                <strong>Working Hours</strong>
                <span>Monday – Sunday: 8:00 AM – 7:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 style="font-size: 20px;">Shree Shyam <span style="color:var(--gold-light)">Marble</span></h4>
          <p>
            Direct manufacturer of authentic Makrana white marble temples, divine sculptures, brass diyas, and bespoke stone artifacts. Handcrafted with devotion in Makrana, Rajasthan.
          </p>
          <p style="color: #dfdbd3;">
            Proprietor: Gopal Saini (गोपाल सैनी)<br>
            Ganesh Colony, Makrana, Rajasthan 341505
          </p>
        </div>

        <div class="footer-col">
          <h4>Category Links</h4>
          <ul class="footer-links">
            <li><a href="#catalog" onclick="filterCategory('mandir')">Makrana Marble Mandirs (${catalogItems.filter(x => x.cat === 'mandir').length})</a></li>
            <li><a href="#catalog" onclick="filterCategory('murti')">Sanctified God Murtis (${catalogItems.filter(x => x.cat === 'murti').length})</a></li>
            <li><a href="#catalog" onclick="filterCategory('diya')">Brass-Inlaid Marble Diyas (${catalogItems.filter(x => x.cat === 'diya').length})</a></li>
            <li><a href="#catalog" onclick="filterCategory('pooja')">Pooja Samagri & Tulsi (${catalogItems.filter(x => x.cat === 'pooja').length})</a></li>
            <li><a href="#catalog" onclick="filterCategory('decor')">Fountains & Stone Decor (${catalogItems.filter(x => x.cat === 'decor').length})</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Quick Navigation</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#catalog">Full Catalog (${catalogItems.length} Items)</a></li>
            <li><a href="#workshop">Workshop Video Tour</a></li>
            <li><a href="#about">About Our Heritage</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#custom-order">Custom Dimensions</a></li>
            <li><a href="#contact">Contact & Map</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Direct Contact</h4>
          <p><strong>Primary:</strong> <a href="tel:09606179869" style="color:var(--gold-light)">09606179869</a></p>
          <p><strong>Secondary:</strong> <a href="tel:09001003360" style="color:var(--gold-light)">09001003360</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/919606179869" target="_blank" rel="noopener" style="color:#25d366">+91 96061 79869</a></p>
          <p><strong>Location:</strong> Ganesh Colony, Makrana</p>
        </div>
      </div>

      <div class="copyright-bar">
        <div>
          © <span id="currentYear"></span> Shree Shyam Marble Handicraft. All rights reserved.
        </div>
        <div>
          Handcrafted in Makrana, Rajasthan • Direct Factory
        </div>
      </div>
    </div>
  </footer>

  <!-- LIGHTBOX MODAL -->
  <div class="lightbox-modal" id="lightboxModal" onclick="handleLightboxBackdrop(event)">
    <div class="lightbox-dialog" onclick="event.stopPropagation()">
      <button class="lightbox-close-btn" onclick="closeLightbox()" title="Close (Esc)">✕</button>

      <div class="lightbox-photo-pane">
        <button class="lightbox-nav-btn prev" onclick="prevLightbox(event)" title="Previous (Left Arrow)">❮</button>
        <img id="lightboxImg" src="" alt="Enlarged Marble Product">
        <button class="lightbox-nav-btn next" onclick="nextLightbox(event)" title="Next (Right Arrow)">❯</button>
      </div>

      <div class="lightbox-details-pane">
        <div>
          <span class="lightbox-cat-badge" id="lightboxCat">Handcrafted Marble</span>
          <h3 class="lightbox-title" id="lightboxTitle">Product Title</h3>
          <span class="lightbox-title-hi" id="lightboxTitleHi">उत्पाद नाम</span>

          <table class="lightbox-specs-table">
            <tbody>
              <tr>
                <td>Material:</td>
                <td>100% Pure Makrana White Marble</td>
              </tr>
              <tr>
                <td>Finish:</td>
                <td>Hand-carved & Diamond Polished</td>
              </tr>
              <tr>
                <td>Origin:</td>
                <td>Makrana, Rajasthan (Direct Factory)</td>
              </tr>
              <tr>
                <td>Custom Sizes:</td>
                <td>Available on custom request</td>
              </tr>
              <tr>
                <td>Packing:</td>
                <td>Export-grade Wooden Crate with Foam</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="lightbox-cta-block">
          <a class="btn whatsapp" id="lightboxWhatsappBtn" href="#" target="_blank" rel="noopener" style="width: 100%;">
            <span>💬</span> Enquire on WhatsApp with Photo
          </a>
          <div style="font-size: 11.5px; color: var(--muted); text-align: center; margin-top: 8px;">
            Direct factory pricing • Fast response from Gopal Saini
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FLOATING WHATSAPP BUTTON -->
  <a class="floating-wa-btn" href="https://wa.me/919606179869?text=Hello%20Shree%20Shyam%20Marble%20Handicraft,%20I%20want%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener" title="Chat on WhatsApp">
    💬
  </a>

  <!-- MOBILE STICKY BOTTOM BAR -->
  <div class="mobile-bottom-bar">
    <a class="mobile-btn-call" href="tel:09606179869">
      <span>📞</span> Call Factory
    </a>
    <a class="mobile-btn-wa" href="https://wa.me/919606179869?text=Hello%20Shree%20Shyam%20Marble%20Handicraft,%20I%20am%20interested%20in%20your%20marble%20products." target="_blank" rel="noopener">
      <span>💬</span> WhatsApp
    </a>
  </div>

  <!-- CATALOG DATA SCRIPT -->
  <script id="catalogData" type="application/json">
${JSON.stringify(catalogItems, null, 2)}
  </script>

  <!-- CLIENT-SIDE INTERACTIVITY SCRIPT -->
  <script>
    const CATALOG_DATA = JSON.parse(document.getElementById('catalogData').textContent);

    const CATEGORY_NAMES = {
      mandir: 'Makrana Mandir',
      murti: 'God Idols & Murtis',
      diya: 'Brass Marble Diya',
      pooja: 'Pooja Samagri',
      decor: 'Stone Decor & Fountains'
    };

    let activeCategory = 'all';
    let searchQuery = '';
    let filteredItems = [...CATALOG_DATA];
    let displayedCount = 16;
    const PAGE_SIZE = 16;
    let currentLightboxIndex = 0;

    // Filter by Category
    function filterCategory(cat) {
      activeCategory = cat;
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === cat);
      });
      displayedCount = PAGE_SIZE;
      applyFilters();
    }

    // Search Input Handler
    function handleSearch(val) {
      searchQuery = val.trim().toLowerCase();
      displayedCount = PAGE_SIZE;
      applyFilters();
    }

    // Apply Filter & Search Logic
    function applyFilters() {
      filteredItems = CATALOG_DATA.filter(item => {
        const matchesCat = (activeCategory === 'all' || item.cat === activeCategory);
        if (!matchesCat) return false;

        if (!searchQuery) return true;
        const q = searchQuery;
        return (
          item.title.toLowerCase().includes(q) ||
          item.titleHi.includes(q) ||
          (CATEGORY_NAMES[item.cat] && CATEGORY_NAMES[item.cat].toLowerCase().includes(q))
        );
      });

      renderCatalog();
    }

    // Render Catalog Grid
    function renderCatalog() {
      const grid = document.getElementById('catalogGrid');
      const progressBarFill = document.getElementById('progressBarFill');

      const itemsToShow = filteredItems.slice(0, displayedCount);

      document.getElementById('displayedCount').textContent = itemsToShow.length;
      document.getElementById('totalCategoryCount').textContent = filteredItems.length;

      const pct = filteredItems.length > 0 ? (itemsToShow.length / filteredItems.length) * 100 : 0;
      progressBarFill.style.width = pct + '%';

      if (itemsToShow.length >= filteredItems.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
        document.getElementById('showAllBtn').style.display = 'none';
      } else {
        document.getElementById('loadMoreBtn').style.display = 'inline-flex';
        document.getElementById('showAllBtn').style.display = 'inline-flex';
      }

      if (filteredItems.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 14px; border: 1px dashed var(--line);">' +
          '<div style="font-size: 40px; margin-bottom: 12px;">🔍</div>' +
          '<h3 style="font-size: 18px; margin-bottom: 8px;">No matching items found</h3>' +
          '<p style="font-size: 13px; color: var(--muted); margin-bottom: 16px;">Try adjusting your search terms or selecting another category.</p>' +
          '<button class="btn sm" onclick="filterCategory(\\'all\\'); document.getElementById(\\'searchInput\\').value = \\'\\'; searchQuery = \\'\\'; applyFilters();">Show All Products</button>' +
          '</div>';
        return;
      }

      grid.innerHTML = itemsToShow.map(function(item, idx) {
        var encodedFile = encodeURI('images/' + item.file);
        var catName = CATEGORY_NAMES[item.cat] || 'Handicraft';
        var waMsg = encodeURIComponent('Hello Shree Shyam Marble Handicraft, I want to enquire about "' + item.title + '" (' + item.titleHi + '). Please share size options and price.');

        return '<article class="product-card">' +
          '<div class="card-photo-wrap" onclick="openLightbox(' + idx + ')">' +
            '<span class="card-category-pill">' + catName + '</span>' +
            '<img src="' + encodedFile + '" alt="' + item.title + '" loading="lazy">' +
            '<div class="card-zoom-overlay">' +
              '<span class="card-zoom-btn" title="View Full Photo">🔍</span>' +
            '</div>' +
          '</div>' +
          '<div class="card-body">' +
            '<h3 class="card-title" title="' + item.title + '">' + item.title + '</h3>' +
            '<span class="card-title-hi">' + item.titleHi + '</span>' +
            '<div class="card-footer">' +
              '<a class="card-wa-btn" href="https://wa.me/919606179869?text=' + waMsg + '" target="_blank" rel="noopener">' +
                '<span>💬</span> WhatsApp' +
              '</a>' +
              '<button class="card-view-btn" onclick="openLightbox(' + idx + ')" title="Enlarge & Details">' +
                '⤢' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</article>';
      }).join('');
    }

    function loadMoreItems() {
      displayedCount += PAGE_SIZE;
      renderCatalog();
    }

    function showAllItems() {
      displayedCount = filteredItems.length;
      renderCatalog();
    }

    // Lightbox Controls
    function openLightbox(index) {
      currentLightboxIndex = index;
      var item = filteredItems[index];
      if (!item) return;

      var modal = document.getElementById('lightboxModal');
      var img = document.getElementById('lightboxImg');
      var catEl = document.getElementById('lightboxCat');
      var titleEl = document.getElementById('lightboxTitle');
      var titleHiEl = document.getElementById('lightboxTitleHi');
      var waBtn = document.getElementById('lightboxWhatsappBtn');

      img.src = encodeURI('images/' + item.file);
      img.alt = item.title;
      catEl.textContent = CATEGORY_NAMES[item.cat] || 'Handcrafted Marble';
      titleEl.textContent = item.title;
      titleHiEl.textContent = item.titleHi;

      var waMsg = encodeURIComponent('Hello Shree Shyam Marble Handicraft, I am interested in "' + item.title + '" (' + item.titleHi + '). Please share available sizes, pricing and delivery details.');
      waBtn.href = 'https://wa.me/919606179869?text=' + waMsg;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      var modal = document.getElementById('lightboxModal');
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    function handleLightboxBackdrop(e) {
      if (e.target.id === 'lightboxModal') {
        closeLightbox();
      }
    }

    function nextLightbox(e) {
      if (e) e.stopPropagation();
      if (filteredItems.length === 0) return;
      currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
      openLightbox(currentLightboxIndex);
    }

    function prevLightbox(e) {
      if (e) e.stopPropagation();
      if (filteredItems.length === 0) return;
      currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      openLightbox(currentLightboxIndex);
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
      var modal = document.getElementById('lightboxModal');
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    });

    // Hero Slider Auto-rotation
    var currentHeroSlide = 0;
    var heroSlides = document.querySelectorAll('.hero-slide');
    var sliderDotsContainer = document.getElementById('heroSliderDots');

    function initHeroSlider() {
      heroSlides.forEach(function(_, i) {
        var dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', function() { setHeroSlide(i); });
        sliderDotsContainer.appendChild(dot);
      });

      setInterval(function() {
        setHeroSlide((currentHeroSlide + 1) % heroSlides.length);
      }, 4500);
    }

    function setHeroSlide(idx) {
      currentHeroSlide = idx;
      heroSlides.forEach(function(slide, i) {
        slide.classList.toggle('active', i === idx);
      });
      sliderDotsContainer.querySelectorAll('.slider-dot').forEach(function(dot, i) {
        dot.classList.toggle('active', i === idx);
      });
    }

    // Custom Order Submission
    function submitCustomOrder(e) {
      e.preventDefault();
      var name = document.getElementById('custName').value.trim();
      var phone = document.getElementById('custPhone').value.trim();
      var category = document.getElementById('custCategory').value;
      var dimensions = document.getElementById('custDimensions').value.trim();
      var notes = document.getElementById('custNotes').value.trim();

      var text = 'Hello Shree Shyam Marble Handicraft,\\n' +
        'I am submitting a custom enquiry from your website:\\n' +
        '*Name:* ' + name + '\\n' +
        '*Phone:* ' + phone + '\\n' +
        '*Product:* ' + category + '\\n' +
        '*Dimensions:* ' + (dimensions || 'Standard/Flexible') + '\\n' +
        '*Details:* ' + (notes || 'Please share design options and factory quotation.');

      var url = 'https://wa.me/919606179869?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    }

    // Mobile Menu Toggle
    document.getElementById('menuBtn').addEventListener('click', function() {
      document.body.classList.toggle('nav-open');
    });

    document.querySelectorAll('nav a').forEach(function(a) {
      a.addEventListener('click', function() {
        document.body.classList.remove('nav-open');
      });
    });

    // Initialize Page
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    applyFilters();
    initHeroSlider();
  </script>
</body>
</html>`);

const finalHtml = parts.join('');
fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Successfully generated index.html. Total length:', finalHtml.length);
