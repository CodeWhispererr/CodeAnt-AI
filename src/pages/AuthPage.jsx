import React, { useState } from "react";
import antIcon from "../assets/svgs/anticon.svg";
import antlogo from "../assets/svgs/antlogo.svg";
import antLogoShaded from "../assets/imgs/antLogoShaded.png";
import upArrow from "../assets/svgs/upArrow.svg";
import graph from "../assets/imgs/Graph.png";
import bitbucket from "../assets/imgs/bitbucket.png";
import key from "../assets/imgs/key.png";
import devops from "../assets/imgs/devops.png";
import { AuthButton } from "../components/AuthButton";

/**
* Renders the authentication page with options for SAAS and Self-Hosted login methods.
* @example
* (sample_arg1, sample_arg2)
* some sample return value
* @returns {JSX.Element} JSX code for the authentication page component.
* @description
*   - Toggles between SAAS and Self-Hosted modes to display corresponding authentication methods.
*   - Utilizes React hooks to manage state for authentication mode and button selection.
*   - Incorporates responsive design with layout adjusting for mobile and desktop views.
*   - Includes a privacy policy acknowledgement at the bottom of the page.
*/
const AuthPage = () => {
    const [authMode, setAuthMode] = useState("saas");
    const [isSelected, setIsSelected] = useState(true);

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full">
                <div className={`hidden md:flex h-screen w-1/2 bg-white border-r relative flex-col justify-center items-center`}>
                    <img src={antLogoShaded} alt={'logo'}
                        className={`absolute left-0 bottom-0 w-[300px] aspect-square`} />
                    <div className={`flex rounded-3xl shadow flex-col w-full max-w-[420px] py-2`}>
                        <div className={`flex gap-2 items-center border-b py-4 px-5`}>
                            <img src={antlogo} alt={'logo'} className={`w-6 h-6`} />
                            <span className={`font-bold  text-[#081735]`}>AI to Detect & Autofix Bad Code</span>
                        </div>
                        <div className={`flex gap-4 justify-between items-center py-4 px-5`}>
                            <div className={`flex flex-col items-center text-[#081735]`}>
                                <span className={`font-bold`}>30+</span>
                                <span className={`text-sm`}>Language Support</span>
                            </div>

                            <div className={`flex flex-col items-center text-[#081735]`}>
                                <span className={`font-bold`}>10K+</span>
                                <span className={`text-sm`}>Developers</span>
                            </div>

                            <div className={`flex flex-col items-center text-[#081735]`}>
                                <span className={`font-bold`}>100K+</span>
                                <span className={`text-sm`}>Hours Saved</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`flex rounded-3xl shadow flex-col gap-2 p-4 px-8 translate-x-[46%] -translate-y-[10px] bg-white`}>
                        <div className={`flex justify-between min-w-44`}>
                            <img src={graph} alt={'graph'} className={``} />
                            <div className={`flex flex-col text-[#081735]`}>
                                <div className={`flex items-center text-[#0049c6] font-bold`}>
                                   <img src={upArrow} alt="upArrow"/>
                                    <span className="pl-2">14%</span>
                                </div>
                                <div className={`font-normal text-xs`}>
                                    This week
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`flex flex-col gap-1`}>
                                <span className={`font-semibold`}>Issues Fixed</span>
                                <span className={`text-3xl font-bold`}>500K+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-screen px-4 sm:px-6 lg:px-6">
                    <div className="bg-white shadow-sm border rounded-lg py-6 w-full flex flex-col justify-between gap-4" style={{ height: "428px" }}>
                        <div className="text-center border-b pb-4">
                            <img
                                src={antIcon}
                                alt="CodeAnt AI Logo"
                                className="mx-auto h-7"
                            />
                            <h2 className="mt-4 text-2xl font-semibold text-[#181D27]">
                                Welcome to CodeAnt AI
                            </h2>
                            <div className="text-center mt-4 mx-4">
                                <div className="relative inline-flex rounded-md w-full">
                                    <div className="absolute inset-0 rounded-md border w-full border-[#D7D7D7]" />
                                    <div className="relative rounded-md inline-flex w-full">
                                        <button
                                            onClick={() => {
                                                setAuthMode("saas")
                                                setIsSelected(true)
                                            }}
                                            className={`px-4 py-2.5 text-md w-[50%] transition-colors font-medium rounded-l-md ${isSelected
                                                ? "bg-[#1570EF] text-white border rounded-md border-[#4c84d4]"
                                                : "border border-r-0 bg-[#fafafa] text-[#414651]"
                                                }`}
                                        >
                                            SAAS
                                        </button>
                                        <button
                                            onClick={() => {
                                                setAuthMode("self-hosted")
                                                setIsSelected(false)
                                            }}
                                            className={`px-4 py-2.5 text-md w-[50%] transition-colors font-medium rounded-r-md ${!isSelected
                                                ? "bg-[#1570EF] text-white border rounded-md border-[#4c84d4]"
                                                : "border border-l-0 bg-[#fafafa] text-[#414651]"
                                                }`}
                                        >
                                            Self Hosted
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Authentication Methods */}
                        <div className="flex-grow w-[92%] lg:w-[60%]  m-auto">
                            {authMode === "saas" && (
                                <div id="saas-methods" className="space-y-4">
                                    <AuthButton
                                        icon="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                        text="Sign in with GitHub"
                                    />
                                    <AuthButton
                                        icon={bitbucket}
                                        text="Sign in with Bitbucket"
                                    />
                                    <AuthButton
                                        icon={devops}
                                        text="Sign in with Azure DevOps"
                                    />
                                    <AuthButton
                                        icon="https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                                        text="Sign in with GitLab"
                                    />
                                </div>
                            )}
                            {authMode === "self-hosted" && (
                                <div id="self-hosted-methods" className="space-y-4">
                                    <AuthButton
                                        icon="https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                                        text="Self-Hosted GitLab"
                                    />
                                    <AuthButton
                                        icon={key}
                                        text="Sign in with SSO"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Privacy Policy */}
                    <p className="text-center text-sm text-gray-900 mt-4">
                        By signing up you agree to the{" "}
                        <a href="#" className="font-medium">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
