import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import queenAsset from "@/assets/queen-010.png.asset.json";

const queen010 = queenAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "خانه", href: "#home" },
  { label: "محصولات", href: "#products" },
  { label: "درباره ما", href: "#about" },
  { label: "کارخانه", href: "#factory" },
  { label: "وبلاگ", href: "#blog" },
  { label: "تماس", href: "#contact" },
];

const categories = [
  { name: "کفش PVC", icon: "👞", desc: "مقاوم و بادوام" },
  { name: "دمپایی PVC", icon: "🩴", desc: "سبک و راحت" },
  { name: "کفش PU", icon: "👟", desc: "انعطاف‌پذیر" },
  { name: "دمپایی PU", icon: "🥿", desc: "نرم و شیک" },
  { name: "کفش ایمنی", icon: "🥾", desc: "استاندارد صنعتی" },
];

const features = [
  { t: "تولید مستقیم کارخانه", d: "بدون واسطه، از خط تولید تا دست شما." },
  { t: "کیفیت درجه یک", d: "استفاده از مواد اولیه مرغوب و آزمایش‌شده." },
  { t: "قیمت رقابتی", d: "قیمت‌گذاری منصفانه برای عمده‌فروشان." },
  { t: "طراحی نوآورانه", d: "الگو‌های اختصاصی، پیشرو در بازار." },
  { t: "سفارش عمده", d: "ظرفیت بالای تولید برای نمایندگی‌ها." },
  { t: "ارسال سراسری", d: "تحویل به تمام ولایات افغانستان." },
  { t: "پشتیبانی حرفه‌ای", d: "همراهی از سفارش تا تحویل." },
  { t: "مواد اولیه ممتاز", d: "PVC و PU با استانداردهای بین‌المللی." },
];

const stats = [
  { n: "۱۳+", l: "سال تجربه" },
  { n: "۲۰۰+", l: "کارکنان" },
  { n: "۳۴", l: "ولایت تحت پوشش" },
  { n: "۱۰۰٪", l: "تولید داخلی" },
];

const faqs = [
  { q: "حداقل سفارش چقدر است؟", a: "برای اطلاع از حداقل سفارش با واحد فروش تماس بگیرید." },
  { q: "ارسال به کدام شهرها انجام می‌شود؟", a: "تمام ولایت‌های افغانستان تحت پوشش قرار دارند." },
  { q: "شرایط پرداخت چگونه است؟", a: "پرداخت به صورت نقدی انجام می‌شود." },
  { q: "مدت آماده شدن سفارش چقدر است؟", a: "بین ۲ تا ۵ روز کاری بسته به حجم سفارش." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full glass-gold font-[Playfair_Display] text-lg font-bold text-gold">
              ش
            </span>
            <div className="leading-tight">
              <div className="text-base font-bold">شبیر عمر</div>
              <div className="text-[10px] tracking-widest text-muted-foreground">SHABIR OMAR</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#order"
            className="btn-gold hidden rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex"
          >
            ثبت سفارش
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] animate-float rounded-full bg-[oklch(0.82_0.14_82/0.15)] blur-3xl" />
          <div
            className="absolute bottom-0 left-0 h-[400px] w-[400px] animate-float rounded-full bg-[oklch(0.5_0.22_265/0.18)] blur-3xl"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div className="animate-rise space-y-8">
            <span className="glass-gold inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.14_82)]" />
              تاسیس ۱۳۹۰ · افغانستان
            </span>
            <h1 className="font-[Playfair_Display] text-5xl font-bold leading-[1.1] md:text-7xl">
              کیفیت را
              <br />
              <span className="text-gold">با ما تجربه</span> کنید
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              پیشرو در تولید کفش و دمپایی PVC و PU در افغانستان. بیش از یک دهه نوآوری،
              طراحی اختصاصی و کیفیت بی‌رقیب.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn-gold rounded-full px-8 py-4 text-sm font-semibold">
                مشاهده محصولات
              </a>
              <a
                href="#factory"
                className="glass rounded-full px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:text-gold"
              >
                معرفی کارخانه ←
              </a>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-[Playfair_Display] text-2xl font-bold text-gold md:text-3xl">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-rise" style={{ animationDelay: "0.2s" }}>
            <div className="glass-gold aspect-[4/5] w-full overflow-hidden rounded-3xl p-1">
              <div
                className="relative flex h-full items-center justify-center overflow-hidden rounded-3xl"
                style={{ background: "var(--gradient-luxury)" }}
              >
                <img
                  src={queen010}
                  alt="کفش زنانه Queen - کد ۰۱۰"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="glass rounded-2xl p-5">
                    <div className="text-xs text-muted-foreground">محصول ویژه</div>
                    <div className="mt-1 font-[Playfair_Display] text-xl font-bold">
                      کفش زنانه Queen
                    </div>
                    <div className="mt-1 text-sm text-gold">۱۲۵ افغانی</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-gold absolute -bottom-6 -left-6 rounded-2xl px-5 py-4">
              <div className="text-xs text-muted-foreground">امتیاز مشتریان</div>
              <div className="mt-1 flex items-center gap-1 text-gold">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Section id="categories" tag="محصولات ما" title="دسته‌بندی محصولات">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c, i) => (
            <div
              key={c.name}
              className="glass group cursor-pointer rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[oklch(0.82_0.14_82/0.4)]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-3 text-5xl transition-transform group-hover:scale-110">
                {c.icon}
              </div>
              <div className="font-semibold">{c.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section id="products" tag="جدیدترین‌ها" title="محصولات ویژه">
        <div className="grid gap-8 md:grid-cols-3">
          <ProductCard
            name="کفش زنانه Queen"
            code="010"
            material="PVC"
            price="۱۲۵"
            colors={["سیاه", "جگری"]}
            size="۳۵ - ۴۱"
            desc="استفاده از نگین‌های مقاوم و تزئینات بادوام، طراحی زیبا در دو رنگ، مناسب بانوان و استفاده روزمره."
            image={queen010}
          />
          <ProductCard soon />
          <ProductCard soon />
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" tag="درباره ما" title="یک دهه پیشگامی در صنعت کفش">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5 text-muted-foreground">
            <p className="leading-loose">
              شرکت تولیدی <span className="font-semibold text-foreground">شبیر عمر</span> از سال
              ۱۳۹۰ فعالیت خود را در صنعت تولید کفش و دمپایی آغاز کرده و همواره با نوآوری، کیفیت و
              طراحی‌های جدید شناخته شده است.
            </p>
            <p className="leading-loose">
              هدف ما تنها تولید محصول نیست، بلکه خلق محصولاتی است که استانداردهای جدیدی در بازار
              ایجاد کنند. بسیاری از طرح‌ها و ایده‌های ما توسط رقبا الگوبرداری شده‌اند که نشان‌دهنده
              پیشرو بودن این مجموعه در صنعت تولید کفش است.
            </p>
            <p className="leading-loose">
              رضایت مشتری، کیفیت بالا و توسعه مداوم مهم‌ترین ارزش‌های شرکت ما هستند.
            </p>
          </div>
          <div className="glass-gold rounded-3xl p-8">
            <div className="mb-6 font-[Playfair_Display] text-2xl font-bold text-gold">
              ارزش‌های ما
            </div>
            <div className="space-y-4">
              {["نوآوری در طراحی", "کیفیت بی‌رقیب", "رضایت مشتری", "توسعه مداوم"].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full glass text-gold">
                    ✓
                  </span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WHY US */}
      <Section id="why" tag="مزایا" title="چرا شبیر عمر؟">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.t}
              className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[oklch(0.82_0.14_82/0.35)]"
            >
              <div className="mb-3 h-10 w-10 rounded-lg bg-[var(--gradient-gold)] opacity-90" />
              <div className="font-semibold">{f.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FACTORY */}
      <Section id="factory" tag="کارخانه" title="قلب تپنده تولید">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            className="glass aspect-video overflow-hidden rounded-3xl"
            style={{ background: "var(--gradient-luxury)" }}
          >
            <div className="flex h-full items-center justify-center text-[160px]">🏭</div>
          </div>
          <div className="space-y-5">
            <p className="leading-loose text-muted-foreground">
              کارخانه شبیر عمر با بیش از <span className="text-gold font-semibold">۱۳ سال</span>{" "}
              سابقه و بهره‌گیری از دانش <span className="text-gold font-semibold">بیش از ۲۰۰</span>{" "}
              نیروی متخصص، یکی از مدرن‌ترین خطوط تولید کفش و دمپایی PVC و PU در افغانستان است.
            </p>
            <p className="leading-loose text-muted-foreground">
              ما با تکیه بر تولید داخلی، توسعه صنعت ملی را در اولویت قرار داده و با نوآوری مستمر،
              محصولاتی خلق می‌کنیم که استانداردهای جدیدی در بازار ایجاد می‌کنند.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass rounded-2xl p-5">
                <div className="font-[Playfair_Display] text-4xl font-bold text-gold">۱۳+</div>
                <div className="mt-1 text-sm text-muted-foreground">سال تجربه</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="font-[Playfair_Display] text-4xl font-bold text-gold">۲۰۰+</div>
                <div className="mt-1 text-sm text-muted-foreground">نیروی متخصص</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" tag="خدمات" title="خدمات ما">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "فروش عمده", d: "قیمت‌های ویژه برای عمده‌فروشان" },
            { t: "تولید سفارشی", d: "طراحی و تولید بر اساس نیاز شما" },
            { t: "صادرات", d: "ارسال به بازارهای بین‌المللی" },
            { t: "همکاری با نمایندگی", d: "شبکه گسترده در سراسر کشور" },
          ].map((s) => (
            <div
              key={s.t}
              className="glass-gold rounded-2xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="font-[Playfair_Display] text-xl font-bold text-gold">{s.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* AGENCY CTA */}
      <section id="agency" className="mx-auto max-w-7xl px-6 py-24">
        <div className="glass-gold overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-3 text-xs tracking-widest text-gold">همکاری با نمایندگی‌ها</div>
              <h3 className="font-[Playfair_Display] text-3xl font-bold md:text-4xl">
                نماینده رسمی شبیر عمر شوید
              </h3>
              <p className="mt-4 text-muted-foreground">
                فرصت همکاری بلندمدت با یکی از بزرگترین تولیدکنندگان کفش افغانستان.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a href="#contact" className="btn-gold rounded-full px-8 py-4 text-sm font-semibold">
                درخواست نمایندگی
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section id="faq" tag="سوالات متداول" title="پرسش‌های رایج">
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      {/* BLOG */}
      <Section id="blog" tag="وبلاگ" title="آخرین مقالات">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass group overflow-hidden rounded-2xl transition-all hover:-translate-y-1"
            >
              <div
                className="flex aspect-video items-center justify-center text-6xl"
                style={{ background: "var(--gradient-luxury)" }}
              >
                📰
              </div>
              <div className="p-6">
                <div className="text-xs text-gold">به‌زودی</div>
                <div className="mt-2 font-semibold">مقاله شماره {i}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  محتوای این بخش به‌زودی منتشر خواهد شد.
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" tag="تماس با ما" title="در ارتباط باشید">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass space-y-4 rounded-2xl p-8">
            <div className="text-xs tracking-widest text-gold">آدرس</div>
            <div className="leading-relaxed">
              یکه‌توت، قلعه وزیر
              <br />
              عقب جمنازیوم فوتبال
              <br />
              کابل، افغانستان
            </div>
          </div>
          <div className="glass space-y-3 rounded-2xl p-8">
            <div className="text-xs tracking-widest text-gold">تلفن و واتساپ</div>
            {["0774704742", "0772218991", "0771717517"].map((p) => (
              <a
                key={p}
                href={`https://wa.me/93${p.slice(1)}`}
                target="_blank"
                rel="noreferrer"
                dir="ltr"
                className="block text-right transition-colors hover:text-gold"
              >
                {p}
              </a>
            ))}
          </div>
          <div className="glass space-y-3 rounded-2xl p-8">
            <div className="text-xs tracking-widest text-gold">شبکه‌های اجتماعی</div>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="block transition-colors hover:text-gold"
            >
              فیسبوک — شبیر عمر پلاستیک
            </a>
            <div className="text-sm text-muted-foreground">اینستاگرام: به‌زودی</div>
            <div className="text-sm text-muted-foreground">تیک‌تاک: به‌زودی</div>
          </div>
        </div>

        {/* ORDER FORM */}
        <div id="order" className="glass-gold mt-10 rounded-3xl p-8 md:p-12">
          <div className="mb-8 text-center">
            <div className="mb-2 text-xs tracking-widest text-gold">ثبت سفارش سریع</div>
            <h3 className="font-[Playfair_Display] text-3xl font-bold">
              سفارش خود را ثبت کنید
            </h3>
          </div>
          <form
            className="mx-auto grid max-w-2xl gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const text = `سلام، درخواست سفارش:%0A نام: ${f.get("name")}%0A محصول: ${f.get("product")}%0A تعداد: ${f.get("qty")}%0A یادداشت: ${f.get("note")}`;
              window.open(`https://wa.me/93774704742?text=${text}`, "_blank");
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="نام و نام خانوادگی"
                className="glass rounded-xl bg-transparent px-4 py-3 text-sm outline-none focus:border-[oklch(0.82_0.14_82/0.5)]"
              />
              <input
                name="product"
                required
                placeholder="نوع محصول (کفش/دمپایی)"
                className="glass rounded-xl bg-transparent px-4 py-3 text-sm outline-none focus:border-[oklch(0.82_0.14_82/0.5)]"
              />
            </div>
            <input
              name="qty"
              placeholder="تعداد سفارش"
              className="glass rounded-xl bg-transparent px-4 py-3 text-sm outline-none focus:border-[oklch(0.82_0.14_82/0.5)]"
            />
            <textarea
              name="note"
              rows={4}
              placeholder="توضیحات..."
              className="glass rounded-xl bg-transparent px-4 py-3 text-sm outline-none focus:border-[oklch(0.82_0.14_82/0.5)]"
            />
            <button className="btn-gold rounded-full py-4 text-sm font-semibold">
              ارسال سفارش از طریق واتساپ
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 font-[Playfair_Display] text-2xl font-bold text-gold">
                شبیر عمر
              </div>
              <p className="text-sm text-muted-foreground">
                کیفیت را با ما تجربه کنید. تاسیس ۱۳۹۰.
              </p>
            </div>
            <div>
              <div className="mb-3 font-semibold">دسترسی سریع</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#products" className="hover:text-gold">محصولات</a></li>
                <li><a href="#about" className="hover:text-gold">درباره ما</a></li>
                <li><a href="#factory" className="hover:text-gold">کارخانه</a></li>
                <li><a href="#contact" className="hover:text-gold">تماس</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">خدمات</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>فروش عمده</li>
                <li>تولید سفارشی</li>
                <li>صادرات</li>
                <li>نمایندگی</li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">تماس</div>
              <div dir="ltr" className="text-right text-sm text-muted-foreground">
                0774704742
              </div>
              <div className="mt-2 text-sm text-muted-foreground">کابل، افغانستان</div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground md:flex-row">
            <div>© {new Date().getFullYear()} شبیر عمر. تمام حقوق محفوظ است.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold">قوانین و شرایط</a>
              <a href="#" className="hover:text-gold">حریم خصوصی</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/93774704742"
        target="_blank"
        rel="noreferrer"
        className="btn-gold fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full text-2xl"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

function Section({
  id,
  tag,
  title,
  children,
}: {
  id: string;
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <div className="mb-3 text-xs tracking-[0.3em] text-gold">— {tag} —</div>
        <h2 className="font-[Playfair_Display] text-4xl font-bold md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ProductCard({
  name,
  code,
  material,
  price,
  colors,
  size,
  desc,
  image,
  soon,
}: {
  name?: string;
  code?: string;
  material?: string;
  price?: string;
  colors?: string[];
  size?: string;
  desc?: string;
  image?: string;
  soon?: boolean;
}) {
  if (soon) {
    return (
      <div className="glass flex aspect-[3/4] flex-col items-center justify-center rounded-3xl p-8 text-center">
        <div className="mb-4 text-6xl opacity-30">✨</div>
        <div className="font-[Playfair_Display] text-2xl font-bold text-gold">به‌زودی</div>
        <div className="mt-2 text-sm text-muted-foreground">
          محصول جدید در راه است
        </div>
      </div>
    );
  }
  return (
    <div className="glass group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-[oklch(0.82_0.14_82/0.4)]">
      <div
        className="flex aspect-square items-center justify-center overflow-hidden text-[140px] transition-transform duration-700 group-hover:scale-110"
        style={{ background: "var(--gradient-luxury)" }}
      >
        {image && (image.startsWith("/") || image.startsWith("http")) ? (
          <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          image
        )}
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-[Playfair_Display] text-xl font-bold">{name}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              کد: {code} · جنس: {material}
            </div>
          </div>
          <div className="text-left">
            <div className="text-gold font-[Playfair_Display] text-xl font-bold">{price}</div>
            <div className="text-[10px] text-muted-foreground">افغانی</div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs text-muted-foreground">رنگ‌ها:</span>
          {colors?.map((c) => (
            <span key={c} className="glass rounded-full px-3 py-1 text-xs">
              {c}
            </span>
          ))}
        </div>
        <div className="text-xs text-muted-foreground">سایز: {size}</div>
        <a
          href="#order"
          className="btn-gold mt-3 flex items-center justify-center rounded-full py-3 text-sm font-semibold"
        >
          سفارش عمده
        </a>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between p-5 text-right font-semibold transition-colors hover:text-gold"
      >
        <span>{q}</span>
        <span className={`text-gold transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="border-t border-border/50 p-5 text-muted-foreground">{a}</div>}
    </div>
  );
}
