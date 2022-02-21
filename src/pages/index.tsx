import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import Page from '@/components/page';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Fanzture - Your next Start in E-Commerce"
        description="Fanzture GmbH - E-Commerce | FANZTOOL - PRIVATE LABEL - CH <-> DE LOGISTICS - web & commerce. Reach out to learn more."
      />
      <Header />
      <main>
        {/* <VideoSection /> */}
        <ListSection />
        <FeatureSection />
        {/* <CasesSection /> */}
        {/* <SocialProof /> */}
        {/* <PricingTable /> */}
      </main>
      <Footer />
    </Page>
  );
}
