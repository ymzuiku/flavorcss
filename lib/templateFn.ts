// 拼接string
export const templateFn = function (...args: any): string {
  if (args.length > 1) {
    const [str, ...rest] = args;
    let out = "";

    str.forEach((v: string, i: number) => {
      out += v;
      if (rest[i]) {
        out += rest[i];
      }
    });

    return out;
  }
  if (typeof args[0] === "string") {
    return args[0];
  }

  if (args[0]) {
    return args[0].join("");
  }

  return "";
};
