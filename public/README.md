# Public assets

Drop your assets here:

- `Ankush_Panwar_Resume.pdf` — your résumé (referenced by the Hero "Download Resume" and Resume section "Download / View PDF" buttons).
- `favicon.svg` — already included, replace if you'd like.
- `images/` — any custom photography/illustrations you want to use.

The hero portrait currently renders as an animated initials orb so the site
looks polished without any image. To swap in a real photo:

1. Add `public/images/profile.jpg`.
2. Open `src/components/Hero/Hero.module.css` and replace the `.portraitInitials`
   block with a `background-image: url('/images/profile.jpg')` on `.portrait`.

Same idea for the About section image in `src/components/About/About.module.css`.
