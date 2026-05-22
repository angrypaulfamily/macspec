# Freemium chip comparison unlock

_Started 2026-05-22 06:08 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Comapre Mac"
Project is currently empty (no files)
Current date is now May 22, 2026
</system-info>

<default aesthetic>
If no references, art direction or design systems were provided, use this default professional modern, minimal aesthetic as a base. Declare your choice out loud so you stick to it. Guidance:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic>

<pasted_text name="Pasted text (24 lines)">
Design a website called "MacSpec" that lets users compare Apple M-series chips side by side.
Design philosophy: Mobile first. The primary user is on a phone. Design every element for a 390px wide screen first. The hero section, dropdowns, comparison table, and paywall card should all be built for vertical scrolling on mobile. Desktop is a secondary consideration where elements expand and sit side by side where appropriate. On mobile specifically: the two chip dropdowns should stack vertically one above the other rather than sitting side by side, the compare button should be full width, the comparison results should be a single scrollable column with the two chip values clearly labelled above each row, and the paywall card should take up the full screen width with the button spanning the full width below the text.
Overall aesthetic: Clean, minimal, and Apple-inspired. Use a white and very light gray background. Typography should be a modern sans-serif (SF Pro style). Accent color is a deep electric blue (#0071e3, Apple's blue). No gradients, no loud colors. The site should feel like it belongs next to Apple's own product pages. Generous whitespace throughout.
Page layout, top to bottom:
1. Navigation bar
Minimal top nav. Left side: the logo "MacSpec" in bold dark text with a small chip icon. Right side: a single ghost-style button labeled "Unlock Unlimited" in the accent blue. Sticky on scroll, very thin with a subtle bottom border.
2. Hero section
Short and punchy. Large headline: "Finally understand Apple's chip lineup." Subheadline below in gray: "Pick any two chips and see exactly how they compare. Free for your first comparison." Below that, two dropdowns stacked vertically on mobile labeled "Select first chip" and "Select second chip" with a full width blue "Compare" button below them. The dropdowns should look sleek with a card-like border and a subtle shadow.
3. Comparison results area
This appears below the dropdowns once chips are selected. On mobile, show each spec as a full width row with the metric name at the top in gray, and the two chip values below it side by side clearly labeled with the chip name above each value. Group rows into sections:

Performance: CPU cores (performance + efficiency), GPU cores, Neural Engine cores
Memory: Max unified memory, Memory bandwidth
Technical: Process node, Transistor count
Media: Media engine count
Compatibility: Max external displays, Which Mac models it ships in
Overview: Release year, Best for (plain English summary)

Each row alternates between white and very light gray. If one chip is clearly better in a category, highlight that value with the accent blue color and a small upward arrow. Keep it clean, no clutter.
4. Paywall banner
A softly rounded full width card with a light blue tinted background. Bold text at the top saying "Want to compare more chips?" with a subline "Unlock unlimited comparisons for one single payment of $1." Below that a large full width blue button labeled "Unlock for $1." Add a small line of trust text below the button: "One-time payment. Works forever on this device."
5. Footer
Minimal. Centered text: "MacSpec is not affiliated with Apple Inc." in small gray text. Nothing else.
Do not include: Illustrations, stock photos, animations, dark mode, or any sidebar navigation. Keep every element purposeful and sparse.
</pasted_text>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: write_file]_

I'll build MacSpec as an original mobile-first design. To stay clear of Apple's branded UI, I'll use Inter (a similar geometric sans-serif, not SF Pro), an original wordmark + chip glyph, and keep the disclaimer prominent. Chip specs themselves are factual data. Let me design it.

_[tool: done]_

MacSpec is ready — mobile-first at 390px with the nav, hero, stacked dropdowns, full-width Compare button, single-column results with chip-labeled values, and the tinted paywall card. Best values in each row are highlighted blue with an upward arrow. Desktop expands to a 3-column row layout above 760px. Used Inter (not SF Pro) and an original chip wordmark + glyph to keep it clearly distinct from Apple's own UI; disclaimer is in the footer.

_[tool: fork_verifier_agent]_

Design is delivered — MacSpec.html. Let me know what to tweak next.

## User

I want to change the freemium model and the comparison interaction. Here is exactly how it should work:
The free tier allows unlimited one on one comparisons. The user can compare any two chips as many times as they want, switching chips freely, at no cost. There is no limit on how many comparisons they do as long as it is always two chips at a time.
The paid feature ($1 one time) unlocks the ability to add more than two chips simultaneously to the same comparison view. So a user could compare M1 vs M2 vs M3 vs M4 all in one table at the same time.
The comparison table should scroll horizontally as more chips are added, each new chip appearing as a new column to the right. This should feel like a natural swipe interaction on mobile, similar to how App Store cards scroll. The table itself stays fixed on the left side showing the spec category names, and only the chip columns scroll horizontally to the right.
The paywall should only trigger when a user tries to add a third chip to the comparison. At that point show the unlock prompt. Never restrict the two chip comparison in any way.

## Assistant

_[tool: write_file]_

Got it — switching the model. Let me rebuild: free tier = unlimited 2-chip compares, paywall fires only when adding a 3rd chip, results table has a frozen left label column with horizontally scrolling chip columns.

_[tool: done]_

Updated. Key changes:

- **Free tier is now unlimited 2-chip compares.** Hero dropdowns + Compare button always work.
- **Paywall only triggers on the 3rd chip.** Clicking the **+** button at the end of the table opens the unlock modal; "Maybe later" or Esc dismisses and leaves the 2-chip view intact. Once unlocked, the **+** opens an inline picker column.
- **Horizontal scroll with frozen labels.** The left "spec name" column is `position: sticky`, gains a soft shadow on scroll; chip columns scroll right. Added a subtle "Swipe to see more" hint on mobile when overflow exists.
- **Chips ≥ 3 get a remove (×).** The first two have no remove so the comparison never collapses below two.
- **Unlock is persisted** in localStorage; nav CTA flips to "✓ Unlimited unlocked".
- **Best-of highlighting** now works across N chips (max for higher-is-better, min nodeRank for process node).
- Removed the always-on paywall card from the page since the prompt should only appear on the add-3rd action.

_[tool: fork_verifier_agent]_

Done — let me know what to adjust next.

## User

Please make updates to the existing MacSpec design:
1. Change the price from $1 to $2 everywhere it appears. The paywall button should read "Unlock for $2" and the supporting text should say "One-time payment of $2."
2. Add the full M5 chip family to the chip selector. Here are the confirmed chips and their key specs to add alongside the existing lineup:
M5 (released October 2025): 10-core CPU (4 super cores + 6 efficiency cores), 10-core GPU, 16-core Neural Engine, 153 GB/s memory bandwidth, up to 32GB unified memory, 3nm process. Ships in: 14-inch MacBook Pro, iPad Pro.
M5 Pro (released March 2026): up to 18-core CPU (6 super cores + 12 performance cores), up to 20-core GPU, 16-core Neural Engine, 307 GB/s memory bandwidth, up to 64GB unified memory, 3nm Fusion Architecture. Ships in: 14-inch and 16-inch MacBook Pro.
M5 Max (released March 2026): 18-core CPU, up to 40-core GPU, 16-core Neural Engine, 614 GB/s memory bandwidth, up to 128GB unified memory, 3nm Fusion Architecture. Ships in: 14-inch and 16-inch MacBook Pro.
Do not add M5 Ultra yet as it has not been officially released.
3. Remove all em dashes and never include them

## Assistant

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

All updates applied:

- **Price → $2** in the modal subtitle, button ("Unlock for $2"), and trust line ("One-time payment of $2.")
- **M5 family added**: M5 (Oct 2025), M5 Pro (Mar 2026), M5 Max (Mar 2026) with the specs you provided. CPU-cores cell now uses a custom label per chip so the super/performance/efficiency mix renders correctly. M5 Ultra omitted.
- **All em dashes removed** from copy, comments, and the title; replaced "—" placeholders in the table with "None" (media engine count) and "···" (pending column).

Note: I estimated transistor counts and media-engine counts for the M5 family since you didn't specify those. Let me know the real figures and I'll swap them in.

_[tool: fork_verifier_agent]_

Done.

## User

Save as standalone HTML: MacSpec.html

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

Only the Google Fonts link as an external resource, handled natively by the bundler. I just need to add the thumbnail template, then bundle.

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: present_fs_item_for_download]_

Standalone bundle ready (342 KB). Works offline, no external dependencies.

