export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F6F4] text-[#1C1C1E]">
      
<header className="absolute top-0 left-0 w-full z-20">
  <div className="flex items-center justify-between px-8 py-8 lg:px-16">
    
    {/* Logo */}
    <img
      src="/logo.png"
      alt="CREATE 308"
      className="h-16 w-auto"
    />

    {/* Nav */}
    <nav className="hidden md:flex items-center gap-10 text-white/90 text-base">
      <a href="#" className="transition hover:text-white">Programs</a>
      <a href="#" className="transition hover:text-white">Schedule</a>
      <a href="#" className="transition hover:text-white">Tuition</a>
      <a href="#" className="transition hover:text-white">About</a>
    </nav>

    {/* Portal Button */}
    <button className="rounded-full border border-white/40 px-5 py-2.5 text-sm text-white backdrop-blur transition hover:bg-white/10">
      Parent Portal
    </button>

  </div>
</header>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-[#1C1C1E] text-white">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpeg"
            alt="Dance"
            className="h-full w-full object-cover opacity-70"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 grid h-full items-center px-8 lg:grid-cols-2 lg:px-16">
  
          {/* LEFT SIDE (text) */}
          <div className="max-w-xl">
            
            <p className="mb-4 text-sm uppercase tracking-widest text-white/70">
              Dance • Theatre • Music
            </p>

            <h1 className="mb-6 text-4xl font-serif leading-tight md:text-6xl">
              A Studio Where Passion Takes the Stage
            </h1>

            <p className="mb-8 text-lg text-white/80">
              Training, creativity, and confidence for dancers of every level.
            </p>

            <div className="flex gap-4">
              <button className="rounded-full bg-[#C47A7A] px-6 py-3 text-sm font-medium text-white hover:opacity-90">
                Enroll Now
              </button>

              <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
                View Classes
              </button>
            </div>

          </div>

  {/* RIGHT SIDE (big logo) */}
  <div className="hidden lg:flex items-center justify-end">
    <img
      src="/logo.png"
      alt="CREATE 308"
      className="w-[380px] opacity-85 mr-25"
    />
  </div>

</div>

      </section>
      {/* PROGRAMS SECTION */}
      <section className="bg-[#F7F6F4] px-8 py-24 text-[#1C1C1E] lg:px-16">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              Programs
            </p>
            <h2 className="mb-4 text-4xl font-serif md:text-5xl">
              Creative training for every stage
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#4B4B4B]">
              From first steps to performance opportunities, CREATE 308 offers
              dance, theatre, and music programs designed to inspire confidence,
              creativity, and growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  
  <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
    <img
      src="/stockdance2.jpeg"
      alt="Dance"
      className="h-56 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="mb-3 text-2xl font-serif">Dance</h3>
      <p className="mb-5 text-[#4B4B4B]">
        Technique, artistry, and movement classes for students of all ages and levels.
      </p>
      <a href="#" className="text-sm font-medium text-[#6E5A73]">
        Learn More →
      </a>
    </div>
  </div>

  <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
    <img
      src="/stocktheater1.jpeg"
      alt="Musical Theatre"
      className="h-56 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="mb-3 text-2xl font-serif">Musical Theatre</h3>
      <p className="mb-5 text-[#4B4B4B]">
        Performance-based training that blends acting, movement, and stage presence.
      </p>
      <a href="#" className="text-sm font-medium text-[#6E5A73]">
        Learn More →
      </a>
    </div>
  </div>

  <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
    <img
      src="/stockmusic1.jpeg"
      alt="Music"
      className="h-56 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="mb-3 text-2xl font-serif">Music</h3>
      <p className="mb-5 text-[#4B4B4B]">
        Personalized instruction that helps students build skill, discipline, and expression.
      </p>
      <a href="#" className="text-sm font-medium text-[#6E5A73]">
        Learn More →
      </a>
    </div>
  </div>

</div>
        </div>
      </section>
      {/* WHY CREATE 308 */}
<section className="bg-[#efe8e3] px-8 py-24 text-[#1C1C1E] lg:px-16">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
    
    <div className="overflow-hidden rounded-[32px]">
      <img
        src="/stockstudio1.jpeg"
        alt="Students in studio"
        className="h-full w-full object-cover"
      />
    </div>

    <div>
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
        Why CREATE 308
      </p>

      <h2 className="mb-6 text-4xl font-serif leading-tight md:text-5xl">
        A welcoming place to grow, perform, and belong
      </h2>

      <p className="mb-8 max-w-xl text-lg leading-8 text-[#4B4B4B]">
        CREATE 308 offers high quality instruction in a supportive environment
        where students can build confidence, creativity, and skill at every level.
        Whether they are just beginning or ready for more advanced opportunities,
        students are encouraged to grow in a way that feels inspiring and personal.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xl font-serif">Quality Instruction</h3>
          <p className="text-[#4B4B4B]">
            Thoughtful training that builds strong fundamentals and artistry.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-serif">Welcoming Community</h3>
          <p className="text-[#4B4B4B]">
            A place where students and families feel supported from the start.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-serif">Creative Growth</h3>
          <p className="text-[#4B4B4B]">
            Opportunities to explore movement, performance, and self expression.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-serif">Meaningful Experience</h3>
          <p className="text-[#4B4B4B]">
            Programs designed to inspire confidence both on stage and beyond it.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* PARENT FRIENDLY / NEXT STEPS */}
<section className="bg-[#F7F6F4] px-8 py-24 text-[#1C1C1E] lg:px-16">
  <div className="mx-auto max-w-7xl">
    
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
        For Families
      </p>
      <h2 className="mb-4 text-4xl font-serif md:text-5xl">
        Clear steps for a confident start
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-[#4B4B4B]">
        From understanding the experience to finding the right fit and registering online,
        CREATE 308 is designed to make the process simple, welcoming, and easy to follow.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      
      <div className="rounded-[28px] bg-white p-8 shadow-sm">
        <div className="mb-6 text-5xl font-serif text-[#6E5A73]/80">
           01
        </div>
        <h3 className="mb-3 text-2xl font-serif">What to Expect</h3>
        <p className="text-[#4B4B4B] leading-7">
          Learn how the studio experience works, what families can expect, and how students
          are supported as they grow in confidence, creativity, and skill.
        </p>
      </div>

      <div className="rounded-[28px] bg-white p-8 shadow-sm">
        <div className="mb-6 text-5xl font-serif text-[#6E5A73]/80">
           02
        </div>
        <h3 className="mb-3 text-2xl font-serif">Explore Available Programs</h3>
        <p className="text-[#4B4B4B] leading-7">
          Browse dance, musical theatre, and music offerings to find the programs that best fit
          your student’s age, interests, and goals.
        </p>
      </div>

      <div className="rounded-[28px] bg-white p-8 shadow-sm">
        <div className="mb-6 text-5xl font-serif text-[#6E5A73]/80">
           03
        </div>
        <h3 className="mb-3 text-2xl font-serif">Register and Stay Connected</h3>
        <p className="text-[#4B4B4B] leading-7">
          Complete registration online and stay up to date with important information,
          studio communication, and next steps throughout the season.
        </p>
      </div>

    </div>

    <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="#"
        className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white hover:opacity-90"
      >
        Enroll Now
      </a>

      <a
        href="#"
        className="rounded-full border border-[#1C1C1E]/15 px-8 py-3 text-sm font-medium text-[#1C1C1E] hover:bg-white"
      >
        View Programs
      </a>
    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="bg-[#1C1C1E] px-8 py-16 text-white lg:px-16">
  <div className="mx-auto max-w-7xl">
    
    <div className="grid gap-12 md:grid-cols-3">
      
      {/* Logo / About */}
      <div>
        <img
          src="/logo.png"
          alt="CREATE 308"
          className="mb-6 h-12 w-auto opacity-90"
        />
        <p className="max-w-sm text-white/70 leading-7">
          CREATE 308 offers dance, musical theatre, and music programs designed
          to inspire creativity, confidence, and growth for students of all levels.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="mb-4 text-lg font-serif">Explore</h3>
        <ul className="space-y-3 text-white/70">
          <li><a href="#" className="hover:text-white">Programs</a></li>
          <li><a href="#" className="hover:text-white">Schedule</a></li>
          <li><a href="#" className="hover:text-white">Tuition</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="mb-4 text-lg font-serif">Contact</h3>
        <ul className="space-y-3 text-white/70">
          <li>📍 208 West 3rd Street</li>
          <li>Grand Island, NE 68801</li>
          <li>📞 (308) 850-5239</li>
          <li>✉️ info@create308.com</li>
        </ul>

        <div className="mt-6 flex gap-4">
          <a href="#" className="text-white/70 hover:text-white">Instagram</a>
          <a href="#" className="text-white/70 hover:text-white">Facebook</a>
        </div>

      </div>

    </div>

    {/* Bottom bar */}
    <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
  
  <div>
    © {new Date().getFullYear()} CREATE 308. All rights reserved.
  </div>

  <a href="#" className="hover:text-white">
    Privacy Policy
  </a>

</div>

  </div>
</footer>

    </main>
  );
}