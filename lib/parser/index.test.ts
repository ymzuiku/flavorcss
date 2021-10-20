import { parser } from ".";

it("border:--px|solid|--red", () => {
  const css = parser("border:--px|solid|--red");
  expect(css.trim()).toEqual(`.border\\:--px\\|solid\\|--red { border: var(--px) solid var(--red); }`);
});

it("border:--px|solid|--red!", () => {
  const css = parser("border:--px|solid|--red!");
  expect(css.trim()).toEqual(`.border\\:--px\\|solid\\|--red\\! { border: var(--px) solid var(--red) !important; }`);
});

it("background:#f00", () => {
  const css = parser("background:#f00");
  expect(css.trim()).toEqual(`.background\\:\\#f00 { background: #f00; }`);
});

it("bg:rgba(--red-500,0.1)", () => {
  const css = parser("bg:rgba(--red-500,0.1)");
  expect(css.trim()).toEqual(`.bg\\:rgba\\(--red-500\\,0\\.1\\) { background: rgba(var(--red-500),0.1); }`);
});

it("bg:#f00", () => {
  const css = parser("bg:#f00");
  expect(css.trim()).toEqual(`.bg\\:\\#f00 { background: #f00; }`);
});

it("border:2px|solid|#888", () => {
  const css = parser("border:2px|solid|#888");
  expect(css.trim()).toEqual(`.border\\:2px\\|solid\\|\\#888 { border: 2px solid #888; }`);
});

it("border:2px|solid|hsl(200,50%,50%)", () => {
  const css = parser("border:2px|solid|hsl(200,50%,50%)");
  expect(css.trim()).toEqual(
    `.border\\:2px\\|solid\\|hsl\\(200\\,50\\%\\,50\\%\\) { border: 2px solid hsl(200,50%,50%); }`,
  );
});

it("border:2px|solid|hsl(--red,50%,50%)", () => {
  const css = parser("border:2px|solid|hsl(--red,50%,50%)");
  expect(css.trim()).toEqual(
    `.border\\:2px\\|solid\\|hsl\\(--red\\,50\\%\\,50\\%\\) { border: 2px solid hsl(var(--red),50%,50%); }`,
  );
});

it("border:2px|solid|--red", () => {
  const css = parser("border:2px|solid|--red");
  expect(css.trim()).toEqual(`.border\\:2px\\|solid\\|--red { border: 2px solid var(--red); }`);
});

it("border:calc(--a|+|10px)|solid|--red", () => {
  const css = parser("border:calc(--a|+|10px)|solid|--red");
  expect(css.trim()).toEqual(
    `.border\\:calc\\(--a\\|\\+\\|10px\\)\\|solid\\|--red { border: calc(var(--a) + 10px) solid var(--red); }`,
  );
});

it("border:calc(--a|-|10px)|solid|--red", () => {
  const css = parser("border:calc(--a|-|10px)|solid|--red");
  expect(css.trim()).toEqual(
    `.border\\:calc\\(--a\\|-\\|10px\\)\\|solid\\|--red { border: calc(var(--a) - 10px) solid var(--red); }`,
  );
});

it("无法识别的类型 #f00:background", () => {
  const css = parser("#f00:background");
  expect(css.trim()).toEqual(`.\\#f00\\:background { #f00: background; }`);
});

it("sm:background:#f00", () => {
  const css = parser("sm:background:#f00");
  expect(css.trim()).toEqual(
    `@media screen and (min-width: 640px) { .sm\\:background\\:\\#f00 { background: #f00; } }`,
  );
});

it("hover:background:#f00", () => {
  const css = parser("hover:background:#f00");
  expect(css.trim()).toEqual(`.hover\\:background\\:\\#f00:hover { background: #f00; }`);
});

it("sm:active:background:#f00", () => {
  const css = parser("sm:active:background:#f00");
  expect(css.trim()).toEqual(
    `@media screen and (min-width: 640px) { .sm\\:active\\:background\\:\\#f00:active { background: #f00; } }`,
  );
});

it("dark:hover:background:#f00", () => {
  const css = parser("dark:hover:background:#f00");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { .dark\\:hover\\:background\\:\\#f00:hover { background: #f00; } }`,
  );
});

it("dark:sm:background:#f00", () => {
  const css = parser("dark:sm:background:#f00");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .dark\\:sm\\:background\\:\\#f00 { background: #f00; } } }`,
  );
});

it("dark:sm:hover:background:#f00", () => {
  const css = parser("dark:sm:hover:background:#f00");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .dark\\:sm\\:hover\\:background\\:\\#f00:hover { background: #f00; } } }`,
  );
});

it("dark:sm:hover:background:--m2", () => {
  const css = parser("dark:sm:hover:background:--m2");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .dark\\:sm\\:hover\\:background\\:--m2:hover { background: var(--m2); } } }`,
  );
});

it("div>ul:background:#f00", () => {
  const css = parser("div>ul:background:#f00");
  expect(css.trim()).toEqual(`.div\\>ul\\:background\\:\\#f00 div>ul { background: #f00; }`);
});

it("div>ul:hover:background:#f00", () => {
  const css = parser("div>ul:hover:background:#f00");
  expect(css.trim()).toEqual(`.div\\>ul\\:hover\\:background\\:\\#f00 div>ul:hover { background: #f00; }`);
});

it("div>ul:sm:background:#f00", () => {
  const css = parser("div>ul:sm:background:#f00");
  expect(css.trim()).toEqual(
    `@media screen and (min-width: 640px) { .div\\>ul\\:sm\\:background\\:\\#f00 div>ul { background: #f00; } }`,
  );
});

it("div>ul:sm:hover:background:--m2", () => {
  const css = parser("div>ul:sm:hover:background:--m2");
  expect(css.trim()).toEqual(
    `@media screen and (min-width: 640px) { .div\\>ul\\:sm\\:hover\\:background\\:--m2 div>ul:hover { background: var(--m2); } }`,
  );
});

it("div>ul:dark:sm:background:--m2", () => {
  const css = parser("div>ul:dark:sm:background:--m2");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .div\\>ul\\:dark\\:sm\\:background\\:--m2 div>ul { background: var(--m2); } } }`,
  );
});

it("div>ul:dark:sm:hover:background:--m2", () => {
  const css = parser("div>ul:dark:sm:hover:background:--m2");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .div\\>ul\\:dark\\:sm\\:hover\\:background\\:--m2 div>ul:hover { background: var(--m2); } } }`,
  );
});

it("div>ul:dark:sm:hover:background:--m2!", () => {
  const css = parser("div>ul:dark:sm:hover:background:--m2!");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .div\\>ul\\:dark\\:sm\\:hover\\:background\\:--m2\\! div>ul:hover { background: var(--m2) !important; } } }`,
  );
});
