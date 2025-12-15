import { redirect, RedirectType } from "next/navigation";

export default () => {
  redirect("/", RedirectType.replace);
};
