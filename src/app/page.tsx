"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Shop",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="DropNexus"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Curated Tech for Modern Living"
      description="Discover a hand-picked selection of high-quality electronics designed to elevate your everyday efficiency and comfort."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/computer-keyboard-with-mouse-cassette-pink-background_185193-162285.jpg",
          imageAlt: "Premium tech lifestyle",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-device-table_23-2150994395.jpg",
          imageAlt: "Modern office gadgets",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-round-wireless-speaker-with-slick-design-floating-concrete-background_23-2150808028.jpg",
          imageAlt: "Professional audio gear",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-tech-setup-with-nvme-ssd_58702-17232.jpg",
          imageAlt: "Smart home integration",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-tech-device_23-2150722619.jpg",
          imageAlt: "Wearable tech devices",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/managing-smart-speakers-concept_23-2150170095.jpg",
          imageAlt: "Portable sound technology",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Why Choose Us?"
      description={[
        "We partner with global suppliers to bring you the best in tech innovations without the middleman markup.",
        "Our curation team tests every product to ensure quality, reliability, and modern style so you can shop with confidence.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Verified Quality",
          description: "Every product undergoes testing.",
          bentoComponent: "reveal-icon",
          icon: CheckCircle,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vrswbm",
          imageAlt: "minimalist technology company brand logo",
        },
        {
          title: "Fast Shipping",
          description: "Direct to your door quickly.",
          bentoComponent: "reveal-icon",
          icon: Zap,
          imageSrc: "http://img.b2bpic.net/free-photo/computer-keyboard-with-mouse-cassette-pink-background_185193-162285.jpg",
          imageAlt: "minimalist technology company brand logo",
        },
        {
          title: "Global Support",
          description: "We are here for you 24/7.",
          bentoComponent: "reveal-icon",
          icon: Shield,
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-device-table_23-2150994395.jpg",
          imageAlt: "minimalist technology company brand logo",
        },
      ]}
      title="Why Our Products Stand Out"
      description="Our selection is based on rigorous quality control and customer-centric design principles."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Wireless Headphones",
          price: "$129",
          variant: "Black",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-listening-music-headphones_23-2148486228.jpg",
        },
        {
          id: "2",
          name: "Bluetooth Speaker",
          price: "$89",
          variant: "Silver",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-recording-her-vlog_23-2148349494.jpg",
        },
        {
          id: "3",
          name: "Smart Watch",
          price: "$199",
          variant: "Brown",
          imageSrc: "http://img.b2bpic.net/free-photo/mockup-tourist-set-jeans-strap-camera-glasses-scratchpad-smartphone_8353-5734.jpg",
        },
        {
          id: "4",
          name: "Wireless Mouse",
          price: "$49",
          variant: "Black",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-desk-with-notepad-earbuds_23-2148557255.jpg",
        },
        {
          id: "5",
          name: "Power Bank",
          price: "$39",
          variant: "Metallic",
          imageSrc: "http://img.b2bpic.net/free-photo/phone-mobile-connect-battery-power-bank_93675-129752.jpg",
        },
        {
          id: "6",
          name: "LED Smart Lamp",
          price: "$59",
          variant: "White",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-with-plasma-ball_23-2150572274.jpg",
        },
      ]}
      title="Featured Essentials"
      description="Premium tech curated for performance and lifestyle."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "$0",
          subtitle: "Free membership for shoppers",
          buttons: [
            {
              text: "Get Started",
            },
          ],
          features: [
            "Standard Shipping",
            "Customer Support",
          ],
        },
        {
          id: "premium",
          badge: "Pro",
          price: "$19/mo",
          subtitle: "For tech enthusiasts",
          buttons: [
            {
              text: "Upgrade",
            },
          ],
          features: [
            "Free Express Shipping",
            "Priority Support",
            "Early Access",
          ],
        },
      ]}
      title="Simple Member Pricing"
      description="Unlock exclusive benefits and early access with our premium membership tiers."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Designer",
          company: "CreativeFlow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-person-texting-messages-smartphone-app-sofa-finishing-tasks-before_482257-132374.jpg",
        },
        {
          id: "2",
          name: "Mark Chen",
          role: "Engineer",
          company: "TechLab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/working-man_1098-18366.jpg",
        },
        {
          id: "3",
          name: "Elena Rodriguez",
          role: "Marketer",
          company: "GrowthCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Manager",
          company: "StartUpX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-smiles-broadly-enjoys-modern-technologies-uses-smartphone-online-communication-wears-knitted-hat-jacket-isolated-yellow-downloads-cool-app_273609-55770.jpg",
        },
        {
          id: "5",
          name: "Alice Wang",
          role: "Director",
          company: "Innovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-wearing-blue-shirt-holding-tablet_273609-15229.jpg",
        },
      ]}
      title="Trusted by Thousands"
      description="Hear what our community says about their shopping experience."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Microsoft",
        "Google",
        "Apple",
        "Logitech",
        "Samsung",
        "Sony",
        "Anker",
      ]}
      title="Trusted Partner Brands"
      description="We source products from top global manufacturers and trusted partners."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Stay Updated"
      title="Join the Newsletter"
      description="Get exclusive drops and offers sent directly to your inbox."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Products",
          items: [
            {
              label: "Shop All",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="DropNexus"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
