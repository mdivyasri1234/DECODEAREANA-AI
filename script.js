<!-- LOGIN SCREEN -->
<div id="loginScreen"
     class="fixed inset-0 z-[100] bg-[#0a0e1a] flex items-center justify-center p-4">

    <div class="w-full max-w-md bg-[#171b28] border border-[#424754] rounded-2xl p-8 shadow-2xl">

        <div class="text-center mb-8">
            <div class="text-4xl mb-3">⚔️</div>

            <h1 class="text-2xl font-bold text-[#adc6ff]">
                DECodeArena AI
            </h1>

            <p class="text-[#c2c6d6] text-sm mt-2">
                Enter the arena. Build your skills.
            </p>
        </div>

        <form id="signupForm">

            <!-- NAME -->
            <div class="mb-4">
                <label class="block text-sm text-[#c2c6d6] mb-2">
                    Full Name
                </label>

                <input
                    id="userName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    class="w-full px-4 py-3 rounded-lg bg-[#0f131f]
                    border border-[#424754] text-white
                    focus:outline-none focus:border-[#adc6ff]"
                >
            </div>

            <!-- DOB -->
            <div class="mb-4">
                <label class="block text-sm text-[#c2c6d6] mb-2">
                    Date of Birth
                </label>

                <input
                    id="userDOB"
                    type="date"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-[#0f131f]
                    border border-[#424754] text-white
                    focus:outline-none focus:border-[#adc6ff]"
                >
            </div>

            <!-- EMAIL -->
            <div class="mb-4">
                <label class="block text-sm text-[#c2c6d6] mb-2">
                    Email
                </label>

                <input
                    id="userEmail"
                    type="email"
                    required
                    placeholder="you@example.com"
                    class="w-full px-4 py-3 rounded-lg bg-[#0f131f]
                    border border-[#424754] text-white
                    focus:outline-none focus:border-[#adc6ff]"
                >
            </div>

            <!-- PASSWORD -->
            <div class="mb-6">
                <label class="block text-sm text-[#c2c6d6] mb-2">
                    Password
                </label>

                <input
                    id="userPassword"
                    type="password"
                    required
                    minlength="6"
                    placeholder="Create a password"
                    class="w-full px-4 py-3 rounded-lg bg-[#0f131f]
                    border border-[#424754] text-white
                    focus:outline-none focus:border-[#adc6ff]"
                >
            </div>

            <button
                type="submit"
                class="w-full py-3 rounded-lg bg-[#4d8eff]
                text-[#00285d] font-bold hover:brightness-110 transition">
                Create Account & Enter Arena
            </button>

        </form>

        <p id="loginMessage"
           class="text-center text-sm mt-4 text-red-400">
        </p>

    </div>
</div>
