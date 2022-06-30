const mix = require("laravel-mix");

mix
  .js("views/js/app.js", "public/js/spa.js")
  .setPublicPath("public")
  .react()
  .postCss("views/css/main.css", "public/css/tailwind.css", [
    require("tailwindcss"),
  ]);
