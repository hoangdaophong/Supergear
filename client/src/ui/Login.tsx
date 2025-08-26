import { useState } from "react";
import Label from "./Label";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";

const Login = ({ setLogin }: { setLogin: any }) => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { t } = useTranslation();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.target);
      const { email, password }: any = Object.fromEntries(formData);

      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      let errorMessage;
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = t("login.errors.userNotFound");
          break;
        case "auth/wrong-password":
          errorMessage = t("login.errors.wrongPassword");
          break;
        case "auth/invalid-email":
          errorMessage = t("login.errors.invalidEmail");
          break;
        case "auth/invalid-credential":
          errorMessage = t("login.errors.invalidCredential");
          break;
        // Add more cases as needed
        default:
          errorMessage = t("login.errors.generic");
      }
      console.log("Error", error);
      setErrMsg(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-950 rounded-lg">
      <form
        onSubmit={handleLogin}
        className="max-w-4xl mx-auto pt-10 px-10 md:px-0 text-white"
      >
        <div className="border-b border-b-white/10 pb-5">
          <h2 className="text-lg font-semibold uppercase leading-7">
            {t("login.title")}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            {t("login.description")}
          </p>
        </div>
        <div className="border-b border-b-white/10 pb-5">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Label title={t("login.email")} htmlFor="email" />
              <input
                type="email"
                name="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
            <div className="sm:col-span-3">
              <Label title={t("login.password")} htmlFor="password" />
              <input
                type="password"
                name="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
        </div>
        {errMsg && (
          <p className="bg-white/90 text-red-600 text-center py-1 rounded-md tracking-wide font-semibold">
            {errMsg}
          </p>
        )}
        <button
          //   disabled={loading}
          type="submit"
          className="mt-5 bg-indigo-700 w-full py-2 uppercase text-base font-bold tracking-wide text-gray-300 rounded-md hover:text-white hover:bg-indigo-600 duration-200"
        >
          {loading ? t("profile.loading") : t("login.submit")}
        </button>
      </form>
      <p className="text-sm leading-6 text-gray-400 text-center -mt-2 py-10">
        {t("login.noAccount")}{" "}
        <button
          onClick={() => setLogin(false)}
          className="text-gray-200 font-semibold underline underline-offset-2 decoration-[1px] hover:text-white duration-200"
        >
          {t("login.register")}
        </button>
      </p>
      {loading && <Loading />}
    </div>
  );
};

export default Login;
