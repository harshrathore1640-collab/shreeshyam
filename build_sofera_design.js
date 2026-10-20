const fs = require('fs');

const catalogItems = JSON.parse(fs.readFileSync('catalog_items.json', 'utf8'));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#99692c">
  <meta name="description" content="Shree Shyam Marble Handicraft, Makrana — Handcrafted pure white Makrana marble temples (mandirs), god idols, divine sculptures, brass diyas, and custom stone decor. Direct manufacturer from Makrana, Rajasthan.">
  <meta name="keywords" content="Makrana marble, marble mandir, marble idols, marble temple, Makrana murti, marble diya, marble fountain, Shree Shyam Marble, Gopal Saini">
  <title>Shree Shyam | Makrana Marble Temples, Idols & Handicrafts</title>

  <!-- Google Fonts: Playfair Display + DM Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Playfair+Display:ital,wght@0,500..800;1,500..800&family=Rozha+One&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary: #99692c;
      --primary-dark: #7d521c;
      --primary-light: #b3803f;
      --primary-soft: #fbf5ea;
      --cream-bg: #f9f6f0;
      --cream-card: #fbf8f2;
      --ink: #1f1e1c;
      --ink-soft: #383530;
      --muted: #6e6a62;
      --line: #e8e2d8;
      --line-subtle: #f0ebe2;
      --white: #ffffff;
      --whatsapp: #1f9d45;
      --whatsapp-dark: #157933;
      --radius-sm: 3px;
      --radius-md: 6px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'DM Sans', sans-serif;
      color: var(--ink);
      background-color: var(--white);
      line-height: 1.55;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    a { color: inherit; text-decoration: none; }
    img { display: block; width: 100%; height: 100%; object-fit: cover; }
    button { font-family: inherit; cursor: pointer; border: none; background: none; }

    .container {
      width: min(1180px, 92%);
      margin-inline: auto;
    }

    /* TOPBAR / NAVBAR (Exact Sofera Style) */
    .topbar {
      height: 78px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--line-subtle);
      background: var(--white);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .brand {
      font-family: 'Playfair Display', serif;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.6px;
      color: var(--ink);
      white-space: nowrap;
    }
    .brand span {
      color: var(--primary);
    }
    nav {
      display: flex;
      gap: 28px;
      align-items: center;
      font-size: 13.5px;
      color: var(--ink-soft);
      font-weight: 500;
    }
    nav a {
      transition: color 0.2s ease;
      position: relative;
    }
    nav a:hover {
      color: var(--primary);
    }
    .nav-actions {
      display: flex;
      gap: 20px;
      align-items: center;
      font-size: 18px;
      color: var(--ink-soft);
    }
    .nav-actions a:hover {
      color: var(--primary);
    }
    .menu-btn {
      display: none;
      font-size: 24px;
      color: var(--ink);
    }

    /* TYPOGRAPHY & BUTTONS (Exact Sofera Style) */
    .eyebrow {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--primary);
      font-weight: 700;
      display: inline-block;
      margin-bottom: 12px;
    }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(28px, 3.2vw, 40px);
      line-height: 1.15;
      color: var(--ink);
      letter-spacing: -0.5px;
      margin-bottom: 14px;
    }
    .section-copy {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.65;
    }

    .btn-sofera {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: var(--primary);
      color: var(--white);
      padding: 12px 22px;
      font-size: 12.5px;
      font-weight: 600;
      border-radius: var(--radius-sm);
      transition: all 0.25s ease;
      width: max-content;
      letter-spacing: 0.3px;
    }
    .btn-sofera:hover {
      background: var(--primary-dark);
      transform: translateY(-1px);
    }
    .btn-sofera.outline {
      background: transparent;
      color: var(--ink);
      border: 1px solid var(--line);
    }
    .btn-sofera.outline:hover {
      background: var(--ink);
      color: var(--white);
      border-color: var(--ink);
    }
    .btn-sofera.whatsapp {
      background: var(--whatsapp);
    }
    .btn-sofera.whatsapp:hover {
      background: var(--whatsapp-dark);
    }

    /* SECTION HEADING WITH LINES (Exact Sofera Style: —— TITLE ——) */
    .section-header-centered {
      text-align: center;
      margin-bottom: 36px;
    }
    .section-badge-line {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--ink);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .section-badge-line::before,
    .section-badge-line::after {
      content: '';
      display: inline-block;
      width: 32px;
      height: 1.5px;
      background: var(--ink);
    }
    .section-header-centered p {
      font-size: 13.5px;
      color: var(--muted);
      max-width: 550px;
      margin: 0 auto;
    }

    /* HERO SECTION (Exact Sofera Layout) */
    .hero {
      display: grid;
      grid-template-columns: 1.08fr 0.92fr;
      min-height: 480px;
      background: var(--white);
      align-items: center;
      padding: 24px 0 40px;
      gap: 30px;
    }
    .hero-photo-wrap {
      height: 450px;
      position: relative;
      background: #f6f3ed;
      border-radius: 4px;
      overflow: hidden;
    }
    .hero-photo-wrap img {
      transition: opacity 0.6s ease;
    }
    .hero-card {
      background: var(--primary-soft);
      padding: clamp(32px, 4vw, 56px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 4px;
      min-height: 380px;
    }
    .hero-card .eyebrow {
      margin-bottom: 10px;
    }
    .hero-card h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(34px, 4vw, 52px);
      line-height: 1.1;
      letter-spacing: -1px;
      color: var(--ink);
      margin-bottom: 16px;
    }
    .hero-card p {
      color: #615a4f;
      font-size: 14.5px;
      line-height: 1.6;
      margin-bottom: 26px;
      max-width: 420px;
    }
    .hero-slider-dots {
      display: flex;
      gap: 8px;
      margin-top: 30px;
    }
    .hero-slider-dots button {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #d8cebd;
      transition: all 0.25s ease;
    }
    .hero-slider-dots button.active {
      background: var(--primary);
      width: 20px;
      border-radius: 10px;
    }

    /* 4 FEATURES / TRUST ROW (Exact Sofera Style) */
    .trust-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 28px 0;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      margin-bottom: 50px;
    }
    .trust-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
      border-right: 1px solid var(--line-subtle);
      padding: 6px 12px;
    }
    .trust-col:last-child {
      border-right: none;
    }
    .trust-icon {
      font-size: 26px;
      line-height: 1;
    }
    .trust-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--ink);
      letter-spacing: 0.2px;
    }

    /* FEATURED PROJECT / CRAFTSMANSHIP (Exact Sofera Asymmetric Mosaic) */
    .featured-sec {
      padding: 20px 0 60px;
    }
    .split-grid {
      display: grid;
      grid-template-columns: 0.75fr 1.25fr;
      gap: 50px;
      align-items: center;
    }
    .split-copy {
      display: flex;
      flex-direction: column;
    }
    .split-copy h2 {
      margin-bottom: 16px;
    }
    .split-copy p {
      margin-bottom: 24px;
      max-width: 400px;
    }

    .mosaic-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      grid-template-rows: 190px 190px;
      gap: 12px;
    }
    .mosaic-cell {
      overflow: hidden;
      background: #f6f3ed;
      border-radius: 2px;
      position: relative;
    }
    .mosaic-cell.tall {
      grid-row: span 2;
    }
    .mosaic-cell img {
      transition: transform 0.6s ease;
    }
    .mosaic-cell:hover img {
      transform: scale(1.05);
    }
    .mosaic-cell-subgrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    /* OUR SERVICES (8 Grid Cards, 4x2 - Exact Sofera Style) */
    .services-sec {
      padding: 60px 0;
      background: var(--white);
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }
    .service-card {
      background: var(--white);
      border: 1px solid var(--line-subtle);
      overflow: hidden;
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .service-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    }
    .service-card .photo {
      height: 180px;
      overflow: hidden;
      background: #f6f3ed;
    }
    .service-card .photo img {
      transition: transform 0.5s ease;
    }
    .service-card:hover .photo img {
      transform: scale(1.06);
    }
    .service-card .title {
      padding: 13px 14px;
      font-size: 13px;
      font-weight: 700;
      color: var(--ink);
      text-align: left;
    }

    /* Inverted Card Style (like Commercial Design card in screenshot) */
    .service-card.inverted {
      background: #181715;
      color: var(--white);
      border-color: #181715;
    }
    .service-card.inverted .title {
      color: var(--white);
    }

    /* WHY CHOOSE US (Exact Sofera Style) */
    .why-sec {
      padding: 60px 0;
      background: var(--white);
    }
    .why-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 50px;
      align-items: center;
    }
    .checks {
      list-style: none;
      margin: 22px 0 28px;
    }
    .checks li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13.5px;
      color: var(--ink-soft);
      font-weight: 500;
      margin-bottom: 12px;
    }
    .check-circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--primary);
      color: var(--white);
      display: grid;
      place-items: center;
      font-size: 11px;
      font-weight: 700;
      flex-shrink: 0;
    }
    .why-photos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      height: 420px;
    }
    .why-photo-pane {
      background: #f6f3ed;
      border-radius: 2px;
      overflow: hidden;
      position: relative;
    }
    .why-photo-pane img {
      transition: transform 0.6s ease;
    }
    .why-photo-pane:hover img {
      transform: scale(1.04);
    }
    .why-slider-nav {
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 16px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
      padding: 6px 16px;
      border-radius: 30px;
      font-size: 13px;
      color: var(--ink);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .why-slider-nav button {
      font-weight: 700;
      cursor: pointer;
    }

    /* MASTER CATALOG (Exact Sofera Article Cards Style + Interactive Filters) */
    .catalog-sec {
      padding: 70px 0;
      background: #faf8f5;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    /* Filter Tabs in Sofera Style */
    .catalog-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin: 26px 0 20px;
    }
    .catalog-tab {
      padding: 8px 18px;
      font-size: 13px;
      font-weight: 600;
      border-radius: 30px;
      border: 1px solid var(--line);
      background: var(--white);
      color: var(--ink-soft);
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .catalog-tab:hover {
      border-color: var(--primary);
      color: var(--primary);
    }
    .catalog-tab.active {
      background: var(--primary);
      color: var(--white);
      border-color: var(--primary);
    }
    .catalog-tab .count {
      font-size: 11px;
      background: rgba(0, 0, 0, 0.08);
      padding: 1px 7px;
      border-radius: 10px;
      font-weight: 700;
    }
    .catalog-tab.active .count {
      background: rgba(255, 255, 255, 0.25);
      color: var(--white);
    }

    /* Minimal Search Bar */
    .catalog-search-wrap {
      max-width: 480px;
      margin: 0 auto 36px;
      position: relative;
    }
    .catalog-search-wrap input {
      width: 100%;
      padding: 11px 18px 11px 40px;
      border: 1px solid var(--line);
      border-radius: 30px;
      font-size: 13px;
      background: var(--white);
      outline: none;
      font-family: inherit;
    }
    .catalog-search-wrap input:focus {
      border-color: var(--primary);
    }
    .search-icon-pos {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      color: var(--muted);
    }

    /* Article Cards Grid (3 Columns) */
    .article-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }
    .article-card {
      background: var(--white);
      border: 1px solid var(--line);
      border-radius: 2px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .article-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
    }
    .article-photo {
      height: 220px;
      overflow: hidden;
      background: #f6f3ed;
      position: relative;
      cursor: pointer;
    }
    .article-photo img {
      transition: transform 0.6s ease;
    }
    .article-card:hover .article-photo img {
      transform: scale(1.06);
    }
    .article-zoom-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      display: grid;
      place-items: center;
      font-size: 15px;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .article-card:hover .article-zoom-icon {
      opacity: 1;
    }
    .article-content {
      padding: 18px 18px 16px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .article-meta {
      font-size: 10.5px;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .article-title {
      font-family: 'Playfair Display', serif;
      font-size: 16px;
      line-height: 1.35;
      font-weight: 700;
      color: var(--ink);
      margin-bottom: 4px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .article-title-hi {
      font-size: 12.5px;
      color: #7b7468;
      font-weight: 500;
      margin-bottom: 14px;
      display: block;
    }
    .article-footer {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid var(--line-subtle);
    }
    .text-link {
      font-size: 12px;
      font-weight: 700;
      color: var(--primary);
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }
    .text-link:hover {
      color: var(--primary-dark);
    }
    .btn-card-wa {
      font-size: 12px;
      font-weight: 700;
      color: var(--whatsapp);
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .btn-card-wa:hover {
      color: var(--whatsapp-dark);
    }

    /* Load More Buttons */
    .catalog-actions {
      text-align: center;
      margin-top: 36px;
      display: flex;
      justify-content: center;
      gap: 12px;
    }

    /* WORKSHOP TOUR VIDEO SECTION */
    .workshop-sec {
      padding: 60px 0;
      background: var(--white);
    }
    .workshop-box {
      background: var(--cream-card);
      border: 1px solid var(--line);
      border-radius: 4px;
      padding: 36px clamp(20px, 4vw, 44px);
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 36px;
      align-items: center;
    }
    .workshop-video-pane {
      background: #000;
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .workshop-video-pane video {
      width: 100%;
      height: 100%;
      display: block;
      max-height: 380px;
      object-fit: cover;
    }

    /* GET IN TOUCH STRIP (Exact Sofera Callout) */
    .cta-sec {
      padding: 20px 0 60px;
    }
    .cta-strip {
      background: var(--cream-card);
      border: 1px solid var(--line);
      border-radius: 2px;
      padding: 36px 42px;
      display: grid;
      grid-template-columns: 1.1fr 0.65fr 1fr;
      gap: 30px;
      align-items: center;
    }
    .cta-left h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(26px, 3vw, 36px);
      line-height: 1.15;
      color: var(--ink);
      margin-top: 4px;
    }
    .cta-center-photo {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cta-center-photo img {
      max-height: 100%;
      width: auto;
      object-fit: contain;
    }
    .cta-right {
      border-left: 1px solid #dfd7c9;
      padding-left: 30px;
    }
    .cta-right p {
      font-size: 13.5px;
      color: var(--muted);
      margin-bottom: 14px;
    }

    /* FOOTER (Exact Sofera Clean White Style) */
    footer {
      background: var(--white);
      border-top: 1px solid var(--line);
      padding: 55px 0 25px;
      font-size: 13px;
      color: var(--muted);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
      gap: 36px;
      margin-bottom: 40px;
    }
    .footer-brand {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--ink);
      margin-bottom: 12px;
    }
    .footer-col h4 {
      font-size: 13px;
      font-weight: 700;
      color: var(--ink);
      text-transform: capitalize;
      margin-bottom: 16px;
    }
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .footer-links a {
      color: var(--muted);
      transition: color 0.2s;
    }
    .footer-links a:hover {
      color: var(--primary);
    }
    .footer-social-icons {
      display: flex;
      gap: 14px;
      font-size: 16px;
      margin-top: 18px;
    }
    .footer-social-icons a {
      color: var(--ink-soft);
      transition: color 0.2s;
    }
    .footer-social-icons a:hover {
      color: var(--primary);
    }
    .footer-bottom {
      border-top: 1px solid var(--line-subtle);
      padding-top: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 11.5px;
    }

    /* LIGHTBOX MODAL */
    .lightbox-modal {
      position: fixed;
      inset: 0;
      background: rgba(18, 17, 16, 0.94);
      backdrop-filter: blur(8px);
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
      background: var(--white);
      max-width: 900px;
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      box-shadow: 0 25px 60px rgba(0,0,0,0.5);
      position: relative;
    }
    .lightbox-close {
      position: absolute;
      top: 14px;
      right: 14px;
      font-size: 22px;
      color: var(--ink);
      z-index: 10;
      cursor: pointer;
    }
    .lightbox-photo-pane {
      background: #0f0e0d;
      min-height: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
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
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.25);
      color: var(--white);
      display: grid;
      place-items: center;
      font-size: 18px;
      cursor: pointer;
      backdrop-filter: blur(4px);
    }
    .lightbox-nav-btn.prev { left: 10px; }
    .lightbox-nav-btn.next { right: 10px; }
    .lightbox-details {
      padding: 36px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .lightbox-details h3 {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      line-height: 1.25;
      margin: 8px 0 6px;
    }
    .lightbox-details .hi-name {
      font-size: 14px;
      color: var(--primary);
      margin-bottom: 20px;
      display: block;
    }
    .specs-table {
      font-size: 12px;
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    .specs-table td {
      padding: 6px 0;
      border-bottom: 1px solid var(--line-subtle);
    }
    .specs-table td:first-child {
      color: var(--muted);
      width: 45%;
    }
    .specs-table td:last-child {
      font-weight: 600;
      color: var(--ink);
    }

    /* Floating WhatsApp Button */
    .floating-wa {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: var(--whatsapp);
      color: var(--white);
      display: grid;
      place-items: center;
      font-size: 28px;
      box-shadow: 0 8px 24px rgba(31, 157, 69, 0.4);
      z-index: 99;
      transition: transform 0.25s;
    }
    .floating-wa:hover {
      transform: scale(1.08);
      background: var(--whatsapp-dark);
    }

    /* RESPONSIVE QUERIES */
    @media (max-width: 980px) {
      .services-grid { grid-template-columns: repeat(2, 1fr); }
      .article-grid { grid-template-columns: repeat(2, 1fr); }
      .footer-grid { grid-template-columns: repeat(2, 1fr); }
      .trust-row { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .trust-col:nth-child(2) { border-right: none; }
      .split-grid, .why-grid { grid-template-columns: 1fr; gap: 30px; }
      .workshop-box { grid-template-columns: 1fr; }
      .cta-strip { grid-template-columns: 1fr 1fr; }
      .cta-center-photo { display: none; }
    }

    @media (max-width: 768px) {
      nav {
        display: none;
        position: absolute;
        top: 78px;
        left: 0;
        right: 0;
        background: var(--white);
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 1px solid var(--line);
        box-shadow: 0 10px 20px rgba(0,0,0,0.06);
      }
      body.nav-open nav { display: flex; }
      .menu-btn { display: block; }
      .hero { grid-template-columns: 1fr; padding-top: 12px; }
      .hero-photo-wrap { height: 300px; }
      .lightbox-dialog { grid-template-columns: 1fr; }
      .cta-strip { grid-template-columns: 1fr; }
      .cta-right { border-left: none; border-top: 1px solid #dfd7c9; padding: 18px 0 0; }
    }

    @media (max-width: 520px) {
      .article-grid { grid-template-columns: 1fr; }
      .services-grid { grid-template-columns: 1fr; }
      .why-photos { grid-template-columns: 1fr; height: auto; }
      .why-photo-pane { height: 260px; }
      .footer-grid { grid-template-columns: 1fr; }
      .trust-row { grid-template-columns: 1fr; }
      .trust-col { border-right: none; border-bottom: 1px solid var(--line-subtle); padding-bottom: 12px; }
      .mosaic-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
      .mosaic-cell.tall { height: 220px; }
      .mosaic-cell { height: 160px; }
    }
  </style>
</head>
<body>

  <!-- TOPBAR / NAVBAR (Exact Sofera Style) -->
  <header class="container topbar" id="top">
    <a class="brand" href="#top">Shree Shyam <span>Marble</span></a>

    <nav id="nav">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#craftsmanship">Craftsmanship</a>
      <a href="#catalog">Collection (${catalogItems.length})</a>
      <a href="#why">About Us</a>
      <a href="#workshop">Workshop</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="nav-actions">
      <a href="#catalog" aria-label="Search Collection" title="Search Products">🔍</a>
      <a href="https://wa.me/919606179869" target="_blank" rel="noopener" aria-label="WhatsApp" title="Chat on WhatsApp">💬</a>
      <button class="menu-btn" id="menuBtn" aria-label="Toggle Menu">☰</button>
    </div>
  </header>

  <main>
    <!-- HERO SECTION (Exact Sofera Split Layout) -->
    <section class="container hero" id="home">
      <div class="hero-photo-wrap">
        <img id="heroImage" src="images/WhatsApp%20Image%202026-10-20%20at%203.14.50%20PM%20(1).jpeg" alt="Makrana Marble Mandir Luxury Handcrafted SSMH">
      </div>

      <div class="hero-card">
        <span class="eyebrow">MODERN MARBLE ARTISTRY</span>
        <h1>Elevate Your Sacred Space</h1>
        <p>Discover pure white Makrana marble temples, sanctified god idols and handcrafted decor sculpted for timeless devotion and modern sacred interiors.</p>
        <a class="btn-sofera" href="#catalog">
          Explore Now <span>→</span>
        </a>
        <div class="hero-slider-dots" id="heroDots">
          <button class="active" data-src="images/WhatsApp%20Image%202026-10-20%20at%203.14.50%20PM%20(1).jpeg" aria-label="Slide 1"></button>
          <button data-src="images/WhatsApp%20Image%202026-10-20%20at%203.13.49%20PM.jpeg" aria-label="Slide 2"></button>
          <button data-src="images/WhatsApp%20Image%202026-10-20%20at%203.13.37%20PM.jpeg" aria-label="Slide 3"></button>
        </div>
      </div>
    </section>

    <!-- TRUST ROW / 4 FEATURES (Exact Sofera 4-Column Minimal Outline Icons) -->
    <div class="container trust-row">
      <div class="trust-col">
        <span class="trust-icon">🏛️</span>
        <span class="trust-title">Marble Temples</span>
      </div>
      <div class="trust-col">
        <span class="trust-icon">🕉️</span>
        <span class="trust-title">God Idols & Murtis</span>
      </div>
      <div class="trust-col">
        <span class="trust-icon">🪔</span>
        <span class="trust-title">Brass Marble Diyas</span>
      </div>
      <div class="trust-col">
        <span class="trust-icon">📐</span>
        <span class="trust-title">Custom Stone Work</span>
      </div>
    </div>

    <!-- FEATURED PROJECT / CRAFTSMANSHIP (Exact Sofera Layout) -->
    <section class="container featured-sec" id="craftsmanship">
      <div class="split-grid">
        <div class="split-copy">
          <span class="eyebrow">FEATURED CRAFTSMANSHIP</span>
          <h2 class="section-title">A Blend of Devotion and Elegance</h2>
          <p class="section-copy">
            Transforming sacred homes and temples with timeless Makrana marble aesthetics, intricate floral relief, and master artisan precision.
          </p>
          <a class="btn-sofera" href="#catalog">
            View Collection <span>→</span>
          </a>
        </div>

        <div class="mosaic-grid">
          <div class="mosaic-cell">
            <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.40%20PM.jpeg" alt="Traditional Makrana Home Temple" loading="lazy">
          </div>
          <div class="mosaic-cell tall">
            <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.39%20PM.jpeg" alt="White Makrana Marble Temple with Shikhara" loading="lazy">
          </div>
          <div class="mosaic-cell-subgrid">
            <div class="mosaic-cell" style="height:100%;">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.07%20PM.jpeg" alt="Pure White Makrana Tulsi Chaura" loading="lazy">
            </div>
            <div class="mosaic-cell" style="height:100%;">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.47%20PM%20(1).jpeg" alt="Laddu Gopal Marble Jhula" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR SERVICES (Exact Sofera 8 Grid Cards: 4 Columns x 2 Rows) -->
    <section class="services-sec" id="services">
      <div class="container">
        <div class="section-header-centered">
          <div class="section-badge-line">OUR SERVICES</div>
          <p>Comprehensive handcrafted Makrana marble solutions for every space</p>
        </div>

        <div class="services-grid">
          <!-- Card 1 -->
          <article class="service-card" onclick="filterCategory('mandir')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.46%20PM.jpeg" alt="Home Marble Mandir" loading="lazy">
            </div>
            <div class="title">Home Marble Mandir</div>
          </article>

          <!-- Card 2 (Inverted dark card style like in Sofera mockup) -->
          <article class="service-card inverted" onclick="filterCategory('murti')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.49%20PM.jpeg" alt="Sanctified God Murtis" loading="lazy">
            </div>
            <div class="title">Sanctified God Murtis</div>
          </article>

          <!-- Card 3 -->
          <article class="service-card" onclick="filterCategory('diya')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.53%20PM%20(1).jpeg" alt="Brass Inlaid Diyas" loading="lazy">
            </div>
            <div class="title">Brass Inlaid Diyas</div>
          </article>

          <!-- Card 4 -->
          <article class="service-card" onclick="filterCategory('decor')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.13.37%20PM.jpeg" alt="Water Fountains" loading="lazy">
            </div>
            <div class="title">Water Fountains</div>
          </article>

          <!-- Card 5 -->
          <article class="service-card" onclick="filterCategory('pooja')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.04%20PM.jpeg" alt="Tulsi Chauras & Kyaram" loading="lazy">
            </div>
            <div class="title">Tulsi Chauras & Kyaram</div>
          </article>

          <!-- Card 6 -->
          <article class="service-card" onclick="filterCategory('decor')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.17%20PM.jpeg" alt="Custom Stone Utensils" loading="lazy">
            </div>
            <div class="title">Custom Stone Utensils</div>
          </article>

          <!-- Card 7 -->
          <article class="service-card" onclick="filterCategory('murti')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.39%20PM%20(1).jpeg" alt="Gold Leaf Hand Detailing" loading="lazy">
            </div>
            <div class="title">Gold Leaf Detailing</div>
          </article>

          <!-- Card 8 -->
          <article class="service-card" onclick="filterCategory('mandir')">
            <div class="photo">
              <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.50%20PM%20(1).jpeg" alt="Pan-India Safe Delivery" loading="lazy">
            </div>
            <div class="title">Pan-India Delivery</div>
          </article>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US (Exact Sofera Layout: Copy + 2 Vertical Photos with Navigation) -->
    <section class="container why-sec" id="why">
      <div class="why-grid">
        <div>
          <span class="eyebrow">WHY CHOOSE US</span>
          <h2 class="section-title">Designing Spaces That Inspire</h2>
          <p class="section-copy">
            We combine generations of Makrana stone craft heritage with meticulous finishing, proportion, and bespoke devotional requirements.
          </p>

          <ul class="checks">
            <li><span class="check-circle">✓</span> 100% Pure White Makrana Marble (Sangemarmar)</li>
            <li><span class="check-circle">✓</span> Experienced Artisan Team (10+ Years Heritage)</li>
            <li><span class="check-circle">✓</span> Safe Pan-India Wooden Box Delivery</li>
            <li><span class="check-circle">✓</span> Personalized Dimensions & Custom Shilpa Norms</li>
          </ul>

          <a class="btn-sofera" href="https://wa.me/919606179869?text=Hello%20Gopal%20Ji,%20I%20want%20to%20discuss%20a%20custom%20marble%20mandir%20or%20murti%20order." target="_blank" rel="noopener">
            Learn More <span>→</span>
          </a>
        </div>

        <div class="why-photos">
          <div class="why-photo-pane">
            <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.54%20PM.jpeg" alt="Lotus Diya Marble Display" loading="lazy">
          </div>
          <div class="why-photo-pane">
            <img id="whySliderImg" src="images/WhatsApp%20Image%202026-10-20%20at%203.14.56%20PM.jpeg" alt="Handcrafted Swastika Marble Diya" loading="lazy">
            <div class="why-slider-nav">
              <button onclick="prevWhyImg()" aria-label="Previous">❮</button>
              <span>|</span>
              <button onclick="nextWhyImg()" aria-label="Next">❯</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MASTER CATALOG (Exact Sofera Latest Articles Cards + Categorized 91 Images) -->
    <section class="catalog-sec" id="catalog">
      <div class="container">
        <div class="section-header-centered">
          <div class="section-badge-line">MASTER COLLECTION</div>
          <p>Browse our complete catalog of ${catalogItems.length} handcrafted Makrana marble designs</p>
        </div>

        <!-- Category Filter Tabs in Sofera Rounded Pill Style -->
        <div class="catalog-tabs">
          <button class="catalog-tab active" data-cat="all" onclick="filterCategory('all')">
            <span>All Creations</span>
            <span class="count">${catalogItems.length}</span>
          </button>
          <button class="catalog-tab" data-cat="mandir" onclick="filterCategory('mandir')">
            <span>Mandir & Temples</span>
            <span class="count">${catalogItems.filter(x => x.cat === 'mandir').length}</span>
          </button>
          <button class="catalog-tab" data-cat="murti" onclick="filterCategory('murti')">
            <span>Murtis & Idols</span>
            <span class="count">${catalogItems.filter(x => x.cat === 'murti').length}</span>
          </button>
          <button class="catalog-tab" data-cat="diya" onclick="filterCategory('diya')">
            <span>Brass Marble Diyas</span>
            <span class="count">${catalogItems.filter(x => x.cat === 'diya').length}</span>
          </button>
          <button class="catalog-tab" data-cat="pooja" onclick="filterCategory('pooja')">
            <span>Pooja Samagri</span>
            <span class="count">${catalogItems.filter(x => x.cat === 'pooja').length}</span>
          </button>
          <button class="catalog-tab" data-cat="decor" onclick="filterCategory('decor')">
            <span>Fountains & Decor</span>
            <span class="count">${catalogItems.filter(x => x.cat === 'decor').length}</span>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="catalog-search-wrap">
          <span class="search-icon-pos">🔍</span>
          <input type="text" id="searchInput" placeholder="Search by deity, temple, diya, or fountain..." oninput="handleSearch(this.value)">
        </div>

        <!-- Cards Grid (Matching Sofera 3-column Article Card Layout) -->
        <div class="article-grid" id="catalogGrid">
          <!-- Dynamically populated via JS -->
        </div>

        <!-- Pagination / Load More -->
        <div class="catalog-actions">
          <button class="btn-sofera" id="loadMoreBtn" onclick="loadMoreItems()">
            Load More Designs (+12)
          </button>
          <button class="btn-sofera outline" id="showAllBtn" onclick="showAllItems()">
            Show All (${catalogItems.length})
          </button>
        </div>
      </div>
    </section>

    <!-- WORKSHOP TOUR VIDEO SECTION -->
    <section class="container workshop-sec" id="workshop">
      <div class="workshop-box">
        <div>
          <span class="eyebrow">FACTORY WORKSHOP TOUR</span>
          <h2 class="section-title">See Our Artisans at Work</h2>
          <p class="section-copy" style="margin-bottom: 20px;">
            Watch real stone carving, diamond polishing, and finishing inside our Makrana workshop. Every idol and temple is shaped from authentic Makrana white stone blocks by master craftsmen.
          </p>
          <div style="font-size: 13px; color: var(--muted); line-height: 1.8; margin-bottom: 24px;">
            <div><strong>Location:</strong> Ganesh Colony, Makrana, Rajasthan 341505</div>
            <div><strong>Proprietor:</strong> Gopal Saini (गोपाल सैनी)</div>
            <div><strong>Hours:</strong> Open all 7 days (8:00 AM – 7:30 PM)</div>
          </div>
          <a class="btn-sofera whatsapp" href="https://wa.me/919606179869?text=Hello%20Gopal%20Ji,%20I%20want%20to%20visit%20your%20Makrana%20workshop." target="_blank" rel="noopener">
            Visit Workshop / WhatsApp
          </a>
        </div>

        <div class="workshop-video-pane">
          <video controls preload="metadata" poster="images/WhatsApp%20Image%202026-10-20%20at%203.14.50%20PM%20(1).jpeg">
            <source src="images/WhatsApp%20Video%202026-10-20%20at%203.15.04%20PM.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>

    <!-- GET IN TOUCH CALLOUT STRIP (Exact Sofera Bottom Banner) -->
    <section class="container cta-sec" id="contact">
      <div class="cta-strip">
        <div class="cta-left">
          <span class="eyebrow">GET IN TOUCH</span>
          <h2>Let's Create Your Dream Space</h2>
        </div>

        <div class="cta-center-photo">
          <img src="images/WhatsApp%20Image%202026-10-20%20at%203.14.53%20PM%20(1).jpeg" alt="Marble Diya Artifact">
        </div>

        <div class="cta-right">
          <p>Have a custom temple, deity or decor project in mind? We'd love to hear from you.</p>
          <a class="btn-sofera" href="https://wa.me/919606179869?text=Hello%20Shree%20Shyam%20Marble,%20I%20have%20an%20enquiry%20for%20custom%20marble%20work." target="_blank" rel="noopener">
            Contact Us <span>→</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER (Exact Sofera Clean White Style) -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">Shree Shyam <span>Marble</span></div>
          <p style="font-size: 13px; line-height: 1.6; margin-bottom: 16px; color: var(--muted);">
            Designing beautiful and sanctified spaces with authentic Makrana white marble craftsmanship for a better home.
          </p>
          <div class="footer-social-icons">
            <a href="https://wa.me/919606179869" target="_blank" rel="noopener" title="WhatsApp">💬</a>
            <a href="tel:09606179869" title="Call">📞</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Ganesh+Colony+Makrana+Rajasthan" target="_blank" rel="noopener" title="Location">📍</a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#craftsmanship">Projects</a></li>
            <li><a href="#why">About Us</a></li>
            <li><a href="#catalog">Collection</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul class="footer-links">
            <li><a href="#catalog" onclick="filterCategory('mandir')">Marble Mandir</a></li>
            <li><a href="#catalog" onclick="filterCategory('murti')">Sanctified Murtis</a></li>
            <li><a href="#catalog" onclick="filterCategory('diya')">Brass Inlaid Diyas</a></li>
            <li><a href="#catalog" onclick="filterCategory('pooja')">Tulsi Chauras</a></li>
            <li><a href="#catalog" onclick="filterCategory('decor')">Water Fountains</a></li>
            <li><a href="#catalog" onclick="filterCategory('decor')">Custom Stone Work</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul class="footer-links">
            <li>📞 <a href="tel:09606179869">+91 96061 79869</a></li>
            <li>📞 <a href="tel:09001003360">+91 90010 03360</a></li>
            <li>👤 Gopal Saini (Proprietor)</li>
            <li>📍 Ganesh Colony, Makrana, Rajasthan</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© <span id="footerYear"></span> Shree Shyam Marble Handicraft. All Rights Reserved.</div>
        <div>
          <a href="#top" style="margin-right: 14px;">Privacy Policy</a>
          <a href="#top">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- LIGHTBOX MODAL -->
  <div class="lightbox-modal" id="lightboxModal" onclick="handleLightboxBackdrop(event)">
    <div class="lightbox-dialog" onclick="event.stopPropagation()">
      <button class="lightbox-close" onclick="closeLightbox()" title="Close">✕</button>

      <div class="lightbox-photo-pane">
        <button class="lightbox-nav-btn prev" onclick="prevLightbox(event)" title="Previous">❮</button>
        <img id="lightboxImg" src="" alt="Enlarged Product">
        <button class="lightbox-nav-btn next" onclick="nextLightbox(event)" title="Next">❯</button>
      </div>

      <div class="lightbox-details">
        <div>
          <span class="eyebrow" id="lightboxCat">MAKRANA MARBLE</span>
          <h3 id="lightboxTitle">Product Title</h3>
          <span class="hi-name" id="lightboxTitleHi">उत्पाद नाम</span>

          <table class="specs-table">
            <tbody>
              <tr>
                <td>Material:</td>
                <td>100% Pure Makrana White Marble</td>
              </tr>
              <tr>
                <td>Crafting:</td>
                <td>Hand-carved & Diamond Polished</td>
              </tr>
              <tr>
                <td>Origin:</td>
                <td>Makrana, Rajasthan (Direct Factory)</td>
              </tr>
              <tr>
                <td>Custom Sizing:</td>
                <td>Available on custom request</td>
              </tr>
              <tr>
                <td>Transit Safety:</td>
                <td>Heavy-duty Wooden Crate with Foam</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <a class="btn-sofera whatsapp" id="lightboxWaBtn" href="#" target="_blank" rel="noopener" style="width:100%;">
            Enquire on WhatsApp <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- FLOATING WHATSAPP BUTTON -->
  <a class="floating-wa" href="https://wa.me/919606179869?text=Hello%20Shree%20Shyam%20Marble%20Handicraft,%20I%20am%20interested%20in%20your%20marble%20products." target="_blank" rel="noopener" title="Chat on WhatsApp">
    💬
  </a>

  <!-- CATALOG DATA EMBEDDED -->
  <script id="catalogData" type="application/json">
${JSON.stringify(catalogItems, null, 2)}
  </script>

  <!-- CLIENT-SIDE SCRIPT -->
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
    let displayedCount = 12;
    const PAGE_SIZE = 12;
    let currentLightboxIndex = 0;

    // Filter by category
    function filterCategory(cat) {
      activeCategory = cat;
      document.querySelectorAll('.catalog-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === cat);
      });
      displayedCount = PAGE_SIZE;
      applyFilters();
      const catSec = document.getElementById('catalog');
      if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
    }

    // Search
    function handleSearch(val) {
      searchQuery = val.trim().toLowerCase();
      displayedCount = PAGE_SIZE;
      applyFilters();
    }

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

    function renderCatalog() {
      const grid = document.getElementById('catalogGrid');
      const itemsToShow = filteredItems.slice(0, displayedCount);

      if (itemsToShow.length >= filteredItems.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
        document.getElementById('showAllBtn').style.display = 'none';
      } else {
        document.getElementById('loadMoreBtn').style.display = 'inline-flex';
        document.getElementById('showAllBtn').style.display = 'inline-flex';
      }

      if (filteredItems.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: #fff; border: 1px dashed var(--line);">' +
          '<h3 style="font-size: 16px; margin-bottom: 8px;">No matching items found</h3>' +
          '<p style="font-size: 13px; color: var(--muted); margin-bottom: 14px;">Try searching for another deity, temple, or diya design.</p>' +
          '<button class="btn-sofera" onclick="filterCategory(\\'all\\'); document.getElementById(\\'searchInput\\').value = \\'\\'; searchQuery = \\'\\'; applyFilters();">Show All Designs</button>' +
          '</div>';
        return;
      }

      grid.innerHTML = itemsToShow.map(function(item, idx) {
        var encodedFile = encodeURI('images/' + item.file);
        var catName = CATEGORY_NAMES[item.cat] || 'Handicraft';
        var waMsg = encodeURIComponent('Hello Shree Shyam Marble Handicraft, I want to enquire about "' + item.title + '" (' + item.titleHi + '). Please share price and available sizes.');

        return '<article class="article-card">' +
          '<div class="article-photo" onclick="openLightbox(' + idx + ')">' +
            '<img src="' + encodedFile + '" alt="' + item.title + '" loading="lazy">' +
            '<span class="article-zoom-icon" title="View Full">🔍</span>' +
          '</div>' +
          '<div class="article-content">' +
            '<span class="article-meta">' + catName + '</span>' +
            '<h3 class="article-title" title="' + item.title + '">' + item.title + '</h3>' +
            '<span class="article-title-hi">' + item.titleHi + '</span>' +
            '<div class="article-footer">' +
              '<a class="btn-card-wa" href="https://wa.me/919606179869?text=' + waMsg + '" target="_blank" rel="noopener">' +
                '<span>💬</span> WhatsApp' +
              '</a>' +
              '<button class="text-link" onclick="openLightbox(' + idx + ')">' +
                'Read More <span>→</span>' +
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

    // Lightbox Modal
    function openLightbox(index) {
      currentLightboxIndex = index;
      var item = filteredItems[index];
      if (!item) return;

      var modal = document.getElementById('lightboxModal');
      var img = document.getElementById('lightboxImg');
      var cat = document.getElementById('lightboxCat');
      var title = document.getElementById('lightboxTitle');
      var titleHi = document.getElementById('lightboxTitleHi');
      var waBtn = document.getElementById('lightboxWaBtn');

      img.src = encodeURI('images/' + item.file);
      img.alt = item.title;
      cat.textContent = CATEGORY_NAMES[item.cat] || 'Makrana Marble';
      title.textContent = item.title;
      titleHi.textContent = item.titleHi;

      var waMsg = encodeURIComponent('Hello Shree Shyam Marble Handicraft, I am interested in "' + item.title + '" (' + item.titleHi + '). Please share available sizes and pricing.');
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

    document.addEventListener('keydown', function(e) {
      var modal = document.getElementById('lightboxModal');
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    });

    // Hero Slider
    var heroImages = [
      'images/WhatsApp%20Image%202026-10-20%20at%203.14.50%20PM%20(1).jpeg',
      'images/WhatsApp%20Image%202026-10-20%20at%203.13.49%20PM.jpeg',
      'images/WhatsApp%20Image%202026-10-20%20at%203.13.37%20PM.jpeg'
    ];
    var heroCurrentIdx = 0;
    var heroDots = document.querySelectorAll('#heroDots button');
    var heroImgEl = document.getElementById('heroImage');

    function setHero(idx) {
      heroCurrentIdx = idx;
      heroImgEl.style.opacity = '0.4';
      setTimeout(function() {
        heroImgEl.src = heroImages[heroCurrentIdx];
        heroImgEl.style.opacity = '1';
      }, 150);
      heroDots.forEach(function(btn, i) {
        btn.classList.toggle('active', i === idx);
      });
    }

    heroDots.forEach(function(btn, i) {
      btn.addEventListener('click', function() {
        setHero(i);
      });
    });

    setInterval(function() {
      setHero((heroCurrentIdx + 1) % heroImages.length);
    }, 4500);

    // Why Us Section mini photo slider
    var whyImages = [
      'images/WhatsApp%20Image%202026-10-20%20at%203.14.56%20PM.jpeg',
      'images/WhatsApp%20Image%202026-10-20%20at%203.14.39%20PM%20(1).jpeg',
      'images/WhatsApp%20Image%202026-10-20%20at%203.14.17%20PM.jpeg'
    ];
    var whyCurrentIdx = 0;
    var whyImgEl = document.getElementById('whySliderImg');

    function nextWhyImg() {
      whyCurrentIdx = (whyCurrentIdx + 1) % whyImages.length;
      whyImgEl.src = whyImages[whyCurrentIdx];
    }
    function prevWhyImg() {
      whyCurrentIdx = (whyCurrentIdx - 1 + whyImages.length) % whyImages.length;
      whyImgEl.src = whyImages[whyCurrentIdx];
    }

    // Mobile nav toggle
    document.getElementById('menuBtn').addEventListener('click', function() {
      document.body.classList.toggle('nav-open');
    });
    document.querySelectorAll('nav a').forEach(function(a) {
      a.addEventListener('click', function() {
        document.body.classList.remove('nav-open');
      });
    });

    document.getElementById('footerYear').textContent = new Date().getFullYear();
    applyFilters();
  </script>
</body>
</html>`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully generated index.html with Sofera design. Length:', html.length);
