import React from "react";
import { useForm } from "react-hook-form";
import { Bot, Eye, EyeOff, Sparkles } from "lucide-react";
import robotBg from "../assets/robot.webp";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
            assistantName: ""
        }
    });
    const navigate = useNavigate();
    const [showPass, setShowPass] = React.useState(false);

    async function onSubmit(info) {
        console.log(info);
    }

    return (
        <div
            style={{
                backgroundImage: `url(${robotBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative">


            {/* Card */}
            <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 shadow-2xl">

                {/* Robot Avatar */}
                <div className="flex flex-col items-center mb-8">



                    <h1 className="text-3xl font-bold text-white mt-4">
                        Create Your AI Robot
                    </h1>

                    <p className="text-cyan-200 text-sm mt-2 text-center">
                        Build your futuristic virtual assistant
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    {/* Assistant Name */}
                    <div>
                        <label className="text-white text-sm block mb-2">
                            Robot Name
                        </label>

                        <input
                            {...register("assistantName")}
                            placeholder="XR-01"
                            className="w-full bg-black/40 border border-cyan-400/20 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-white text-sm block mb-2">
                            Email
                        </label>

                        <input
                            {...register("email")}
                            placeholder="robot@future.ai"
                            className="w-full bg-black/40 border border-cyan-400/20 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="text-white text-sm block mb-2">
                            Security Code
                        </label>

                        <input
                            type={showPass ? "text" : "password"}
                            {...register("password")}
                            placeholder="••••••••"
                            className="w-full bg-black/40 border border-cyan-400/20 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                            className="absolute cursor-pointer right-4 top-[42px] text-cyan-300 hover:text-white transition"
                        >
                            {
                                showPass ? <Eye size={20} /> : <EyeOff size={20} />
                            }
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/30"
                    >
                        Activate Robot
                    </button>
                </form>
                <div>
                    <p onClick={() => navigate('/login')} className="text-white cursor-pointer">Already have account?</p>
                </div>
            </div>
        </div>
    );
}