import { useState } from "react";
import Options from "@/components/Options";
import { metricsData, sassOptions, selfHostedOptions } from "@/constants";
import { cn } from "@/lib/utils";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="debug-screens grid min-h-screen md:grid-cols-2">
      {/* 1 */}
      <div className="relative hidden bg-white md:block">
        <img
          src="/Subtract.png"
          alt=""
          className="absolute bottom-0 left-0 hidden md:block"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex min-w-[385px] flex-col items-center justify-center rounded-3xl shadow-custom lg:min-w-[447px] border">
            <div className="flex items-center gap-3 py-6">
              <img src="logo-dark.png" alt="" />
              <h1 className="text-lg font-bold">
                AI to Detect & Autofix the bad code
              </h1>
            </div>
            <div className="flex justify-between gap-6 border-t border-slate-200 p-6">
              {metricsData.map((metric, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <h2 className="text-lg font-bold">{metric.heading}</h2>
                  <p className="text-sm lg:text-base">{metric.subheading}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-[65%] top-[67%] -translate-x-1/2 -translate-y-1/2 lg:left-[70%]">
          <div className="flex w-[265px] flex-col justify-center rounded-3xl bg-white px-6 py-4 shadow-custom">
            <div className="flex w-full items-center justify-between">
              <img src="/signin.png" alt="" />
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-1">
                  <img src="./arrow.png" alt="" />
                  <p className="text-sm font-bold text-[#0049C6]">14%</p>
                </div>
                <p className="text-xs text-[#171717]">This week</p>
              </div>
            </div>
            <div className="">
              <p className="mt-6 text-sm font-bold">Issues fixed</p>
              <p className="text-[32px] font-bold">500K+</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center justify-center bg-[#FAFAFA] p-6 gap-y-8">
        <div className="flex h-[602px] w-full rounded-lg bg-white shadow-md">
          <div className="flex w-full flex-col items-center">
            
            
            
            <div className="flex flex-col items-center justify-center   border-b border-slate-200 px-6 py-9 w-full">
              <div className="flex items-center justify-center gap-x-3">
                <img
                  src="logo-dark.png"
                  alt="Logoipsum"
                  className="dark:hidden"
                />
                <p className="block font-satoshi text-2xl font-medium text-slate-900 transition-colors dark:text-slate-50">
                  CodeAnt AI
                </p>
              </div>
              <h1 className="mt-9 text-2xl lg:text-[32px] font-semibold">
                Welcome to CodeAnt AI
              </h1>
              <div className="mt-5 flex w-full items-center justify-center">
                <div
                  className={cn(
                    "flex-1 rounded-lg px-3.5 py-4 text-center font-medium cursor-pointer transition-all  ease-linear",
                    {
                      "bg-[#1570EF] text-white": activeTab === "SAAS",
                      "bg-[#fafafa] text-[#414651] hover:bg-slate-100":
                        activeTab !== "SAAS",
                    },
                  )}
                  onClick={() => setActiveTab("SAAS")}
                >
                  SAAS
                </div>
                <div
                  className={cn(
                    "flex-1 rounded-lg px-3.5 py-4 text-center font-medium cursor-pointer transition-all ease-linear",
                    {
                      "bg-[#1570EF] text-white": activeTab === "Self Hosted",
                      "bg-[#fafafa] text-[#414651] hover:bg-slate-100 ":
                        activeTab !== "Self Hosted",
                    },
                  )}
                  onClick={() => setActiveTab("Self Hosted")}
                >
                  Self Hosted
                </div>
              </div>

              
            </div>



            <div className="flex flex-col items-center justify-center   px-6 py-9 w-full">
                {activeTab === "SAAS" && (
                  <Options options={sassOptions} />
                )}
                {activeTab === "Self Hosted" && (
                  <Options options={selfHostedOptions} />
                )}
              </div>
          </div>
        </div>
        <p className="text-base text-[#181D27]">By signing up you agree to the <span className="font-bold hover:underline cursor-pointer">Privacy Policy</span>.</p>
      </div>


    </div>
  );
};

export default Auth;
