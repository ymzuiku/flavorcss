import { parseAtom } from "./parser";

it("border:--px|solid|--red", () => {
  const css = parseAtom("border:--px|solid|--red");
  expect(css.trim()).toEqual(
    `.border\\:--px\\|solid\\|--red { border: var(--px) solid var(--red) }`,
  );
});

it("background:#f00", () => {
  const css = parseAtom("background:#f00");
  expect(css.trim()).toEqual(`.background\\:\\#f00 { background: #f00 }`);
});

it("border:2px|solid|#888", () => {
  const css = parseAtom("border:2px|solid|#888");
  expect(css.trim()).toEqual(
    `.border\\:2px\\|solid\\|\\#888 { border: 2px solid #888 }`,
  );
});

it("border:2px|solid|hsl(200,50%,50%)", () => {
  const css = parseAtom("border:2px|solid|hsl(200,50%,50%)");
  expect(css.trim()).toEqual(
    `.border\\:2px\\|solid\\|hsl\\(200\\,50\\%\\,50\\%\\) { border: 2px solid hsl(200,50%,50%) }`,
  );
});

it("border:2px|solid|hsl(--red,50%,50%)", () => {
  const css = parseAtom("border:2px|solid|hsl(--red,50%,50%)");
  expect(css.trim()).toEqual(
    `.border\\:2px\\|solid\\|hsl\\(--red\\,50\\%\\,50\\%\\) { border: 2px solid hsl(var(--red),50%,50%) }`,
  );
});

it("border:2px|solid|--red", () => {
  const css = parseAtom("border:2px|solid|--red");
  expect(css.trim()).toEqual(
    `.border\\:2px\\|solid\\|--red { border: 2px solid var(--red) }`,
  );
});

it("border:calc(--a+10px)|solid|--red", () => {
  const css = parseAtom("border:calc(--a+10px)|solid|--red");
  expect(css.trim()).toEqual(
    `.border\\:calc\\(--a\\+10px\\)\\|solid\\|--red { border: calc(var(--a) + 10px) solid var(--red) }`,
  );
});

it("border:calc(--a-10px)|solid|--red", () => {
  const css = parseAtom("border:calc(--a-10px)|solid|--red");
  expect(css.trim()).toEqual(
    `.border\\:calc\\(--a-10px\\)\\|solid\\|--red { border: calc(var(--a) - 10px) solid var(--red) }`,
  );
});

it("无法识别的类型 #f00:background", () => {
  const css = parseAtom("#f00:background");
  expect(css.trim()).toEqual(`.\\#f00\\:background { #f00: background }`);
});

it("sm:background:#f00", () => {
  const css = parseAtom("sm:background:#f00");
  expect(css.trim()).toEqual(
    `@media screen and (min-width: 640px) { .sm\\:background\\:\\#f00 { background: #f00 } }`,
  );
});

it("hover:background:#f00", () => {
  const css = parseAtom("hover:background:#f00");
  expect(css.trim()).toEqual(
    `.hover\\:background\\:\\#f00:hover { background: #f00 }`,
  );
});

it("无法识别的类型 dog:background:#f00", () => {
  const css = parseAtom("dog:background:#f00");
  expect(css.trim()).toEqual(
    `.dog\\:background\\:\\#f00:dog { background: #f00 }`,
  );
});

it("sm:active:background:#f00", () => {
  const css = parseAtom("sm:active:background:#f00");
  expect(css.trim()).toEqual(
    `@media screen and (min-width: 640px) { .sm\\:active\\:background\\:\\#f00:active { background: #f00 } }`,
  );
});

it("dark:hover:background:#f00", () => {
  const css = parseAtom("dark:hover:background:#f00");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { .dark\\:hover\\:background\\:\\#f00:hover { background: #f00 } }`,
  );
});

it("dark:sm:background:#f00", () => {
  const css = parseAtom("dark:sm:background:#f00");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .dark\\:sm\\:background\\:\\#f00 { background: #f00 } } }`,
  );
});

it("dark:sm:hover:background:#f00", () => {
  const css = parseAtom("dark:sm:hover:background:#f00");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .dark\\:sm\\:hover\\:background\\:\\#f00:hover { background: #f00 } } }`,
  );
});

it("dark:sm:hover:background:--m2", () => {
  const css = parseAtom("dark:sm:hover:background:--m2");
  expect(css.trim()).toEqual(
    `@media (prefers-color-scheme: dark) { @media screen and (min-width: 640px) { .dark\\:sm\\:hover\\:background\\:--m2:hover { background: var(--m2) } } }`,
  );
});
